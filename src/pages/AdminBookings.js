import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Spinner from '../components/Spinner';
import moment from "moment";

function AdminBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <h3 className="text-center mt-2">All Bookings (Admin)</h3>
      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
          {bookings.map((booking) => (
            <Row gutter={16} className="bs1 mt-3 text-left" key={booking._id}>
              <Col lg={6} sm={24}>
                <p><b>{booking.car?.name || 'N/A'}</b></p>
                <p>Total hours : <b>{booking.totalHours}</b></p>
                <p>Rent per hour : <b>{booking.car?.rentPerHour || 'N/A'}</b></p>
                <p>Total amount : <b>{booking.totalAmount}</b></p>
                <p>User ID : <b>{booking.user}</b></p>
              </Col>
              <Col lg={12} sm={24}>
                <p>Transaction Id : <b>{booking.transactionId}</b></p>
                <p>From: <b>{booking.bookedTimeSlots?.from}</b></p>
                <p>To: <b>{booking.bookedTimeSlots?.to}</b></p>
                <p>Date of booking: <b>{moment(booking.createdAt).format('MMM DD yyyy')}</b></p>
              </Col>
              <Col lg={6} sm={24} className='text-right'>
                <img style={{ borderRadius: 5 }} src={booking.car?.image} height="140" className="p-2" alt="car" />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default AdminBookings;
