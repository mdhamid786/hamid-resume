"use client";

import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-white py-10">
      <div className="container mx-auto px-4 sm:px-6 text-gray-800">
        <div className="p-10 rounded-lg border border-gray-300">
          <AnimatedText
            text="School Management Software"
            className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl text-center"
          />

          {/* Introduction & Objectives */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Introduction & Objectives
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The School Management Software aims to simplify and streamline
              school operations, communication, and administration by providing
              a unified platform for school staff, teachers, parents, and
              students. It includes a mobile app (iOS & Android), a web portal
              for admins, and a marketing website. The client only needs to
              manage developer account setup; all other tasks are handled by the
              development team.
            </p>
          </section>

          {/* Features (modular breakdown by roles) */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Core Modules & Features
            </h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-bold text-2xl">Admin Module</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <strong>Super Admin (Multi-School Level):</strong>
                    <ul className="list-disc ml-6">
                      <li>
                        Manage and onboard multiple schools under a central
                        system.
                      </li>
                      <li>
                        Create and configure modules per school (enable/disable
                        Attendance, Library, Q&A, etc.).
                      </li>
                      <li>
                        Assign roles like Principal, Finance Admin, or Librarian
                        across schools.
                      </li>
                      <li>
                        Access global analytics: compare performance, payment
                        status, and activity across institutions.
                      </li>
                      <li>
                        Handle licensing, subscription plans, and
                        school-specific branding (logos, colors, domains).
                      </li>
                      <li>
                        Create, edit, deactivate schools in real-time with
                        auto-provisioning of default setup (academic years,
                        grades, roles).
                      </li>
                      <li>
                        Full control over system-wide features, integrations
                        (e.g., payment gateway, SMS provider), and default
                        permissions.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>School Admin (Per-School Level):</strong>
                    <ul className="list-disc ml-6">
                      <li>
                        Manage all users: add/edit/delete Teachers, Parents, and
                        Students.
                      </li>
                      <li>
                        Create class sections, assign subjects to teachers, and
                        configure timetables.
                      </li>
                      <li>
                        Post announcements, notices, event updates, and
                        circulars.
                      </li>
                      <li>
                        Access student academic records, attendance logs, and
                        fee status.
                      </li>
                      <li>
                        Monitor chat activities (teacher-parent conversations)
                        with access to logs.
                      </li>
                      <li>
                        Generate downloadable reports: attendance summaries,
                        class rankings, fee defaulters, exam marksheets.
                      </li>
                      <li>
                        Moderate the notice board and calendar: control
                        visibility and timing of all updates.
                      </li>
                      <li>
                        Issue leaving certificates, reset user credentials, and
                        manage feedback tickets.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Role Management:</strong>
                    <ul className="list-disc ml-6">
                      <li>
                        Create custom roles (e.g., Sports Admin, Event
                        Coordinator) and assign permissions granularly (read,
                        write, delete access).
                      </li>
                      <li>
                        Revoke or transfer access instantly without losing
                        historical activity or logs.
                      </li>
                      <li>
                        Audit logs for every action performed — who did what,
                        and when.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-2xl">Back Office</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <strong>Admissions Management:</strong>
                    <ul className="list-disc ml-6">
                      <li>
                        Online admission forms can be submitted by parents via
                        web or mobile.
                      </li>
                      <li>
                        Admins can view, approve, reject, or waitlist
                        applications with notes.
                      </li>
                      <li>
                        Bulk student admissions supported through structured
                        Excel file upload with validation (e.g., class, DOB,
                        guardian info).
                      </li>
                      <li>
                        Automatic student ID generation and allocation to
                        classes/sections.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Master Database Control:</strong>
                    <ul className="list-disc ml-6">
                      <li>
                        Admin access to manage foundational data like academic
                        years, subjects, exam types, class sections, holiday
                        lists, etc.
                      </li>
                      <li>
                        All dropdowns and dynamic fields across the app (e.g.,
                        categories in report cards, leave types) are powered by
                        this master data.
                      </li>
                      <li>
                        Bulk edit and import/export functionality available.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Timetable Creation:</strong>
                    <ul className="list-disc ml-6">
                      <li>
                        Intuitive timetable builder allows assigning teachers
                        and subjects per class, per period.
                      </li>
                      <li>
                        Supports weekly templates and handles substitutions or
                        day-offs.
                      </li>
                      <li>
                        Conflict detection alerts (e.g., teacher double-booked
                        or subject overlap).
                      </li>
                      <li>
                        Timetables are accessible to teachers, students, and
                        parents in real time.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Notice Board Management:</strong>
                    <ul className="list-disc ml-6 text-gray-700">
                      <li>
                        <strong>Role-Based Visibility:</strong> Admins and
                        principals can create announcements that are visible
                        only to selected user roles:
                        <ul className="list-disc ml-6">
                          <li>All users</li>
                          <li>Only students (specific class/grade)</li>
                          <li>Only parents</li>
                          <li>Only teachers</li>
                          <li>Only specific departments or subject groups</li>
                        </ul>
                      </li>

                      <li>
                        <strong>Content Types Supported:</strong> Notices can
                        include:
                        <ul className="list-disc ml-6">
                          <li>Plain text (title + body)</li>
                          <li>Rich text (with formatting)</li>
                          <li>Images (JPEG, PNG)</li>
                          <li>Attachments (PDFs, Docs, Excel)</li>
                          <li>
                            Links to external URLs (e.g., event registration,
                            forms)
                          </li>
                        </ul>
                      </li>

                      <li>
                        <strong>Dashboard Integration:</strong> Notices appear
                        as:
                        <ul className="list-disc ml-6">
                          <li>
                            Highlight banners at the top of dashboards (mobile &
                            web)
                          </li>
                          <li>Card view or list view depending on priority</li>
                          <li>Unread notices marked with an indicator</li>
                        </ul>
                      </li>

                      <li>
                        <strong>Expiry Management:</strong>
                        <ul className="list-disc ml-6">
                          <li>Each notice can have a start and end date</li>
                          <li>
                            After expiry, it auto-hides or moves to an “Archived
                            Notices” section
                          </li>
                          <li>
                            Admin can manually expire or reactivate notices at
                            any time
                          </li>
                        </ul>
                      </li>

                      <li>
                        <strong>Notification Integration:</strong>
                        <ul className="list-disc ml-6">
                          <li>
                            Push notifications can be sent on notice publish
                          </li>
                          <li>SMS or email fallback for critical notices</li>
                        </ul>
                      </li>

                      <li>
                        <strong>Access Logs:</strong>
                        <ul className="list-disc ml-6">
                          <li>View how many users have read each notice</li>
                          <li>
                            Track reader type (e.g., 80% of Grade 10 viewed the
                            exam notice)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Student Upgrade Process:</strong>
                    <ul className="list-disc ml-6">
                      <li>
                        End-of-year promotion workflow allows reviewing academic
                        scores and teacher feedback before promotion.
                      </li>
                      <li>
                        Support for conditional promotion, failed status, or
                        reallocation to different sections.
                      </li>
                      <li>
                        Admins can upgrade students in bulk with manual override
                        or auto-logic based on grade thresholds.
                      </li>
                      <li>
                        Automatically adjusts student academic year, class, and
                        timetable.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-2xl">Chat System</h3>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>One-to-One Chat:</strong> Secure private messaging
                    between teachers and parents. All conversations are visible
                    to the Principal for moderation and transparency. Supports
                    text, files, images, and emojis.
                  </li>
                  <li>
                    <strong>One-to-Many Broadcasts:</strong> Teachers, admins,
                    or principals can send announcements to an entire class,
                    department, or parent group. Replies are disabled to
                    maintain a clean flow of information.
                  </li>
                  <li>
                    <strong>Group Chats:</strong>
                    <ul className="list-disc ml-6">
                      <li>
                        <strong>Auto-Created:</strong> When a class, section, or
                        subject is created, a dedicated group chat is
                        auto-generated (e.g., “Class 10A - Science”).
                      </li>
                      <li>
                        <strong>User Assignment:</strong> Teachers and
                        students/parents are auto-added based on academic
                        mapping.
                      </li>
                      <li>
                        <strong>Manual Control:</strong> Admins can manually
                        add, remove, or replace users (e.g., substitute
                        teachers, transfer students).
                      </li>
                      <li>
                        <strong>Private Groups:</strong> Create custom private
                        groups for school clubs, staff meetings, or events
                        (e.g., “Sports Team”, “PTA Committee”).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Edit & Delete Messages:</strong>
                    <ul className="list-disc ml-6">
                      <li>
                        <strong>Edit:</strong> Senders can edit messages within
                        a 10-minute window. Edited messages are marked as
                        “(edited)”.
                      </li>
                      <li>
                        <strong>Delete for All:</strong> Admins can delete any
                        message. Users can delete their own messages for all
                        within a time limit.
                      </li>
                      <li>
                        <strong>Delete for Self:</strong> Available for all
                        users to manage personal view.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Global Updates:</strong> Admin or Principal can
                    publish school-wide posts (e.g., “Holiday Announcement”).
                    These appear in a special feed with read tracking and
                    optional likes (no comments/replies).
                  </li>
                  <li>
                    <strong>Safety & Moderation:</strong>
                    <ul className="list-disc ml-6">
                      <li>
                        Profanity filter and sensitive keyword alerts for
                        flagged moderation.
                      </li>
                      <li>
                        Principal has full access to view any conversation and
                        intervene if necessary.
                      </li>
                      <li>
                        Logs are stored for audit with timestamp and user
                        identity.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* <div>
                <h3 className="font-bold text-2xl">Parent Module</h3>
                <ul className="list-disc list-inside">
                  <li>Performance, attendance, payment views</li>
                  <li>Make payments, receive reminders</li>
                  <li>Private teacher chat, monitored by principal</li>
                  <li>Toggle between profiles for multiple children</li>
                </ul>
              </div> */}

              <div>
                <h3 className="font-bold text-2xl">Teacher Module</h3>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Grade Entry:</strong> Teachers can record
                    subject-wise grades, assignment scores, and exam results
                    with grading rubrics. Auto-calculates averages and generates
                    performance insights.
                  </li>
                  <li>
                    <strong>Daily Updates & Homework:</strong> Teachers can post
                    daily class summaries, homework assignments, project work,
                    and upcoming tests. These updates appear in the parent app
                    and are categorized by subject and class.
                  </li>
                  <li>
                    <strong> Filtering:</strong> Teachers and parents can filter
                    daily updates or homework by:
                    <ul className="list-disc ml-6">
                      <li>Date range (e.g., from July 1 to July 10)</li>
                      <li>Subject (e.g., Math, Science)</li>
                      <li>
                        Type (e.g., Homework, Class Summary, Exam Notification)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Automatic Absence Alerts:</strong> If a student is
                    marked absent, an SMS/notification is sent instantly to
                    parents. Teachers can also enter remarks (e.g., sick leave,
                    unexcused absence).
                  </li>
                  <li>
                    <strong>Timetable Management:</strong> View, assign, and
                    manage teaching schedules. Teachers can swap classes with
                    approval and track their weekly workload.
                  </li>
                  <li>
                    <strong>Student Payment Status View:</strong> See whether a
                    student has paid fees. Useful for teachers during activity
                    registration or exam enrollment checks.
                  </li>
                  <li>
                    <strong>Homework Editing & Reminders:</strong> Teachers can
                    edit homework if needed and schedule auto-reminders (e.g.,
                    “Remind parents tomorrow at 7 PM about homework
                    submission”).
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-2xl">Principal Module</h3>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Class & Teacher Performance Analytics:</strong>{" "}
                    Access visual dashboards that show average grades,
                    attendance trends, class-wise rankings, and subject-specific
                    insights. Enables the principal to identify high-performing
                    teachers or students needing support.
                  </li>
                  <li>
                    <strong>Chat Oversight:</strong> View and monitor all
                    teacher-parent private conversations for transparency and
                    dispute resolution. Receive flags for any messages
                    containing sensitive or flagged keywords.
                  </li>
                  <li>
                    <strong>School-Wide Reports:</strong> Download real-time and
                    monthly PDF/Excel reports covering student progress, fee
                    collection status, teacher engagement, and library usage.
                  </li>
                  <li>
                    <strong>Approval Authority:</strong> Approve or reject
                    teacher announcements, circulars, and event notifications
                    before they reach parents.
                  </li>
                  <li>
                    <strong>Audit Logs:</strong> Review detailed activity logs
                    for any changes made by staff — ensuring accountability in
                    user actions.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-2xl">Payment Gateway</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Integrated with Zoho Pay and PhonePe for secure and instant
                    transactions.
                  </li>
                  <li>
                    Supports centralized or per-school payment routing for
                    institutions managing multiple branches.
                  </li>
                  <li>
                    Parents can pay fees without needing to log in — payments
                    can be initiated via secure link after student allocation,
                    reducing friction and enhancing convenience.
                  </li>
                </ul>
              </div>

            

              <div>
                <h3 className="font-bold text-2xl">Library Module</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                  <li>
                    <strong>Book Inventory Management:</strong> Add and manage
                    all library books with details such as title, author,
                    subject, ISBN, quantity, and location (rack/shelf).
                    Real-time tracking of available vs issued books.
                  </li>
                  <li>
                    <strong>Book Issue & Return Tracking:</strong> Maintain logs
                    of book issues per student or teacher, including issue date,
                    return deadline, and status (returned/on hold/lost).
                    Searchable by student name, book title, or ID.
                  </li>
                  <li>
                    <strong>Due-Date Notifications:</strong> System
                    automatically calculates return deadlines and sends
                    reminders to users before and on the due date via in-app
                    notification, SMS, or email.
                  </li>
                  <li>
                    <strong>Overdue Reminders via WhatsApp:</strong> If a book
                    isn’t returned on time, the system sends automated WhatsApp
                    alerts to the user with a message like “Reminder: You have
                    an overdue library book – please return it by
                  </li>
                  <li>
                    <strong>Penalty Calculation (optional):</strong>{" "}
                    Automatically calculate and log fines based on daily overdue
                    charges. Admin can view reports and clear or waive
                    penalties.
                  </li>
                  <li>
                    <strong>Reports:</strong> Admin can download reports showing
                    all issued books, overdue books, popular books, and
                    user-wise borrow history.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-2xl">Report Card</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                  <li>
                    <strong>Multiple Templates by Grade:</strong> The system
                    includes 4–5 pre-designed report card templates tailored for
                    different academic levels (e.g., primary, middle school,
                    high school). Each template is optimized for clarity,
                    layout, and grading structure.
                  </li>
                  <li>
                    <strong>Auto-Generated Reports:</strong> Based on entered
                    marks and assessments, report cards are auto-filled and can
                    be reviewed by teachers and principals before publishing.
                  </li>
                  <li>
                    <strong>Parent Access (View-Only):</strong> Parents can view
                    their child report card directly in the app/web portal.
                    Download, editing, or sharing is restricted to preserve
                    integrity.
                  </li>
                  <li>
                    <strong>Consistent Design:</strong> All templates maintain
                    consistent branding, fonts, and formatting aligned with the
                    school’s identity.
                  </li>
                  <li>
                    <strong>Printable Format:</strong> Admins or teachers can
                    generate PDF versions that are print-ready and shareable
                    internally.
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-bold text-2xl">Leaving Certificate</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                  <li>
                    <strong>Application via App:</strong> Students or parents
                    can raise a request for a leaving certificate through their
                    login interface with a simple form that includes reason,
                    last attended date, and remarks (if any).
                  </li>
                  <li>
                    <strong>Admin Review & Approval:</strong> School admin
                    reviews the request, verifies details, and then generates
                    the certificate from the admin panel.
                  </li>
                  <li>
                    <strong>Single-Page Auto-Filled Template:</strong> Once
                    approved, the certificate is generated using a structured
                    PDF layout including school header, student details, reason
                    for leaving, performance summary, and signature fields.
                  </li>
                  <li>
                    <strong>Delivery:</strong> The certificate is either shared
                    as a downloadable file in the student portal or printed and
                    physically issued based on school preference.
                  </li>
                </ul>
              </div>

                <div>
                <h3 className="font-bold text-2xl">AI Integration</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Automatically track student performance trends using AI
                    models.
                  </li>
                  <li>
                    Provide teachers with smart insights and personalized
                    learning recommendations.
                  </li>
                  <li>
                    Predict dropout risk or subject struggle based on behavior
                    and grades.
                  </li>
                  <li>
                    Enable smart notifications for low performance, inactivity,
                    or irregular attendance.
                  </li>
                  <li>
                    Enhance feedback delivery and optimize academic planning
                    using AI-powered reports.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security & Tech Stack */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
              Security & Technology
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>End-to-end data encryption (128/256-bit)</li>
              <li>Role-based access control (RBAC)</li>
              <li>2FA password recovery</li>
              <li>Restrict screenshot sharing on mobile app</li>
              <li>Frontend: React Native (mobile)</li>
              <li>Backend: Node.js | Database: MongoDB</li>
            </ul>
          </section>

          {/* Timeline & Development */}
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

           <Link
            className=" text-white mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            download={true}
            href="School.docx"
            target="_blank"
            passHref
          >
            School Management Pdf Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
