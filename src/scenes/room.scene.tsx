import React from 'react';
import { AppLayout } from 'layouts';
import { RoomContainer } from 'pods/room';

export const RoomScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      <RoomContainer />
    </AppLayout>
  );
};
