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
            text="Yo Digitals Platform Overview"
            className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl text-center"
          />

          {/* Overview */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Project Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Yo Digitals</strong> is a multi-role B2B+B2C digital commerce platform built for retailers, dealers, wholesalers, corporates, and direct consumers. The platform supports product ordering, KYC submission, wallet features, admin control, and mobile tracking for sales personnel. It includes a fully responsive web portal, mobile apps, and a powerful admin dashboard.
            </p>
          </section>

          {/* Key Functional Modules */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Core Modules & Flows
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li><strong>Multi-Login Flows:</strong> Users can login using email/password or mobile OTP (retailer, corporate, wholesaler, dealer, customer).</li>
              <li><strong>My Profile:</strong> View and update profile, manage KYC documents, and change password.</li>
              <li><strong>Product Browsing:</strong> Show category-wise listing, MRP, configuration, description, and “Add to Cart”.</li>
              <li><strong>Checkout:</strong> Set shipping address and choose payment method (online/pay on delivery).</li>
              <li><strong>Dynamic Links:</strong> Shareable product links redirect to the app for a seamless experience.</li>
              <li><strong>Order Management:</strong> View my orders, order tracking, download invoice, cancel/refund requests, filter by status and date.</li>
              <li><strong>Wallet:</strong> Cashback management and in-app wallet for payment and refunds.</li>
              <li><strong>Push Notifications & SMS:</strong> System-wide notifications and order/status updates.</li>
              <li><strong>Content Pages:</strong> About Us, Contact, Privacy Policy, Refund Policy, Terms & Conditions, Help.</li>
              <li><strong>Referral System:</strong> Share referral links with tracking for both referrer and referee.</li>
            </ul>
          </section>

          {/* Special Role Modules */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Special User Roles
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li><strong>Retailers:</strong> Access products, place orders, manage cart, check top-selling & deals of the week, view ledger & stock, and track dues.</li>
              <li><strong>Wholesalers & Corporates:</strong> Submit KYC, place bulk orders, and raise inquiries. Emails sent automatically to Yo Digitals and assigned sales managers.</li>
              <li><strong>Dealers:</strong> Enter dealer code + OTP to access private dashboard. View stock, due amount, CN/DN, past orders, ledger, payment history, download bills, and view special offers.</li>
              <li><strong>Salesmen:</strong> Use the app to track visits. Real-time GPS logs show route, stops, and customer visits on the admin panel.</li>
            </ul>
          </section>

          {/* Admin Panel Modules */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Admin Panel Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Manage products, categories, orders, users, roles, coupons.</li>
              <li>Inventory: Get, Edit, Update, Filter, change shipment dates and order statuses.</li>
              <li>Monitor KYC submissions and approvals.</li>
              <li>Generate sales, inventory, and user activity reports.</li>
              <li>Real-time visibility of salesman location and logs.</li>
            </ul>
          </section>

          {/* Mobile App Features */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Mobile App Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>React Native Android & iOS apps with multilingual support (English, Hindi).</li>
              <li>Signup/Login via mobile OTP.</li>
              <li>Shopping with multiple payment methods (UPI, Cards, Wallet).</li>
              <li>KYC uploads via camera/gallery.</li>
              <li>Rate us, push notifications, in-app support center.</li>
              <li>Refund/cancellation request, order history filter, invoice as PDF.</li>
              <li>View last 7 days activity, earnings, cashback, cart discounts.</li>
            </ul>
          </section>

          {/* KYC Fields & Verification */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              KYC & Compliance
            </h2>
            <p className="text-gray-700 mb-2">
              Full company and individual KYC flow including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Aadhaar (front & back), PAN Card, Certificate of Incorporation, GST.</li>
              <li>Digital selfie, signature, address, police verification.</li>
              <li>Bank account verification & digital document uploads.</li>
              <li>Owner details and OTP-based mobile verification.</li>
            </ul>
          </section>

          {/* Technology Stack */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Technology Stack
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><strong>Backend:</strong> Node.js, PostgreSQL, Redis, Swagger</li>
              <li><strong>Frontend Web & Admin:</strong> React.js, React Bootstrap, Material UI, SCSS</li>
              <li><strong>Mobile App:</strong> React Native (iOS + Android)</li>
              <li><strong>State Management:</strong> Redux or Immer</li>
              <li><strong>Authentication:</strong> JWT + Refresh Tokens</li>
              <li><strong>Crash Tracking:</strong> Firebase Crashlytics</li>
              <li><strong>Hosting:</strong> AWS Cloud</li>
            </ul>
          </section>

          {/* Security Features */}
          <section>
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Security Measures
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Track registration/login dates, IP, and device info</li>
              <li>OTP attempt limits with IP blocking</li>
              <li>Token expiration and refresh logic</li>
              <li>Confidentiality agreement for all contributors</li>
            </ul>
          </section>
           <Link
            className=" text-white mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            download={true}
            href="yodigital.pdf"
            target="_blank"
            passHref
          >
            Yo Digital Pdf Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
