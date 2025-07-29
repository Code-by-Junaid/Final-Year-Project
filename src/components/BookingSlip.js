import React from "react";
import jsPDF from "jspdf";

const BookingSlip = ({ booking }) => {
  const downloadSlip = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    // Header with color and emoji icon
    doc.setFillColor(44, 62, 80); // dark blue
    doc.rect(0, 0, 595, 80, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(30);
    doc.setFont("helvetica", "bold");
    doc.text("Rent Cars", 50, 50);
    doc.setFontSize(18);
    doc.setFont("helvetica", "normal");
    doc.text("Booking Slip", 430, 50);

    // Card background
    doc.setFillColor(245, 245, 245);
    doc.roundedRect(40, 100, 515, 320, 18, 18, "F");
    doc.setDrawColor(200, 200, 200);
    doc.roundedRect(40, 100, 515, 320, 18, 18);

    // Car image (if available)
    if (booking.car.image && booking.car.image.startsWith("data:image")) {
      doc.addImage(booking.car.image, "JPEG", 400, 120, 130, 90);
    }

    // Main details (left column)
    let y = 150;
    const lineGap = 32;
    doc.setFontSize(16);
    doc.setTextColor(44, 62, 80);
    doc.setFont("helvetica", "bold");
    doc.text(`Car:`, 60, y);
    doc.setFont("helvetica", "normal");
    doc.text(`${booking.car.name}`, 150, y);
    y += lineGap;
    doc.setFont("helvetica", "bold");
    doc.text(`User:`, 60, y);
    doc.setFont("helvetica", "normal");
    doc.text(`${booking.user?.name || "(not set)"}`, 150, y);
    y += lineGap;
    doc.setFont("helvetica", "bold");
    doc.text(`From:`, 60, y);
    doc.setFont("helvetica", "normal");
    doc.text(`${booking.bookedTimeSlots.from}`, 150, y);
    y += lineGap;
    doc.setFont("helvetica", "bold");
    doc.text(`To:`, 60, y);
    doc.setFont("helvetica", "normal");
    doc.text(`${booking.bookedTimeSlots.to}`, 150, y);
    y += lineGap;
    doc.setFont("helvetica", "bold");
    doc.text(`Total Hours:`, 60, y);
    doc.setFont("helvetica", "normal");
    doc.text(`${booking.totalHours}`, 180, y);
    y += lineGap;
    doc.setFont("helvetica", "bold");
    doc.text(`Total Amount:`, 60, y);
    doc.setTextColor(39, 174, 96);
    doc.setFontSize(18);
    doc.text(`pkr${booking.totalAmount}`, 180, y);
    doc.setTextColor(44, 62, 80);
    doc.setFontSize(16);
    y += lineGap;
    doc.setFont("helvetica", "bold");
    doc.text(`Transaction ID:`, 60, y);
    doc.setFont("helvetica", "normal");
    doc.text(`${booking.transactionId}`, 180, y, { maxWidth: 350 });
    y += lineGap;
    doc.setFont("helvetica", "bold");
    doc.text(`Date:`, 60, y);
    doc.setFont("helvetica", "normal");
    doc.text(`${new Date(booking.createdAt).toLocaleString()}`, 150, y);

    // Thank you note
    doc.setFontSize(14);
    doc.setTextColor(127, 140, 141);
    doc.text("Thank you for booking with Jadi Cars!", 60, 410);
    doc.setTextColor(44, 62, 80);
    doc.setFontSize(12);
    doc.text("www.jadicars.com", 60, 430);

    doc.save("booking-slip.pdf");
  };

  return (
    <div>
      <button
        className="btn1"
        style={{
          background: "#2c3e50",
          color: "#fff",
          borderRadius: 6,
          padding: "6px 18px",
          fontWeight: 600,
          boxShadow: "0 2px 8px #ccc",
        }}
        onClick={downloadSlip}
      >
        Download Booking Slip (PDF)
      </button>
    </div>
  );
};

export default BookingSlip;
