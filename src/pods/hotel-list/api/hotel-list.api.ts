import { Hotel } from './hotel-list.api-model';
import { mockHotelList } from './hotel-list.mock-data';

let hotelList = [...mockHotelList];

export const getHotelList = async (): Promise<Hotel[]> => {
  return hotelList;
};

export const deleteHotel = async (id: string): Promise<boolean> => {
  hotelList = hotelList.filter(p => p.id !== id);
  return true;
};
