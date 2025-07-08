"use client";

import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-white py-5">
      <div className="container mx-auto px-4 sm:px-6 text-gray-800">
        <div className="p-10 rounded-lg border border-gray-300">
          <AnimatedText
            text="Logica E-commerce Platform"
            className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl text-center"
          />

          {/* Project Overview */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Project Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Logica</strong> is a full-scale e-commerce platform built
              for seamless shopping experiences across web and mobile. Users can
              browse products, place orders, track shipments, and interact with
              dynamic content. The platform is built on the MERN stack and
              deployed using AWS cloud infrastructure.
            </p>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Our team is actively developing both the user-facing storefront
              and a powerful admin dashboard to manage orders, products,
              coupons, CMS content, SEO tools, and analytics.
            </p>
          </section>

          {/* Admin Dashboard Modules */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Admin Dashboard Modules
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Product Management:</strong> Add, edit, delete, and bulk
                upload products. Assign to categories, manage variants, stock,
                and pricing.
              </li>
              <li>
                <strong>Order Management:</strong> Track orders through all
                stages with real-time updates, refund controls, and CSV export.
              </li>
              <li>
                <strong>Customer Management:</strong> View users, purchase
                history, and login info. Block/unblock users.
              </li>
              <li>
                <strong>Coupon Management:</strong> Generate coupon codes with
                rules like usage limit, expiry, discount % or amount.
              </li>
              <li>
                <strong>CMS Control:</strong> Update homepage banners, blog
                posts, policy pages, and contact info using a visual editor.
              </li>
              <li>
                <strong>Category & SEO:</strong> Create category trees with
                slugs, descriptions, and meta tags. Supports SEO URL structure.
              </li>
              <li>
                <strong>Reporting:</strong> Dashboard charts, daily sales
                reports, best-sellers, abandoned carts, and downloadable CSVs.
              </li>
            </ul>
          </section>

          {/* AWS Hosting */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Hosting & AWS Infrastructure
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>EC2:</strong> Deployed backend server on AWS EC2 for
                scalable performance.
              </li>
              <li>
                <strong>S3 + CloudFront:</strong> Image hosting via S3 with CDN
                support for optimized delivery.
              </li>
              <li>
                <strong>MongoDB Atlas:</strong> Secure cloud DB connected via
                VPC.
              </li>
              <li>
                <strong>Route 53 + SSL:</strong> DNS and HTTPS configured with
                secure SSL.
              </li>
              <li>
                <strong>GitHub Actions:</strong> CI/CD pipeline to auto-deploy
                on code push.
              </li>
            </ul>
          </section>

          {/* Key Features */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Secure Auth:</strong> Email/password login with OTP and
                social login support.
              </li>
              <li>
                <strong>Search & Filters:</strong> Keyword search with
                suggestion, filters by price, category, brand, and rating.
              </li>
              <li>
                <strong>Wishlist & Cart:</strong> Persistent cart, wishlist, and
                guest checkout option.
              </li>
              <li>
                <strong>Checkout:</strong> Multi-step flow with shipping,
                address, payment, and confirmation.
              </li>
              <li>
                <strong>Payment Gateways:</strong> Razorpay, Stripe, UPI, and
                Cash on Delivery.
              </li>
              <li>
                <strong>Email/SMS Notifications:</strong> Triggered for order,
                delivery, refund, etc.
              </li>
              <li>
                <strong>Customer Portal:</strong> View order history, download
                invoices, manage addresses and profile.
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
              <li>Database: MongoDB with Mongoose</li>
              <li>Auth: JWT, OTP (Email/SMS), Google Sign-In</li>
              <li>Hosting: AWS EC2, S3, CloudFront, Route 53</li>
              <li>Deployment: GitHub Actions + Docker (optional)</li>
              <li>Payment Integration: Razorpay, Stripe, PayPal, UPI</li>
            </ul>
          </section>

          {/* Future Enhancements */}
          <section>
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Future Enhancements
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-12">
              <li>AI-based product recommendations & personalization</li>
              <li>PWA support for offline usage and home screen apps</li>
              <li>Affiliate marketing module and multi-level referrals</li>
              <li>In-app wallet and reward point system</li>
              <li>Voice search & AI chatbot for customer support</li>
            </ul>
          </section>

          <Link
            className=" text-white mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            download={true}
            href="Logica.doc"
            target="_blank"
            passHref
          >
            Emaavy Pdf Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
