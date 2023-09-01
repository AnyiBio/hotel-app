import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/booking-list.api-model';
import * as viewModel from './booking-list.vm';

const mapBookingFromApiToVm = (
  booking: apiModel.Booking
): viewModel.Booking => ({
  ...booking,
});

export const mapBookingListFromApiToVm = (
  roomList: apiModel.Booking[]
): viewModel.Booking[] =>
  mapToCollection(roomList, e => mapBookingFromApiToVm(e));
