import React from 'react';
import { Checkbox } from '@mui/material';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import { Booking } from '../booking.vm';

type Props = RowRendererProps<Booking>;

export const RoomRowComponent: React.FunctionComponent<Props> = ({
  row,
}) => {
  console.log(row)
  return (
    <RowComponent>
      <CellComponent>{row.details.cost}</CellComponent>
      <CellComponent>{row.details.base}</CellComponent>
      <CellComponent>{row.details.cost}</CellComponent>
    </RowComponent>
  );
};
