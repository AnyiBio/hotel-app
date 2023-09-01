import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/room.api-model';
import * as viewModel from './room.vm';

export const mapRoomFromApiToVm = (
  room: apiModel.Room
): viewModel.Room => {
  return  {
        ...room,
      }
};

export const mapRoomListFromApiToVm = (
  roomList: apiModel.Room[]
): viewModel.Room[] =>
  mapToCollection(roomList, p => mapRoomFromApiToVm(p));
