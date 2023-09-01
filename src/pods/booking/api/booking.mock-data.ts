import { Booking, BookingDetails } from './booking.api-model';

const mockBookingSummaryList: BookingDetails= {
    cost: 20000,
    base: '10%',
    kindOfRoom: 'Individual'
};

export const mockBooking: Booking = {
  id: '1',
  name: '2B',
  isActive: true,
  clientName: 'Enrique Golpe',
  bookingStartDate: '02/09/2023',
  bookingEndDate: '06/09/2023',
  details: mockBookingSummaryList,
};
