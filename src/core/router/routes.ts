import { generatePath } from 'react-router-dom';

interface BaseRoutes {
  root: string;
  room: string;
  seeRoom: string;
  login: string;
  submoduleList: string;
  hotels: string;
  editHotel: string;
  bookings: string;
  editBooking: string;
}

const baseRoutes: BaseRoutes = {
  root: '/',
  room: '/room',
  seeRoom: '/room/:id',
  login: '/login',
  submoduleList: '/submodule-list',
  hotels: '/hotels',
  editHotel: '/hotels/:id',
  bookings: '/bookings',
  editBooking: '/bookings/:id',
};

interface Routes extends Omit<BaseRoutes, 'editHotel' | 'editBooking' | 'seeRoom'> {
  editHotel: (id?: string) => string;
  editBooking: (id?: string) => string;
  seeRoom: (id?: string) => string;
}

export const routes: Routes = {
  ...baseRoutes,
  editHotel: id =>
    id ? generatePath(baseRoutes.editHotel, { id }) : baseRoutes.editHotel,
  editBooking: id =>
    id
      ? generatePath(baseRoutes.editBooking, { id })
      : baseRoutes.editBooking,
  seeRoom: id =>
    id
      ? generatePath(baseRoutes.seeRoom, { id })
      : baseRoutes.seeRoom,
};
