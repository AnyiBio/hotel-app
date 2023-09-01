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
  const [isChecked, setIsChecked] = React.useState(row.isAssigned || false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <RowComponent>
      <CellComponent>
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          color="primary"
        />
      </CellComponent>
      <CellComponent>{row.room}</CellComponent>
    </RowComponent>
  );
};
