import React from "react";
import { BookHeart, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          About <span className="text-yellow-500">BookShare</span>
        </h1>

        <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12">
          BookShare is an online platform built for readers, by readers.  
          Our mission is to make books more accessible by connecting book
          lovers who want to *buy, sell, or share* their favorite reads
          easily and affordably.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white shadow-sm rounded-2xl p-6 hover:shadow-md transition text-center">
            <BookHeart className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Love for Books
            </h3>
            <p className="text-gray-600">
              We believe books can change lives — they connect, teach, and
              inspire. BookShare helps keep those stories alive.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-2xl p-6 hover:shadow-md transition text-center">
            <Users className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Built for Readers
            </h3>
            <p className="text-gray-600">
              Whether you’re a student, collector, or casual reader, BookShare
              gives everyone a chance to find or pass on great books.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-2xl p-6 hover:shadow-md transition text-center">
            <Globe className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Global Reach
            </h3>
            <p className="text-gray-600">
              Our vision is to create a worldwide network of readers who can
              exchange books without boundaries.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Join the BookShare Community
          </h2>
          <p className="text-gray-600 mb-6">
            Become part of a movement that values stories, sustainability, and
            sharing.
          </p>
          <a
            href="/signup"
            className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-300 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;