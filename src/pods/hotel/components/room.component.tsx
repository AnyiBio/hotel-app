import React from 'react';
import { TableContainer, RowRendererProps } from 'common/components';
import { BookingDetail } from '../hotel.vm';
import { CommandFooterComponent } from 'common-app/command-footer';
import { RoomRowComponent } from './room-row.component';

interface Props {
  roomSummaryList: BookingDetail[];
  onCancel: () => void;
  className: string;
}

export const RoomComponent: React.FunctionComponent<Props> = ({
  roomSummaryList: roomSummaryList,
  onCancel,
  className,
}) => {
  return (
    <>
      <TableContainer
        columns={['Hablitada', 'Habitación']}
        rows={roomSummaryList}
        className={className}
        rowRenderer={(rowProps: RowRendererProps<BookingDetail>) => (
          <RoomRowComponent {...rowProps} />
        )}
      />
      <CommandFooterComponent onCancel={onCancel} />
    </>
  );
};
