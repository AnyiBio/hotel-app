import React from 'react';
import {
  TableContainer,
  RowRendererProps,
  useSearchBar,
} from 'common/components';
import { Hotel } from './hotel-list.vm';
import { HotelRowComponent } from './components';

interface Props {
  hotelList: Hotel[];
  onCreate: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const HotelListComponent: React.FunctionComponent<Props> = ({
  hotelList: hotelList,
  onCreate,
  onEdit,
  onDelete,
}) => {
  const { filteredList, onSearch, search } = useSearchBar(hotelList, [
    'name',
  ]);

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
        'Habilitado',
        'Código',
        'Hotel',
        'Estrellas',
        'Fecha creación',
        ' '
      ]}
      rows={filteredList}
      rowRenderer={(rowProps: RowRendererProps<Hotel>) => (
        <HotelRowComponent {...rowProps} />
      )}
      onCreate={onCreate}
      onEdit={onEdit}
      onDelete={onDelete}
      labels={{
        searchPlaceholder: 'Buscar hotel',
        createButton: 'Nuevo hotel',
        deleteTitle: 'Eliminar hotel',
        deleteContent: props => contentRender(props),
        closeButton: 'Cancelar',
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
