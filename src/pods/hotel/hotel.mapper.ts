import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/hotel.api-model';
import * as viewModel from './hotel.vm';

const mapRoomSummaryFromApiToVm = (
  RoomSummary: apiModel.RoomSummary
): viewModel.BookingDetail => ({
  ...RoomSummary,
});

const mapRoomSummaryListFromApiToVm = (
  RoomSummary: apiModel.RoomSummary[]
): viewModel.BookingDetail[] =>
  mapToCollection(RoomSummary, es => mapRoomSummaryFromApiToVm(es));

export const mapHotelFromApiToVm = (
  hotel: apiModel.Hotel
): viewModel.Hotel => {
  return Boolean(hotel)
    ? {
        ...hotel,
        rooms: mapRoomSummaryListFromApiToVm(hotel.rooms),
      }
    : viewModel.createEmptyHotel();
};
