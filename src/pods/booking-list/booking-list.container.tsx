import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingListComponent } from './booking-list.component';
import { getBookingList } from './api';
import { Booking } from './booking-list.vm';
import { useSnackbarContext } from 'common/components';
import { trackPromise } from 'react-promise-tracker';
import { mapBookingListFromApiToVm } from './booking-list.mappers';
import { routes } from 'core/router';

export const BookingListContainer: React.FunctionComponent = () => {
  const [bookings, setBookings] = React.useState<Booking[]>([]);
  const { showMessage } = useSnackbarContext();
  const navigate = useNavigate();

  const onLoadBookingList = async () => {
    try {
      const apiBookingList = await trackPromise(getBookingList());
      const viewModelBookingList = mapBookingListFromApiToVm(apiBookingList);
      setBookings(viewModelBookingList);
    } catch (error) {
      error &&
        showMessage('Ha ocurrido un error al cargar las habitaciones', 'error');
    }
  };

  const handleEdit = (id: string) => {
    navigate(routes.editBooking(id));
  };

  React.useEffect(() => {
    onLoadBookingList();
  }, []);

  return (
    <BookingListComponent
      bookingList={bookings}
      onSeeDetails={handleEdit}
    />
  );
};
