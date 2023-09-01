import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HotelListComponent } from './hotel-list.component';
import { getHotelList, deleteHotel } from './api';
import { Hotel } from './hotel-list.vm';
import { useSnackbarContext } from 'common/components';
import { trackPromise } from 'react-promise-tracker';
import { mapHotelListFromApiToVm } from './hotel-list.mappers';
import { routes } from 'core/router';
const editHotelId = '0';

export const HotelListContainer: React.FunctionComponent = () => {
  const [hotels, setHotels] = React.useState<Hotel[]>([]);
  const { showMessage } = useSnackbarContext();
  const navigate = useNavigate();

  const onLoadHotelList = async () => {
    try {
      const apiHotelList = await trackPromise(getHotelList());
      const viewModelHotelList = mapHotelListFromApiToVm(apiHotelList);
      setHotels(viewModelHotelList);
    } catch (error) {
      error &&
        showMessage('Ha ocurrido un error al cargar los hoteles', 'error');
    }
  };

  const handleCreate = () => {
    navigate(routes.editHotel(editHotelId));
  };

  const handleEdit = (id: string) => {
    navigate(routes.editHotel(id));
  };

  const handleDelete = async (id: string) => {
    const errorMessage = 'Error al eliminar un proyecto';
    try {
      const isDeleted = await trackPromise(deleteHotel(id));
      isDeleted ? onLoadHotelList() : showMessage(errorMessage, 'error');
    } catch (error) {
      error && showMessage(errorMessage, 'error');
    }
  };

  React.useEffect(() => {
    onLoadHotelList();
  }, []);

  return (
    <HotelListComponent
      hotelList={hotels}
      onCreate={handleCreate}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
