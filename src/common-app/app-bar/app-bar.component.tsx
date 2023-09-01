import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { AccountCircle, Home as HomeIcon } from '@mui/icons-material';
import { AuthContext, useLogout } from 'common-app/auth';
import { useMenu } from './app-bar.hook';
import * as classes from './app-bar.styles';
import { routes } from 'core/router';

export const AppBarComponent: React.FC = () => {
  const { userName, isAuthenticated } = React.useContext(AuthContext);
  const location = useLocation();
  const [routeName, setRouteName ] = React.useState('');
  const { onLogout } = useLogout();
  const { isOpen, menuElement, onOpenMenu, onCloseMenu } = useMenu();
  const navigate = useNavigate();

  const handleLogout = () => {
    onCloseMenu();
    onLogout();
  };

  const handleRedirectHome = () => {
    isAuthenticated ? navigate(routes.submoduleList) : '';
  };

  React.useEffect(() => {
    if (location.pathname.includes('bookings')) {
      setRouteName('- Reservas');
    }
    else if (location.pathname.includes('hotels')) {
      setRouteName('- Hoteles');
    } else {
      setRouteName('');
    }
  }, [location])

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleRedirectHome}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Agencia de Viajes {routeName}
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.loginText}
          >
            {} {userName}
          </Typography>
          <IconButton color="inherit" aria-label="menu" onClick={onOpenMenu}>
            <AccountCircle />
          </IconButton>
          {
            isAuthenticated ?
            <Menu open={isOpen} onClose={onCloseMenu} anchorEl={menuElement}>
              <MenuItem onClick={handleLogout}>
                {"literals.components.fields.myProfile"}
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                {"literals.components.actions.logout"}
              </MenuItem>
          </Menu> :
           <Menu open={isOpen} onClose={onCloseMenu} anchorEl={menuElement}>
            <MenuItem onClick={handleLogout}>
              {"login"}
            </MenuItem>
           </Menu>
          }

        </Toolbar>
      </AppBar>
    </>
  );
};
