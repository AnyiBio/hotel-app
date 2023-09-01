import React from 'react';
import { HotelComponent } from './hotel.component';
import { useParams } from 'react-router-dom';
import { useSnackbarContext } from 'common/components';
import { getHotelById } from './api';
import { trackPromise } from 'react-promise-tracker';
import { mapHotelFromApiToVm } from './hotel.mapper';
import { Hotel, createEmptyHotel } from './hotel.vm';
import { isEditModeHelper } from 'common/helpers';

export const HotelContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = React.useState<Hotel>(createEmptyHotel());
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const { showMessage } = useSnackbarContext();

  const onLoadHotel = async () => {
    try {
      const apiHotel = await trackPromise(getHotelById(id));
      const viewModelHotel = mapHotelFromApiToVm(apiHotel);
      setHotel(viewModelHotel);
    } catch (error) {
      error &&
        showMessage('Ha ocurrido un error al cargar el hotel', 'error');
    }
  };

  const handleSave = (hotel: Hotel) => {
    console.log('Guardado');
  };

  const handleCancel = () => {
    history.back();
  };

  React.useEffect(() => {
    const isEditMode = isEditModeHelper(id);
    setIsEditMode(isEditMode);
    if (isEditMode) {
      onLoadHotel();
    }
  }, []);

  return (
    <HotelComponent
      isEditMode={isEditMode}
      hotel={hotel}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
};
