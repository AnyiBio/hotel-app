import { Hotel, RoomSummary } from './hotel.api-model';

const mockRoomSummaryList: RoomSummary[] = [
  {
    id: '1',
    room: '1A',
    isAssigned: true,
  },
  {
    id: '2',
    room: '1B',
    isAssigned: false,
  },
  {
    id: '3',
    room: '2A',
    isAssigned: false,
  },
  {
    id: '4',
    room: '2B',
    isAssigned: true,
  },
];

export const mockHotel: Hotel = {
  id: '1',
  name: 'Nombre',
  isActive: true,
  comments: 'Comentario',
  externalId: '1234',
  stars: '',
  rooms: mockRoomSummaryList,
};

export const mockHotelList: Hotel[] = [
  {
    id: '1',
    isActive: true,
    rooms: mockRoomSummaryList,
    name: 'Hotel San Fernando Plaza',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    id: '2',
    isActive: true,
    rooms: mockRoomSummaryList,
    name: 'Hotel Dann Carlton Belfort Medellin',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    id: '3',
    isActive: true,
    rooms: mockRoomSummaryList,
    name: 'Ibis Medellin',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    id: '4',
    isActive: true,
    rooms: mockRoomSummaryList,
    name: 'Viaggio Medellín Grand Select',
    stars: '⭐⭐⭐⭐',
  },
  {
    id: '5',
    isActive: false,
    rooms: mockRoomSummaryList,
    name: 'Hotel Central Plaza',
  },
  {
    id: '6',
    isActive: false,
    rooms: mockRoomSummaryList,
    name: 'Hotel Casa Malibú',
  },
  {
    id: '7',
    isActive: false,
    rooms: mockRoomSummaryList,
    name: 'Hotel Med 70',
    stars: '⭐⭐⭐',
  },
  {
    id: '8',
    isActive: true,
    rooms: mockRoomSummaryList,
    name: 'Hotel Estadio Real ',
    stars: '⭐⭐⭐',
  },
];
