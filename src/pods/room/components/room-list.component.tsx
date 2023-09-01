import React from 'react';
import {
  TableContainer,
  RowRendererProps,
  useSearchBar,
} from 'common/components';
import { Room } from './room-list.vm';
import { RoomRowComponent } from './room-row.component';

interface Props {
  roomList: Room[];
  onSee: (id: string) => void;
  onDelete: (id: string) => void;
}

export const RoomListComponent: React.FunctionComponent<Props> = ({
  roomList: hotelList,
  onSee,
  onDelete
}) => {
  const contentRender = ({ itemName }) => {
    return (
      <>
        ¿Está seguro que quiere eliminar a <strong>{itemName}</strong>?
      </>
    );
  };

  return (
    <TableContainer
      columns={[
        'Ciudad',
        'Hotel',
        'Habitación',
        'Estrellas',
        ' '
      ]}
      rows={hotelList}
      rowRenderer={(rowProps: RowRendererProps<Room>) => (
        <RoomRowComponent {...rowProps} />
      )}
      onSee={onSee}
      labels={{
        searchPlaceholder: 'Buscar hotel',
        createButton: 'Nuevo hotel',
        deleteTitle: 'Eliminar hotel',
        deleteContent: props => contentRender(props),
        closeButton: 'Volver',
        acceptButton: 'Aceptar',
      }}
      enablePagination={true}
      pageSize={5}
    />
  );
};
