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
  onSave: (booking: Booking) => void;
  onCancel: () => void;
}

export const RoomComponent: React.FunctionComponent<Props> = ({
  booking,
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
          booking={booking}
          className={classes.root}
          onSave={onSave}
          onCancel={onCancel}
        />
      </TabPanelComponent>
    </>
  );
};
