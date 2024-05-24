import React from 'react'
import moment from 'moment'
import momentTimezone from 'moment-timezone'
import Button from './Button'
import { findRoomInfo } from '../helpers/bookingForm.js'

function BookingElement({
  bookingData,
  onDeleteBooking,
  onPayBooking,
  roomData
}) {

  const roomInfo = findRoomInfo(bookingData.roomId, roomData)
  const startTime = momentTimezone(bookingData.bookingStart).format('h.mma')
  const endTime = momentTimezone(bookingData.bookingEnd).format('h.mma')

  return (
    <div className="booking__box">
      <div className="booking__innerbox--left">
        <h3 className="header__heading--sub--alt header__heading--small">{moment(bookingData.bookingStart).format('dddd, MMMM Do YYYY')}</h3>
        <p>{bookingData.businessUnit}</p>
        <p>{bookingData.purpose}</p>
      </div>
      <div className="booking__innerbox--middle">
        <p>From {startTime} to {endTime}</p>        
        <p>Location: {(roomInfo.floor == 8) ? "Stains" : "Croydon"}, {roomInfo.name}</p>
        <p>Duration: {bookingData.duration} hrs</p>
        <p>Price Per Hour: {roomInfo.price} INR</p>
        <p>Total Price: {bookingData.duration * roomInfo.price} INR</p>
      </div>
      <div className="booking__innerbox--right">
        <Button
          onClick={() => onDeleteBooking(bookingData.roomId, bookingData._id)}
          text={` Delete `}
        /><br /> <br />
        <Button
          className="btn-cls"
          onClick={() => onPayBooking(bookingData.duration * roomInfo.price * 100)}
          text={`Pay now`}
        />     
      </div>
    </div>
  )
}

export default BookingElement