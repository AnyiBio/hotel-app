import * as apiModel from './api/booking.api-model';
import * as viewModel from './booking.vm';

export const mapBookingFromApiToVm = (
  booking: apiModel.Booking
): viewModel.Booking => {
  return Boolean(booking.isActive)
    ? {
        ...booking,
      }
    : viewModel.createEmptyRoom();
};
