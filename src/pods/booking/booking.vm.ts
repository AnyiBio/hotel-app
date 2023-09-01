export interface Booking {
  id: string;
  room: string;
  isActive: boolean;
  clientName: string,
  bookingStartDate: string,
  bookingEndDate: string,
  details?: BookingDetails;
}

export interface BookingDetails {
  cost: number;
  base: string;
  kindOfRoom?: string;
}

export const createEmptyRoom = (): Booking => ({
  id: '',
  room: '',
  isActive: true,
  clientName: '',
  bookingStartDate: '',
  bookingEndDate: '',
  details: {
    cost: 0,
    base: '',
    kindOfRoom: '',
  },
});
