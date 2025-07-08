"use client";

import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/icons";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-white py-5">
      <div className="container mx-auto px-4 sm:px-6 text-gray-800">
        <div className="p-10 rounded-lg border border-gray-300">
          <AnimatedText
            text="2UseBooks Project Details"
            className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl text-center"
          />

          {/* Project Overview */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Project Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>2UseBooks</strong> is a catalog-based book selling
              platform developed using the <strong>MERN stack</strong> (MongoDB,
              Express.js, React.js, Node.js). The platform allows users to list
              and sell second-hand books. All payments and communication happen
              offline to keep things simple and secure.
            </p>
            <p className="mt-3 text-gray-700">
              Admins can validate listings, manage book categories, track
              inquiries, and moderate platform content.
            </p>
          </section>

          {/* User Journey */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              User Journey
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 pl-2">
              <li>Visit website and browse book catalog.</li>
              <li>Register using OTP (SMS or Email) to list books.</li>
              <li>Submit book details including images.</li>
              <li>Admin reviews and approves/rejects listings.</li>
              <li>Buyers contact sellers through a form (email sent).</li>
              <li>Deal is finalized and completed offline.</li>
            </ol>
          </section>

          {/* Key Pages */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Key Pages
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 font-medium">
              <div className="border rounded-md py-2 px-3 text-center">
                Home
              </div>
              <div className="border rounded-md py-2 px-3 text-center">
                Books
              </div>
              <div className="border rounded-md py-2 px-3 text-center">
                Blogs
              </div>
              <div className="border rounded-md py-2 px-3 text-center">
                About Us
              </div>
              <div className="border rounded-md py-2 px-3 text-center">
                Contact Us
              </div>
              <div className="border rounded-md py-2 px-3 text-center">
                Login/Register
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Core Features
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>OTP-based secure user registration (SMS or Email).</li>
              <li>
                Book listings include title, author, genre, condition, price
                (optional), and images.
              </li>
              <li>
                Admin approval required for each listing before it is published.
              </li>
              <li>Book details validation using ISBNdb API integration.</li>
              <li>
                Search and filter books by category, condition, or keyword.
              </li>
              <li>
                Buyers can contact sellers through a structured inquiry form.
              </li>
              <li>
                Email notifications for registration, inquiries, listing status,
                etc.
              </li>
              <li>
                Listings expire after 6 months or 7 days of inactivity
                post-inquiry.
              </li>
              <li>No online payments — all deals are made offline.</li>
            </ul>
          </section>

          {/* Admin Dashboard */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Admin Dashboard
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed">
              <li>
                Dashboard overview showing counts of books, users, and
                inquiries.
              </li>
              <li>View, approve, reject, or delete book listings.</li>
              <li>Create and manage book categories and genres.</li>
              <li>Track and filter inquiries made by buyers to sellers.</li>
              <li>Block, delete, or manage user roles and permissions.</li>
              <li>
                Update blog content, contact information, and static pages from
                CMS.
              </li>
            </ul>
          </section>

          {/* Technology Stack */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Technology Stack
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Frontend: React.js + Tailwind CSS</li>
              <li>Backend: Node.js + Express.js</li>
              <li>Database: MongoDB (Mongoose)</li>
              <li>Authentication: OTP-based login (SMS/Email)</li>
              <li>Book Validation API: ISBNdb integration</li>
              <li>Hosting: Vercel (frontend), Render/Heroku (backend)</li>
            </ul>
          </section>

          {/* Future Enhancements */}
          <section>
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Future Enhancements
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-12">
              <li>Mobile app with React Native for Android/iOS</li>
              <li>Advanced analytics dashboard for admin</li>
              <li>Seller reward and referral program</li>
              <li>Wishlist and save-for-later features</li>
              <li>SEO tools and integrated blog CMS</li>
            </ul>
          </section>
          <Link
            className=" text-white mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            download={true}
            href="2usebook.pdf"
            target="_blank"
            passHref
          >
            2UseBooks Pdf Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
