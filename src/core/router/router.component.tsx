import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthRoute } from 'common-app/auth';
import { routes } from './routes';
import {
  LoginScene,
  SubmoduleListScene,
  HotelListScene,
  RoomListScene,
  HotelScene,
  BookingScene,
  RoomScene
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.root} element={<RoomScene />} />
        <Route path={routes.room} element={<RoomScene />} />
        <Route path={routes.login} element={<LoginScene />} />
        <Route
          path={routes.submoduleList}
          element={<AuthRoute>
            <SubmoduleListScene />
          </AuthRoute>}
        />
        <Route
          path={routes.hotels}
          element={<AuthRoute><HotelListScene /></AuthRoute>} />
        <Route
          path={routes.bookings}
          element={<AuthRoute><RoomListScene /></AuthRoute>} />
        <Route
          path={routes.editHotel()}
          element={<AuthRoute><HotelScene /></AuthRoute>} />
        <Route
          path={routes.editBooking()}
          element={<AuthRoute><BookingScene /></AuthRoute>} />
      </Routes>
    </HashRouter>
  );
};
