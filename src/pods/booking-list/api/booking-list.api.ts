import { Booking } from './booking-list.api-model';
import { mockBookingList } from './booking-list.mock-data';

let bookingList = [...mockBookingList];

export const getBookingList = async (): Promise<Booking[]> => {
  return bookingList;
};

