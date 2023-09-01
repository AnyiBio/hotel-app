import { Hotel } from './hotel.api-model';
import { mockRoom } from './hotel.mock-data';

export const getHotelById = async (id: string): Promise<Hotel> => {
  return mockRoom;
};
