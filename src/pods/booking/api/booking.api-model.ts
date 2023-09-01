export interface Booking {
  id: string;
  room: string;
  hotelName: string;
  isActive: boolean;
  clientName: string;
  bookingStartDate: string;
  bookingEndDate: string;
  details: BookingDetails;
}

export interface BookingDetails {
  cost: number;
  base: string;
  kindOfRoom?: string;
}
