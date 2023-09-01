import React from 'react';
import { AppBar } from '@mui/material';
import {
  TabComponent,
  TabListComponent,
  TabPanelComponent,
} from 'common/components';
import {
  DataComponent,
  RoomComponent,
} from './components';
import { Hotel } from './hotel.vm';
import * as classes from './hotel.styles';

interface Props {
  isEditMode: boolean;
  hotel: Hotel;
  onSave: (hotel: Hotel) => void;
  onCancel: () => void;
}

export const HotelComponent: React.FunctionComponent<Props> = ({
  isEditMode,
  hotel,
  onSave,
  onCancel,
}) => {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <AppBar position="static">
        <TabListComponent value={tab} onChange={setTab}>
          <TabComponent label="Datos" />
          <TabComponent label="Habitaciones" disabled={!isEditMode} />
        </TabListComponent>
      </AppBar>
      <TabPanelComponent value={tab} index={0}>
        <DataComponent
          hotel={hotel}
          onCancel={onCancel}
          onSave={onSave}
          className={classes.root}
        />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={1}>
        <RoomComponent
          roomSummaryList={hotel.rooms}
          onCancel={onCancel}
          className={classes.root}
        />
      </TabPanelComponent>
    </>
  );
};
