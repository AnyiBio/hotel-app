import { Booking, BookingDetails } from './booking.api-model';

const mockBookingDetails: BookingDetails= {
    cost: 20000,
    base: '10%',
    kindOfRoom: 'Individual'
};

export const mockBooking: Booking = {
  id: '1',
  room: '2B',
  isActive: true,
  clientName: 'Enrique Golpe',
  hotelName: 'San Fernand0 Plaza',
  bookingStartDate: '02/09/2023',
  bookingEndDate: '06/09/2023',
  details: mockBookingDetails,
};

export const mockBookingList: Booking[] = [
  {
    id: '1',
    isActive: true,
    room: '1A',
    clientName: 'Enrique Golpe',
    hotelName: 'Hotel San Fernando Plaza',
    bookingStartDate: '02/09/2023',
    bookingEndDate: '11/09/2023',
    details: mockBookingDetails
  },
  {
    id: '2',
    isActive: true,
    room: '2A',
    clientName: 'Ana Perez',
    hotelName: 'Hotel San Fernando Plaza',
    bookingStartDate: '20/10/2023',
    bookingEndDate: '21/10/2023',
    details: mockBookingDetails
  },
  {
    id: '3',
    isActive: false,
    room: '6B',
    clientName: 'Sara García',
    hotelName: 'Hotel Dann Carlton Belfort Medellin',
    bookingStartDate: '05/09/2023',
    bookingEndDate: '21/09/2023',
    details: mockBookingDetails
  },
  {
    id: '4',
    isActive: true,
    clientName: 'Antonio Gallego',
    room: '3A',
    hotelName: 'Ibis Medellin',
    bookingStartDate: '15/09/2023',
    bookingEndDate: '21/09/2023',
    details: mockBookingDetails
  },
  {
    id: '5',
    isActive: false,
    clientName: 'Angie Jaramillo',
    room: '301A',
    hotelName: 'Viaggio Medellín Grand Select',
    bookingStartDate: '16/09/2023',
    bookingEndDate: '22/09/2023',
    details: mockBookingDetails
  },
  {
    id: '6',
    isActive: true,
    clientName: 'Alberto Sánchez',
    room: '305B',
    hotelName: 'Viaggio Medellín Grand Select',
    bookingStartDate: '12/12/2023',
    bookingEndDate: '15/12/2023',
    details: mockBookingDetails
  },
  {
    id: '7',
    isActive: false,
    clientName: 'Alberto Sánchez',
    room: '201',
    hotelName: 'Hotel Med 70',
    bookingStartDate: '12/11/2023',
    bookingEndDate: '18/11/2023',
    details: mockBookingDetails
  },
  {
    id: '8',
    isActive: true,
    clientName: 'Alberto Sánchez',
    room: '104',
    hotelName: 'Hotel Med 70',
    bookingStartDate: '05/11/2023',
    bookingEndDate: '13/11/2023',
    details: mockBookingDetails
  },
];
