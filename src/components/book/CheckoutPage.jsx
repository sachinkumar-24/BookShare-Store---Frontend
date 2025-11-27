import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function RazorpayCheckout({ book }) {
  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("token");
      const amount = book.price; // in INR (not paise)

      // Step 1️⃣: Create Razorpay Order on backend
      const { data } = await axios.post(
        "https://bookshare-store-backend-1.onrender.com/api/payment/create-order",
        { amount, bookId: book._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const { order, key } = data;

      // Step 2️⃣: Initialize Razorpay Checkout
      const options = {
        key,
        amount: order.amount, // already in paise from backend
        currency: order.currency,
        name: "BookShare",
        description: "Book Purchase Payment",
        image: "/logo.png",
        order_id: order.id,

        handler: async function (response) {
          try {
            // Step 3️⃣: Verify payment on backend
            const verifyRes = await axios.post(
              "https://bookshare-store-backend-1.onrender.com/api/payment/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                bookId: book._id,      // REQUIRED ✔
                amount: amount,        // REQUIRED ✔ (in INR)
              },
              { headers: { Authorization: `Bearer ${token}` } }
            );

            if (verifyRes.data.success) {
              toast.success("Payment successful 🎉");
            } else {
              toast.error("Payment verification failed ❌");
            }
          } catch (err) {
            console.error("Verification error:", err);
            toast.error("Payment verification failed ❌");
          }
        },

        prefill: {
          name: "Book Buyer",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F43F5E",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initiation error:", error);
      toast.error("Failed to initiate payment");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="flex items-center gap-1 text-white bg-rose-500 hover:bg-rose-600 px-3 py-1 rounded-lg"
    >
      Buy Now
    </button>
  );
}
