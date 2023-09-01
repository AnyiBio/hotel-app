import { Hotel, RoomSummary } from './hotel.api-model';

const mockRoomSummaryList: RoomSummary[] = [
  {
    id: '1',
    roomName: '1A',
    isAssigned: true,
  },
  {
    id: '2',
    roomName: '1B',
    isAssigned: false,
  },
  {
    id: '3',
    roomName: '2A',
    isAssigned: false,
  },
  {
    id: '4',
    roomName: '2B',
    isAssigned: true,
  },
];

export const mockRoom: Hotel = {
  id: '1',
  name: 'Nombre',
  isActive: true,
  comments: 'Comentario',
  externalId: '1234',
  rooms: mockRoomSummaryList,
};
