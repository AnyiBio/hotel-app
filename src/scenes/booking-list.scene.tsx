import React from 'react';
import { AppLayout } from 'layouts';
import { BookingListContainer } from 'pods/booking-list';

export const RoomListScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      <BookingListContainer />
    </AppLayout>
  );
};
