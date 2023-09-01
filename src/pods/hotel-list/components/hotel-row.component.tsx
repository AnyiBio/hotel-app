import React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import { Hotel } from '../hotel-list.vm';

type Props = RowRendererProps<Hotel>;

export const HotelRowComponent: React.FunctionComponent<Props> = ({
  row,
  onEdit,
  onDelete,
}) => {
  return (
    <RowComponent>
      <CellComponent>
        <Checkbox checked={row.isActive} disabled />
      </CellComponent>
      <CellComponent>{row.code}</CellComponent>
      <CellComponent>{row.name}</CellComponent>
      <CellComponent>{row.stars}</CellComponent>
      <CellComponent>{row.creationDate}</CellComponent>
      <CellComponent>
        <IconButton onClick={() => onEdit(row.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(row)}>
          <DeleteIcon />
        </IconButton>
      </CellComponent>
    </RowComponent>
  );
};
