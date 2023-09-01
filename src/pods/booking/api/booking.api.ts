import { Booking } from './booking.api-model';
import { mockBooking , mockBookingList } from './booking.mock-data';

export const getRoomById = async (id: string): Promise<Booking> => {
  const findBooking = mockBookingList.find((el => el.id === id));
  return !findBooking ? mockBooking : findBooking;
};
