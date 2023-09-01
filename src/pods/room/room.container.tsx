import React from 'react';
import { RoomComponent } from './room.component';
import { useSnackbarContext } from 'common/components';
import { getRooms } from './api';
import { trackPromise } from 'react-promise-tracker';
import { mapRoomListFromApiToVm } from './room.mapper';
import { Room, createEmptyRoom } from './room.vm';
import { initialState, filterReducer } from './room.helper';
import { RoomListComponent, RoomModalComponent } from './components';

export const RoomContainer: React.FunctionComponent = () => {
  const [rooms, setRooms] = React.useState<Room[]>([]);
  const [state, dispatch] = React.useReducer(filterReducer, initialState);
  const [renderTable, setRenderTable] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const { showMessage } = useSnackbarContext();

  const onLoadRoomList = async () => {
    try {
      const apiRoomList = await trackPromise(getRooms(createEmptyRoom()));
      const viewModelRoomList = mapRoomListFromApiToVm(apiRoomList);
      setRooms(viewModelRoomList);
    } catch (error) {
      error &&
        showMessage('Ha ocurrido un error al cargar los hoteles', 'error');
    }
  };

  React.useEffect(() => {
    onLoadRoomList();
  }, []);

  React.useEffect(() => {
  }, [state]);

  const handleSee = (id: string) => {
    setModalOpen(true);;
  };

  const handleBack = () => {
    history.back();
  };

  const handleSearch = () => {
    setRenderTable(true);
    setRooms(state.filteredRooms);
  };

  const onClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <RoomComponent
        state={state}
        dispatch={dispatch}
        handleSearch={handleSearch}
      />
      {renderTable ? <RoomListComponent
        roomList={rooms}
        onSee={handleSee}
        onDelete={handleBack}
      /> : ''}
      <RoomModalComponent
        modalOpen={modalOpen}
        onClose={onClose}
      />
    </>
  );
};
