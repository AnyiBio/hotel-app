import React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import { Visibility  as VisibilityIcon } from '@mui/icons-material';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import { Booking } from '../booking-list.vm';

type Props = RowRendererProps<Booking>;

export const BookingRowComponent: React.FunctionComponent<Props> = ({
  row,
  onSee,
}) => {
  return (
    <RowComponent>
      <CellComponent>
        <Checkbox checked={row.isActive} disabled />
      </CellComponent>
      <CellComponent>{row.id}</CellComponent>
      <CellComponent>{row.room}</CellComponent>
      <CellComponent>{row.hotelName}</CellComponent>
      <CellComponent>{row.startDate}</CellComponent>
      <CellComponent>{row.endDate}</CellComponent>
      <CellComponent>
        <IconButton onClick={() => onSee(row.id)}>
          <VisibilityIcon />
        </IconButton>
      </CellComponent>
    </RowComponent>
  );
};
