export interface Hotel {
  id: string;
  name: string;
  externalId?: string;
  comments?: string;
  isActive: boolean;
  stars?: string;
  rooms: RoomSummary[];
}

export interface RoomSummary {
  id: string;
  isAssigned?: boolean;
  room: string;
}
