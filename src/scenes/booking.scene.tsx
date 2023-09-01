import React from 'react';
import { AppLayout } from 'layouts';
import { BookingContainer } from 'pods/booking';

export const BookingScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      <BookingContainer />
    </AppLayout>
  );
};
