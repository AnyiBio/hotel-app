import React from 'react';
import { Checkbox } from '@mui/material';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import { BookingDetail } from '../hotel.vm';

type Props = RowRendererProps<BookingDetail>;

export const RoomRowComponent: React.FunctionComponent<Props> = ({
  row,
}) => {
  return (
    <RowComponent>
      <CellComponent>
        <Checkbox checked={row.isAssigned} color="primary" />
      </CellComponent>
      <CellComponent>{row.roomName}</CellComponent>
    </RowComponent>
  );
};
