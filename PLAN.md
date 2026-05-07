# Build Plan: Car Rental CRM

**Client:** DriveEase Rentals
**Total action points:** 8

This plan was generated from the approved action points. Items are ordered by build dependency — start at the top and work down.

---

### 1. Fleet Management Module

_Category: `feature` · Priority: `high`_

Develop a module to maintain a profile for each car, including registration details, model, year, current location, status, and service history.

**Acceptance criteria:**
- Each car can be added with registration, model, year, and status details.
- The module allows updating the car's status as available, rented, or in service.
- Service history can be recorded and viewed for each car.

---

### 2. Booking System with Availability Calendar

_Category: `feature` · Priority: `high`_

Build a booking system where staff can check car availability and create new bookings that automatically prevent double bookings.

**Acceptance criteria:**
- Staff can view car availability based on a date range.
- The system automatically blocks double bookings for the same car.
- Bookings can be created, updated, and managed easily by the staff.

---

### 3. Customer Management Module with Document Storage

_Category: `feature` · Priority: `high`_

Create a CRM module to manage customer profiles, upload documents (CNIC, license), and record rental history.

**Acceptance criteria:**
- Staff can add, edit, and view customer profiles.
- Documents like CNIC and license can be uploaded and stored in the system.
- Rental history is recorded and accessible per customer.

---

### 4. Vehicle Handover and Return Checklist

_Category: `feature` · Priority: `high`_

Implement a checklist system to document vehicle condition on handover and return, including photos of fuel levels and exterior/body condition.

**Acceptance criteria:**
- Staff can complete a checklist for vehicle handovers and returns with required fields for fuel level, mileage, and condition.
- The checklist allows uploading of photos linked to the booking record.
- The checklist is mobile-friendly for easy access via smartphones.

---

### 5. Payments and Invoicing Module

_Category: `feature` · Priority: `high`_

Develop a module to record manual payments (cash, bank transfer, Easypaisa) against bookings and generate invoices with daily/monthly reports.

**Acceptance criteria:**
- Payments can be recorded against each booking in cash, via bank transfer, or Easypaisa.
- Invoices can be generated for customers after payment confirmation.
- Daily and monthly collection reports can be generated within the system.

---

### 6. Branch-Level Access Control

_Category: `infra` · Priority: `high`_

Design system access so that branch managers see their own data while the owner sees all branch data collectively.

**Acceptance criteria:**
- Branch managers only see data for their specific location.
- The system allows the owner to view and manage data from all branches in one view.

---

### 7. Public Booking Inquiry Form

_Category: `ui` · Priority: `medium`_

Create a booking inquiry form on the public-facing website where customers can check car availability and request a booking, generating a lead in the CRM.

**Acceptance criteria:**
- A booking inquiry form is available on the website for customers to fill out.
- Submitted inquiries generate leads within the CRM for staff to follow up on.
- Form provides basic feedback on availability based on customer inputs.

---

### 8. Owner Dashboard and Reports

_Category: `ui` · Priority: `medium`_

Develop a dashboard with widgets showing daily operations and a section for weekly/monthly analytics including revenue, bookings, and car utilization.

**Acceptance criteria:**
- Dashboard displays total cars out, daily cash collection, and overdue bookings.
- Weekly reports include revenue per branch and car rental frequency analytics.
- Monthly summary includes overall revenue, expenses, and customer data insights.

