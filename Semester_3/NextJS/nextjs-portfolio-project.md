# Next.js Portfolio-Showcase-Level Projects

Students must select **one** project and build a complete, functional web application using Next.js. These projects are designed to build real-world applications that they can proudly showcase in their portfolios and discuss during technical interviews.

## Common Technology Guidelines

-   **Frontend:** Next.js App Router.
-   **Backend:** Next.js API Route Handlers.
-   **Database:** MongoDB with Mongoose or PostgreSQL with Prisma.
-   **Authentication and Authorization:** Not required for this
    submission.
-   **Deployment:** Vercel.
-   **Source code:** GitHub repository.

Do not expose API keys, database credentials, or other secrets in
frontend code or public repositories.

------------------------------------------------------------------------

# 1. Billing & Subscription Management SaaS

## Problem Statement

Freelancers, startups, and small businesses often struggle to manage
customers, recurring subscriptions, invoices, billing cycles, and
payment records using separate tools.

Develop a centralized billing and subscription management platform that
allows a business to manage customers, create products and pricing
plans, track recurring subscriptions, generate invoices, and monitor
payment records. The application should simulate the core billing
workflow of a subscription management platform. Real payment processing
is not required.

## Core Features

### Customer Management

-   Create, view, update, and delete customer profiles.
-   Store customer name, email, phone number, and billing address.
-   View a customer's subscriptions, invoices, and payment history.
-   Search and filter customers.

### Product & Pricing Management

-   Create and manage products or services.
-   Define product prices.
-   Support monthly, yearly, and one-time pricing.
-   Enable or disable products and pricing plans.

### Subscription Management

-   Create subscriptions for customers using available pricing plans.
-   Store subscription start date and next billing date.
-   Track statuses such as Active, Paused, Cancelled, and Past Due.
-   Support plan upgrades and downgrades.
-   Pause or cancel subscriptions.
-   Display subscription history and upcoming renewal amounts.

### Invoice Management

-   Generate invoices for subscriptions and one-time purchases.
-   Add multiple line items.
-   Calculate subtotal, discounts, taxes, and total.
-   Generate unique invoice numbers.
-   Track Draft, Pending, Paid, and Overdue statuses.
-   View and download invoices as PDF files.

### Payment Records

-   Record payments against invoices.
-   Store payment amount, date, method, and status.
-   Track successful, pending, and failed payment records.
-   Allow simulated payment status updates.
-   Display payment history.

### Dashboard & Analytics

-   Display recorded revenue and active subscriptions.
-   Calculate monthly recurring revenue (MRR).
-   Show upcoming renewals.
-   Display pending and overdue invoices.
-   Show monthly revenue trends.

## Optional Enhancements

-   Email reminders for upcoming renewals and overdue invoices.
-   AI-generated invoice descriptions.
-   Natural-language monthly revenue summaries.
-   Public pricing page for subscription plans.

## Scope & Restrictions

-   Real payment gateway integration is not required.
-   Never collect or store actual card numbers, CVVs, or banking
    credentials.
-   Subscription renewals may be simulated; a production-grade billing
    engine is not expected.
-   Focus on customer, subscription, invoice, and payment-record
    workflows.

## Expected Outcome

A business user should be able to manage customers, define products and
pricing, create and track subscriptions, generate invoices, record
simulated payments, and understand billing activity through a dashboard.

**Useful screens to study:** revenue dashboard, customer/subscriber
list, subscription details, pricing plans, invoice history.

![Subscription billing
dashboard](https://cdn.prod.website-files.com/638e44e71475a045ed04bc81/65b2313b39029c8f3917ea11_Subscribers.png)

**Existing product and design references:**

1.  [Received AI -- Subscription billing dashboard
    screenshot](https://www.received.ai/solutions/subscription-billing)
2.  [SaaSUI -- Billing UI patterns from real SaaS
    products](https://www.saasui.design/pattern/billing)
3.  [SaaSFrame -- Billing and subscription interface
    gallery](https://www.saasframe.io/patterns/billing-subscription)
4.  [Dribbble -- Billing dashboard UI
    designs](https://dribbble.com/search/billing-dashboard-ui)
5.  [Stripe -- Billing and subscription
    product](https://stripe.com/billing)

------------------------------------------------------------------------

# 2. Freelance Project & Client Management Platform

## Problem Statement

Freelancers often manage multiple clients and projects using separate
spreadsheets, messaging applications, and task tools. This makes it
difficult to track project progress, deadlines, deliverables, client
communication, and payments.

Develop a platform that helps freelancers organize clients and manage
projects from initial planning through delivery and payment tracking.

## Core Features

### Client Management

-   Create, view, update, and delete client profiles.
-   Store client name, email, contact details, company name, and notes.
-   View projects associated with each client.
-   Search and filter clients.
-   Display client project and payment history.

### Project Management

-   Create projects and associate them with clients.
-   Store title, description, budget, start date, and deadline.
-   Track Planning, In Progress, On Hold, Completed, and Cancelled
    statuses.
-   Assign project priorities.
-   Update project details and progress.
-   Display projects in list and card views.

### Task & Milestone Management

-   Break projects into tasks or milestones.
-   Set deadlines and priorities.
-   Track To Do, In Progress, and Completed statuses.
-   Record milestone completion.
-   Display project completion progress.
-   View upcoming and overdue tasks.

### Deliverable Management

-   Add deliverables to projects.
-   Store descriptions and submission dates.
-   Attach relevant files or links.
-   Track Pending, Submitted, Approved, and Revision Required statuses.
-   Maintain deliverable update history.

### Payment Tracking

-   Define project budgets and agreed payment amounts.
-   Record advance and subsequent payments.
-   Track paid and outstanding balances.
-   Maintain project payment history.
-   Display project-wise earnings and pending amounts.

### Dashboard & Reports

-   Display active and completed projects.
-   Show upcoming deadlines.
-   Display total earnings and outstanding payments.
-   Show project status distribution.
-   Filter reports by client, status, and date.

## Optional Enhancements

-   AI-generated project proposals from client requirements.
-   AI-generated project progress summaries.
-   Downloadable project reports or invoices.
-   Project comments and activity updates.
-   Email deadline reminders.

## Scope & Restrictions

-   Real payment processing is not required; payments are recorded
    manually.
-   A complete team collaboration system is not required.
-   Focus on an individual freelancer's clients, projects, deliverables,
    tasks, and payments.

## Expected Outcome

A freelancer should be able to maintain client records, create projects,
organize tasks and milestones, track deliverables, record payments, and
monitor workload and earnings from one application.

**Useful screens to study:** overview dashboard, client list and
profile, project workspace, task board, invoices and payment tracking.

![Bonsai client and project
overview](https://images.openai.com/static-rsc-4/zRpPCcAfM4hwRYhYe88o7zu5KvT4IGCP7rlsju26-tkrANQIozVP_-ZV5a4y6wky0nij11pdkltAuurTFU8nHYg1MzGyNV9SXwMEdjX5RxAUv8SrbHED19VNMJpU0Ltkubd7yc4fqeQwGuD05Bdq0H8OhU_cZmxu0yBjSUMpSTXa8QA89XQOAORtZt2CrWqW?purpose=fullsize)

**Existing product and design references:**

1.  [Bonsai -- Freelancer project and client
    management](https://www.hellobonsai.com/)
2.  [HoneyBook -- Client and project workflow
    interface](https://www.honeybook.com/)
3.  [Dribbble -- Project management dashboard
    designs](https://dribbble.com/search/project-management-dashboard)
4.  [Dribbble -- CRM dashboard
    designs](https://dribbble.com/search/crm-dashboard)
5.  [Behance -- Freelance project management UI
    designs](https://www.behance.net/search/projects/freelance%20dashboard%20ui)

------------------------------------------------------------------------

# 3. Equipment & Resource Booking System

## Problem Statement

Colleges, laboratories, offices, and organizations share equipment and
resources such as cameras, projectors, laptops, meeting rooms,
laboratory instruments, and sports equipment.

When bookings are managed manually, users may face double bookings,
unclear availability, and difficulty tracking issued or returned
resources.

Develop a resource booking platform where users can browse resources,
request bookings for specific dates and times, and track reservations.
Resource managers should be able to manage inventory and booking
requests.

## Core Features

### Resource Management

-   Add, view, update, and remove resources.
-   Store name, description, category, images, and location.
-   Define the total quantity available.
-   Set resource availability.
-   Display resource details and usage instructions.
-   Search and filter by category and location.

### Availability Management

-   Select a required date and time range.
-   Display resources available for the selected period.
-   Check whether the requested quantity is available.
-   Prevent overlapping bookings that exceed available inventory.
-   Show unavailable dates or time slots.

### Booking Requests

-   Submit requests with purpose, date, time, and quantity.
-   Generate unique booking references.
-   Track Pending, Approved, Rejected, Cancelled, and Completed
    statuses.
-   Allow eligible cancellations.
-   Display booking details and history.

### Booking Management

-   Display incoming booking requests.
-   Approve or reject requests.
-   Add notes to booking decisions.
-   View bookings in calendar or list form.
-   Identify scheduling conflicts.
-   Track resources currently issued and returned.

### Return & Usage Tracking

-   Record resource issue and return dates.
-   Record returned item condition.
-   Track overdue returns.
-   Maintain resource usage history.
-   Update availability after returns.

### Dashboard & Analytics

-   Display total, booked, and available resources.
-   Show pending requests and overdue returns.
-   Identify frequently booked resources.
-   Display booking statistics by category and date.

## Optional Enhancements

-   Generate QR codes for booking references.
-   Scan booking references when issuing or returning equipment.
-   Send approval and reminder emails.
-   Suggest alternative available time slots.
-   Generate resource utilization reports.

## Scope & Restrictions

-   Online payments and rental charges are not required.
-   Hardware integration and physical access control are not required.
-   Focus on availability checks, booking conflicts, approval workflows,
    and resource tracking.

## Expected Outcome

A user should be able to discover resources, check availability, submit
booking requests, and track reservations. A resource manager should be
able to manage inventory, approve bookings, issue resources, record
returns, and monitor utilization.

**Useful screens to study:** resource catalogue, availability calendar,
booking form, booking approval queue, equipment inventory and booking
history.

![Cheqroom equipment booking
calendar](https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/2604c4b4-eade-4117-ad3d-7cc0ca915f52.png)

**Existing product and design references:**

1.  [Cheqroom -- Equipment booking and asset
    management](https://www.cheqroom.com/)
2.  [Skedda -- Space and resource booking](https://www.skedda.com/)
3.  [Dribbble -- Booking calendar dashboard
    designs](https://dribbble.com/search/booking-calendar-dashboard)
4.  [Dribbble -- Room and resource booking UI
    designs](https://dribbble.com/search/room-booking)
5.  [Behance -- Equipment booking system UI
    designs](https://www.behance.net/search/projects/equipment%20booking%20system)


------------------------------------------------------------------------

# 4. AI-Powered Customer Feedback Analyzer

## Problem Statement

Businesses receive customer feedback through reviews, surveys, and
support messages. Manually reading and categorizing large amounts of
feedback makes it difficult to identify common complaints, understand
customer sentiment, and discover areas that need improvement.

Develop an AI-powered feedback analysis platform that allows businesses
to collect or import customer feedback, analyze it using an AI service,
and view meaningful insights through an analytics dashboard.

## Core Features

### Feedback Management

-   Add individual feedback entries.
-   Import feedback from a CSV file.
-   Store feedback text, submission date, source, and optional rating.
-   View, search, and filter feedback by date, source, rating, and
    analysis status.
-   View original feedback alongside its analysis.

### AI Sentiment Analysis

-   Analyze feedback using an AI API.
-   Classify each entry as Positive, Negative, or Neutral.
-   Store the sentiment result with the original feedback.
-   Display the classification for each entry.
-   Allow users to retry failed analyses.

### Topic & Issue Extraction

-   Identify topics mentioned in feedback.
-   Extract common complaints and positive observations.
-   Group similar feedback by topic.
-   Display frequently mentioned issues.
-   Filter feedback by extracted topic.

### Feedback Summarization

-   Summarize selected feedback entries.
-   Summarize positive experiences and common complaints.
-   Generate summaries for a selected date range.
-   Show supporting feedback entries where possible.

### Analytics Dashboard

-   Display total feedback analyzed.
-   Show positive, negative, and neutral counts.
-   Display sentiment distribution charts.
-   Show frequently mentioned topics and common complaints.
-   Compare feedback trends across date ranges.

### AI Business Insights

-   Generate an AI-written report based on analyzed feedback.
-   Highlight recurring customer problems.
-   Suggest areas that may need improvement.
-   Allow date-range selection.
-   Save previously generated reports.

## Optional Enhancements

-   Detect sentiment changes over time.
-   Compare feedback across products or services.
-   Generate suggested responses to negative feedback.
-   Export reports as PDF or CSV.
-   Support multiple languages if the selected AI service supports them.

## Scope & Restrictions

-   Training a machine learning model is not required.
-   Use an external AI API for sentiment classification, topic
    extraction, and summarization.
-   AI classifications are not guaranteed facts; users must be able to
    inspect the original feedback.
-   Avoid sending unnecessary personal or sensitive customer information
    to an external AI service.
-   Focus on useful analysis, not a generic chatbot.

## Expected Outcome

A business user should be able to import or submit customer feedback,
analyze sentiment and common topics, identify recurring issues, and
generate useful reports through an interactive dashboard.

**Useful screens to study:** sentiment overview,
positive/negative/neutral trends, feedback list, topic or category
analysis, AI-generated insights.

![Customer feedback analytics
dashboard](https://images.openai.com/static-rsc-4/zEzfQfvBhYYrzbmMRkwzysSM6f2x6IRkNC3G6oPzNbi_JdMzpHNejyAu1g6__s2Yct415g7QRchU9LXvpuJOIR5LebyGY7K5BclDQGyYpuqu5tCXsoXY3JIrls4bXljf571CN1tJOiA-q7bSUKDkR0tqn0ayTJ4Bd2-7nx2vieuTG-JNldM_dYIVnRrugSe6?purpose=fullsize)

**Existing product and design references:**

1.  [Feedia -- Customer feedback analytics
    dashboard](https://feedia.cc/)
2.  [Medallia -- Text analytics and customer experience
    platform](https://www.medallia.com/platform/text-analytics/)
3.  [Dribbble -- Sentiment analysis dashboard
    designs](https://dribbble.com/search/sentiment-analysis-dashboard)
4.  [Dribbble -- Customer feedback dashboard
    designs](https://dribbble.com/search/customer-feedback-dashboard)
5.  [Behance -- Customer experience analytics dashboard
    designs](https://www.behance.net/search/projects/customer%20feedback%20dashboard)

------------------------------------------------------------------------

# 5. Second-Hand Marketplace for Students

## Problem Statement

Students frequently need affordable textbooks, calculators, electronics,
furniture, and other study-related items. At the same time, other
students have unused items they would like to sell or exchange.

Develop a student-focused second-hand marketplace where users can
publish listings, discover available items, contact sellers, and manage
their own listings.

## Core Features

### Product Listings

-   Create listings for used items.
-   Add name, description, price, category, condition, and images.
-   Support categories such as Books, Electronics, Furniture,
    Stationery, and Other.
-   Define listing types: For Sale, Free, or Exchange.
-   Edit, deactivate, or delete listings.
-   Mark listings as Available, Reserved, or Sold.

### Marketplace Discovery

-   Display available listings.
-   Search by item name and description.
-   Filter by category, price range, and condition.
-   Sort by newest, price, or relevance.
-   Display listing details and similar listings.

### Seller Profiles

-   Display seller information.
-   Show the seller's active listings.
-   Display seller contact preferences.
-   Maintain listing history.

### Enquiries & Offers

-   Allow interested users to submit enquiries.
-   Include an optional offer price.
-   Allow sellers to accept or reject offers.
-   Track enquiry statuses.
-   Maintain enquiry history.
-   Notify users when an enquiry receives a response.

### Favorites

-   Save and remove favorite listings.
-   Display saved items separately.
-   Handle listings that are no longer available.

### Dashboard

-   Display active, sold, and reserved listings.
-   Show received enquiries and pending offers.
-   Provide listing and enquiry management.

## Optional Enhancements

-   AI-generated listing descriptions from item details.
-   AI-assisted category suggestions.
-   Similar-item recommendations.
-   QR codes for sharing listings.
-   Location-based listing discovery.
-   Image compression and optimization.

## Scope & Restrictions

-   Real payment gateway integration is not required.
-   A complete real-time chat system is not required.
-   Enquiries and offers can use structured records and status updates.
-   Focus on marketplace workflows, search, filtering, listing
    management, and buyer-seller interactions.

## Expected Outcome

A student should be able to publish an item, discover second-hand
products, contact sellers, submit offers, save interesting listings, and
manage their marketplace activity.

**Useful screens to study:** marketplace home, product grid, search and
filters, product details, create listing, seller dashboard.

![Second-hand marketplace app
concept](https://images.openai.com/static-rsc-4/LKl-U53SlKcO-xmgJ9lMfWV8nYL3g9cF1eeZ2zvvc5WSZ56r5KldXHpb-I45WSHZeBimiFq7FyvjTDMDVgUzUlV4SDwHzgsKWBW0nt9ZUWGJn1kNn4ulaka9AFWZitZMTtYUav1A1nAPEXHspIGvydE5Tgivm99-b2p9-8XoZuoinhm3RRSYU9n1tZyhPpPl?purpose=fullsize)

**Existing product and design references:**

1.  [eBay -- Marketplace product discovery and
    listings](https://www.ebay.com/)
2.  [Facebook Marketplace -- Local buying and
    selling](https://www.facebook.com/marketplace/)
3.  [Dribbble -- Marketplace website UI
    designs](https://dribbble.com/search/marketplace-website)
4.  [Dribbble -- Second-hand marketplace app
    designs](https://dribbble.com/search/second-hand-marketplace)
5.  [Behance -- E-commerce marketplace UI
    designs](https://www.behance.net/search/projects/marketplace%20ecommerce%20ui)

------------------------------------------------------------------------

# 6. Website Monitoring & Status Page Platform

## Problem Statement

Website owners and developers need to know whether their websites and
APIs are operational. Unexpected downtime can affect customers and
business operations, but small projects may not have a centralized way
to monitor availability and communicate service incidents.

Develop a website and API monitoring platform where users can register
endpoints, periodically check availability, track response times, manage
incidents, and publish public status pages.

The application should demonstrate basic monitoring concepts without
attempting to replace a full production monitoring platform.

## Core Features

### Website & API Management

-   Register a website URL or API endpoint.
-   Store a name, URL, description, and monitoring type.
-   Enable or disable monitoring.
-   Configure monitoring intervals from supported values.
-   Validate endpoint URLs before saving.
-   Organize endpoints into projects or groups.

### Availability Monitoring

-   Send periodic HTTP requests to registered endpoints.
-   Record response status codes.
-   Measure response times.
-   Mark checks successful or failed based on configured conditions.
-   Store check timestamps and results.
-   Detect when an endpoint becomes unavailable.
-   Detect when an unavailable endpoint recovers.

### Monitoring History & Analytics

-   Display recent check results.
-   Show response-time charts.
-   Calculate uptime percentages over a selected period.
-   Display successful and failed check counts.
-   Show the longest recorded downtime.
-   Filter history by endpoint and date range.

### Incident Management

-   Create an incident when an endpoint is detected as unavailable.
-   Record when the incident started.
-   Update the incident when the endpoint recovers.
-   Display incident duration.
-   Allow users to add incident descriptions and updates.
-   Maintain incident history.

### Public Status Pages

-   Generate a public status page for a project.
-   Display monitored services and their current status.
-   Show recent incidents.
-   Display uptime information for each service.
-   Provide a shareable public URL.
-   Allow users to customize the status page title and description.

### Dashboard

-   Display total monitored endpoints.
-   Show operational and unavailable endpoints.
-   Display overall uptime.
-   Show recent incidents.
-   Display response-time trends.

## Optional Enhancements

-   Email notifications when an endpoint becomes unavailable or
    recovers.
-   Configurable response-time thresholds.
-   AI-written incident summaries from monitoring history.
-   Support custom HTTP methods and expected status codes.
-   Maintenance windows during which alerts are suppressed.

## Important Technical Considerations

-   Monitoring requires scheduled execution. A normal browser request or
    dashboard visit must not be responsible for running all checks.
-   Use a suitable scheduler or external cron service to trigger
    monitoring jobs.
-   Store monitoring results in the database for historical views.
-   Prevent overlapping checks for the same endpoint where practical.
-   Validate and restrict user-supplied URLs. Do not allow the
    monitoring service to access private network addresses, localhost,
    or cloud metadata endpoints; this helps prevent server-side request
    forgery (SSRF).
-   Vercel deployment alone should not be assumed to provide a
    continuously running worker. Plan the scheduled-check mechanism
    separately.

## Scope & Restrictions

-   Full infrastructure monitoring is not required.
-   Server metrics, container monitoring, log aggregation, and
    distributed tracing are outside the project scope.
-   Monitoring can use HTTP/HTTPS checks only.
-   Focus on endpoint availability, response-time history, basic
    incident detection, and public status pages.

## Expected Outcome

A user should be able to register websites and API endpoints, view
monitoring history, identify downtime, track incidents, and share a
public status page showing service availability.

**Useful screens to study:** monitors overview, uptime and response-time
charts, add-monitor form, incident history, public status page.

![Uptime Kuma monitoring
dashboard](https://images.openai.com/static-rsc-4/e6yxsHQ2hyh6XchFNY7xhWb-00CIoAGJ8_AFJkUULVp1kRz0RnqR7xIMlA4j-2B1QVl1-VxYzLivCFX4cLTleoHX9EP1E-BDXu0EIMmMGFIuoBk7aDCRzoAL9OeZpmhOrwali9loD0kok5m-S98uhh9DA461I2c3HNjhJ4y2GP1a3UOrRsK3sgHgn84s8HzE?purpose=fullsize)

**Existing product and design references:**

1.  [Uptime Kuma -- Open-source website
    monitoring](https://uptime.kuma.pet/)
2.  [Better Stack -- Website monitoring and status
    pages](https://betterstack.com/)
3.  [Dribbble -- Website monitoring dashboard
    designs](https://dribbble.com/search/website-monitoring-dashboard)
4.  [Dribbble -- Status page UI
    designs](https://dribbble.com/search/status-page)
5.  [Behance -- System monitoring dashboard
    designs](https://www.behance.net/search/projects/monitoring%20dashboard)

------------------------------------------------------------------------

## Final Evaluation Focus

Projects should be evaluated on:

1.  Understanding of the problem and completeness of the solution.
2.  Quality and usability of the frontend.
3.  API design and backend implementation.
4.  Database schema and data consistency.
5.  Correctness of the core business logic.
6.  Error handling and validation.
7.  Deployment and working functionality.
8.  Code organization and GitHub repository quality.
9.  Ability to explain technical decisions and demonstrate the
    application.

**Students should prioritize completing the core workflow correctly
before attempting optional enhancements.**
