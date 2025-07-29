import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getUserBookings } from "../redux/actions/bookingActions";
import { Col, Row, Modal, Card } from "antd";
import Spinner from '../components/Spinner';
import moment from "moment";
import BookingSlip from "../components/BookingSlip";

function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const {loading} = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (user && user._id) {
      dispatch(getUserBookings(user._id));
    }
    // Check for ?success=1 in URL
    if (window.location.search.includes('success=1')) {
      setShowThankYou(true);
      // Optionally, remove the query param from the URL after showing
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <DefaultLayout>
      {loading && (<Spinner />)}
      <h3 className="text-center mt-2">My Bookings</h3>
      {/* DEBUG: Show user and bookings info */}
      {/*
      <pre style={{background:'#eee',padding:'10px',fontSize:'12px',overflow:'auto'}}>
        User: {JSON.stringify(user, null, 2)}
        Bookings: {JSON.stringify(bookings, null, 2)}
      </pre>
      */}
      {showThankYou && (
        <Modal
          visible={showThankYou}
          footer={null}
          closable={false}
          centered
          onCancel={() => setShowThankYou(false)}
        >
          <Card style={{ textAlign: 'center' }}>
            <h2>Thank You!</h2>
            <p>Your car has been booked successfully.</p>
            <button
              className="btn1 mt-2"
              onClick={() => setShowThankYou(false)}
            >
              Close
            </button>
          </Card>
        </Modal>
      )}
      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
          {bookings.map((booking, idx) => (
            <Row gutter={16} className="bs1 mt-3 text-left" key={idx}>
              <Col lg={6} sm={24}>
                <p><b>{booking.car.name}</b></p>
                <p>Total hours : <b>{booking.totalHours}</b></p>
                <p>Rent per hour : <b>{booking.car.rentPerHour}</b></p>
                <p>Total amount : <b>{booking.totalAmount}</b></p>
                {/* Booking Slip Download Button */}
                <BookingSlip booking={booking} />
              </Col>
              <Col lg={12} sm={24}>
                <p>Transaction Id : <b>{booking.transactionId}</b></p>
                <p>From: <b>{booking.bookedTimeSlots.from}</b></p>
                <p>To: <b>{booking.bookedTimeSlots.to}</b></p>
                <p>Date of booking: <b>{moment(booking.createdAt).format('MMM DD yyyy')}</b></p>
              </Col>
              <Col lg={6} sm={24} className='text-right'>
                <img style={{borderRadius:5}} src={booking.car.image}  height="140" className="p-2"/>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default UserBookings;
