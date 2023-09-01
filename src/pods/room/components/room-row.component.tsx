import React from 'react';
import { IconButton } from '@mui/material';
import { DateRange as DateRangeIcon } from '@mui/icons-material';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import { Room } from './room-list.vm';

type Props = RowRendererProps<Room>;

export const RoomRowComponent: React.FunctionComponent<Props> = ({
  row,
  onSee,
}) => {
  return (
    <RowComponent>
      <CellComponent>{row.city}</CellComponent>
      <CellComponent>{row.hotelName}</CellComponent>
      <CellComponent>{row.room}</CellComponent>
      <CellComponent>{row.stars}</CellComponent>
      <CellComponent>
        <IconButton onClick={() => onSee(row.id)}>
          <DateRangeIcon />
        </IconButton>
      </CellComponent>
    </RowComponent>
  );
};
