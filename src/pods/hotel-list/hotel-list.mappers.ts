import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/hotel-list.api-model';
import * as viewModel from './hotel-list.vm';

const mapHotelFromApiToVm = (
  hotel: apiModel.Hotel
): viewModel.Hotel => ({
  stars: '',
  ...hotel,
});

export const mapHotelListFromApiToVm = (
  hotelList: apiModel.Hotel[]
): viewModel.Hotel[] =>
  mapToCollection(hotelList, p => mapHotelFromApiToVm(p));
