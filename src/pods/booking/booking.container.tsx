import React from 'react';
import { RoomComponent } from './booking.component';
import {
  Booking,
  createEmptyRoom,
} from './booking.vm';
import { useSnackbarContext } from 'common/components';
import { trackPromise } from 'react-promise-tracker';
import { getRoomById } from './api';
import { mapBookingFromApiToVm } from './booking.mappers';
import { useParams } from 'react-router-dom';
import { isEditModeHelper } from 'common/helpers';

export const BookingContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [booking, setBooking] = React.useState<Booking>(
    createEmptyRoom()
  );
  const { showMessage } = useSnackbarContext();

  const onLoadBooking = async () => {
    try {
      const apiRoom = await trackPromise(getRoomById(id));
      const viewModelRoom = mapBookingFromApiToVm(apiRoom);
      setBooking(viewModelRoom);
    } catch (error) {
      error &&
        showMessage('Ha ocurrido un error al cargar la reserva', 'error');
    }
  };

  const handleSave = (booking: Booking) => {
    console.log('Guardado');
  };

  const handleCancel = () => {
    history.back();
  };

  React.useEffect(() => {
    onLoadBooking();
  }, []);

  return (
    <RoomComponent
      booking={booking}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
};
