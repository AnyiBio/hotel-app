import React from 'react';
import {
  TableContainer,
  RowRendererProps,
  useSearchBar,
} from 'common/components';
import { Booking } from './booking-list.vm';
import { BookingRowComponent } from './components';

interface Props {
  bookingList: Booking[];
  onSeeDetails: (id: string) => void;
}

export const BookingListComponent: React.FunctionComponent<Props> = ({
  bookingList: bookingList,
  onSeeDetails: onSee,
}) => {
  const { filteredList, onSearch, search } = useSearchBar(bookingList, [
    'name',
  ]);

  const contentRender = ({ itemName }) => {
    return (
      <>
        ¿Seguro que quiere borrar a <strong>{itemName}</strong>?
      </>
    );
  };

  return (
    <TableContainer
      columns={['Activo', 'Id', 'Habitación', 'Hotel', 'Fecha de Entrada', 'Fecha de Salida',' ']}
      rows={filteredList}
      rowRenderer={(rowProps: RowRendererProps<Booking>) => (
        <BookingRowComponent {...rowProps} />
      )}
      onSee={onSee}
      labels={{
        searchPlaceholder: 'Buscar habitación',
        deleteTitle: 'Eliminar Empleado',
        deleteContent: props => contentRender(props),
        closeButton: 'Atrás',
        acceptButton: 'Aceptar',
      }}
      enableSearch={true}
      search={search}
      onSearch={onSearch}
      enablePagination={true}
      pageSize={5}
    />
  );
};
