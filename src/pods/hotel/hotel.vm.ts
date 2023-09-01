export interface Hotel {
  id: string;
  name: string;
  externalId?: string;
  comments?: string;
  isActive: boolean;
  rooms: BookingDetail[];
}

export interface BookingDetail {
  id: string;
  isAssigned?: boolean;
  roomName: string;
}

export const createEmptyHotel = (): Hotel => ({
  id: '',
  name: '',
  externalId: '',
  comments: '',
  isActive: false,
  rooms: [],
});
