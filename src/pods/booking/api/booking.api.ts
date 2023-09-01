import { Booking } from './booking.api-model';
import { mockBooking } from './booking.mock-data';

export const getRoomById = async (id: string): Promise<Booking> => {
  return mockBooking;
};
