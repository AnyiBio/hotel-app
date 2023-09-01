import React from 'react';
import { AppBar } from '@mui/material';
import {
  TabComponent,
  TabListComponent,
  TabPanelComponent,
} from 'common/components';
import { DataComponent } from './components';
import { Booking } from './booking.vm';
import * as classes from './booking.styles';

interface Props {
  booking: Booking;
  isEditMode: boolean;
  onSave: (booking: Booking) => void;
  onCancel: () => void;
}

export const RoomComponent: React.FunctionComponent<Props> = ({
  booking: room,
  isEditMode,
  onSave,
  onCancel,
}) => {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <AppBar position="static">
        <TabListComponent value={tab} onChange={setTab}>
          <TabComponent label="Detalles Reserva" />
        </TabListComponent>
      </AppBar>
      <TabPanelComponent value={tab} index={0}>
        <DataComponent
          booking={room}
          className={classes.root}
          onSave={onSave}
          isEditMode={isEditMode}
          onCancel={onCancel}
        />
      </TabPanelComponent>
    </>
  );
};
