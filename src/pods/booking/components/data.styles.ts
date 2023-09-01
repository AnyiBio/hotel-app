import { css } from '@emotion/css';
import { theme } from 'core/theme';

export const form = () => css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'clientName'
    'room'
    'hotelName'
    'cost'
    'base'
    'kindOfRoom'
    'commands'
    'commands';
  grid-row-gap: ${theme.spacing(2)};
  grid-column-gap: ${theme.spacing(3)};

  ${theme.breakpoints.up('md')} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'hotelName cost'
      'clientName base'
      'room kindOfRoom'
      'commands commands';
  }
`;

export const name = css`
  grid-area: clientName;
`;

export const hotelName = css`
  grid-area: hotelName;
`;

export const room = css`
  grid-area: room;
`;

export const cost = css`
  grid-area: cost;
`;

export const base = css`
  grid-area: base;
`;

export const kindOfRoom = css`
  grid-area: kindOfRoom;
`;

export const commands = css`
  grid-area: commands;
`;
