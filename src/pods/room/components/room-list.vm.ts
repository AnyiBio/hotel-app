export interface Room {
  id: string;
  city: string;
  room: string;
  hotelName: string;
  stars: string;
  capacity: number;
  startDate?: string;
  endDate?: string;
}

export const createEmptyRoom = (): Room => ({
  id: '1',
  room: '1',
  city: 'Medellín',
  hotelName: '',
  stars: undefined,
  capacity: 2
});
