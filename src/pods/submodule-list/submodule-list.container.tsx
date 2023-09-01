import React from 'react';
import {
  HolidayVillage as HotelIcon,
  Hotel as ReserveIcon,
} from '@mui/icons-material';
import { SumoduleListComponent } from './submodule-list.component';
import { DashboardItemProps } from 'common/components';
import { routes } from 'core/router';

export const SubmoduleListContainer: React.FunctionComponent = () => {
  const items: DashboardItemProps[] = React.useMemo(
    (): DashboardItemProps[] => [
      {
        title: 'Gestionar Hotel',
        linkTo: routes.hotels,
        icon: HotelIcon,
      },
      {
        title: 'Reservas',
        linkTo: routes.bookings,
        icon: ReserveIcon,
      },
    ],
    []
  );

  return <SumoduleListComponent items={items} />;
};
