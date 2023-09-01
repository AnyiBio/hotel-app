export interface Hotel {
  id: string;
  name: string;
  externalId?: string;
  comments?: string;
  isActive: boolean;
  rooms: RoomSummary[];
}

export interface RoomSummary {
  id: string;
  isAssigned?: boolean;
  roomName: string;
}
