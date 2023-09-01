import { Hotel } from './hotel.api-model';
import { mockHotel, mockHotelList } from './hotel.mock-data';

export const getHotelById = async (id: string): Promise<Hotel> => {
  const findHotel = mockHotelList.find((el => el.id === id));
  return !findHotel ? mockHotel : findHotel;
};
