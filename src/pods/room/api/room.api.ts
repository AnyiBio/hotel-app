import { Room } from './room.api-model';
import { mockRoomSearchList } from './room.mock-data';

export const getRooms = async (filter: Room): Promise<Room[]> => {
  return mockRoomSearchList;
};
