import React, { Dispatch } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Room } from './room.vm';
import { AppBar, MenuItem, Rating, Select, Toolbar } from '@mui/material';
import * as classes from './room.styles';

interface Props {
  state: any;
  dispatch: Dispatch<any>;
  handleSearch: () => void;
}

export const RoomComponent: React.FunctionComponent<Props> = ({
  state, dispatch, handleSearch
}) => {
  const handleStarChange = (newValue) => {
    dispatch({ type: 'SET_STARS', payload: newValue });
  };

  return (
    <>
      <AppBar
        className={classes.room}
        position='static'
        style={{
          backgroundColor: 'transparent',
          boxShadow: 'none'
          }}
        >
          <Toolbar
            color="dark"
            className={classes.roomBar}
          >
            <Select
              label="Ciudad destino"
              value={state.filter.city}
              onChange={(e) => dispatch({ type: 'SET_CITY', payload: e.target.value })}
              className={classes.menuText}>
              <MenuItem value="Bogotá">Bogotá</MenuItem>
              <MenuItem value="Medellín">Medellín</MenuItem>
              <MenuItem value="Cali">Cali</MenuItem>
            </Select>
            <TextField
              label="Nombre de hotel"
              value={state.filter.hotelName}
              onChange={(e) => dispatch({ type: 'SET_HOTEL', payload: e.target.value })}
              className={classes.menuText}
            />
            <TextField
              label="Fecha de entrada"
              type="date"
              value={state.startDate}
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.menuText}
            />
            <TextField
              label="Fecha de salida"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.menuText}/>
            <TextField
              label="Cantidad de personas"
              type="number"
              value={state.capacity}
              onChange={(e) => dispatch({ type: 'SET_PEOPLE', payload: e.target.value })}
              className={classes.menuText}
              InputProps={{
                inputProps: { min: 0 }
              }}
            />
            <div className={classes.menuText}>
              <label color="dark">Estrellas del hotel:</label>
              <Rating
                color="dark"
                name="starRating"
                value={state.filter.stars}
                onChange={(_, newValue) => handleStarChange(newValue)}
              />
            </div>
            <Button variant="contained" color="primary" onClick={handleSearch} className={classes.menuText}>
              Buscar
            </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};


