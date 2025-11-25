import React from "react";
import { BookOpen, ShoppingBag, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Buy, Sell & Share Books with{" "}
            <span className="text-yellow-500">BookShare</span>
          </h1>
          <p className="text-gray-600 text-lg">
            BookShare is your one-stop platform for exchanging knowledge.
            Discover pre-loved books at great prices or sell the ones you’ve
            already read to fellow readers.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/find"
              className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-300 transition"
            >
              Find Books
            </Link>
            <Link
              to="/sell"
              className="border border-yellow-400 text-yellow-500 px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Sell Books
            </Link>
          </div>
        </div>

        {/* Right Image / Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/584/584796.png"
            alt="Books"
            className="w-80 md:w-96 drop-shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Why Choose <span className="text-yellow-500">BookShare?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 shadow-sm rounded-2xl p-6 hover:shadow-md transition">
              <BookOpen className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-800">
                Explore Wide Collections
              </h3>
              <p className="text-gray-600 mt-2">
                Browse thousands of books across genres — from novels to
                academic materials.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-2xl p-6 hover:shadow-md transition">
              <ShoppingBag className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-800">
                Buy & Sell Easily
              </h3>
              <p className="text-gray-600 mt-2">
                Post your used books for sale or grab your favorite titles at
                affordable prices.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-2xl p-6 hover:shadow-md transition">
              <Users className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-800">
                Connect with Readers
              </h3>
              <p className="text-gray-600 mt-2">
                Join a growing community of readers and share the joy of books
                with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-yellow-400 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Share Your Books?
        </h2>
        <p className="text-gray-700 mb-6">
          Sign up today and turn your bookshelf into an opportunity.
        </p>
        <Link
          to="/signup"
          className="bg-black text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-800 transition inline-flex items-center gap-2"
        >
          Get Started <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
};

export default Home;