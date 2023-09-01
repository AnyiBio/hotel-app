import { css } from '@emotion/css';
import { theme } from 'core/theme';

export const form = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'month' 'year' 'commands' 'commands';
  grid-column-gap: ${theme.spacing(2)};

  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'month year' 'commands commands';
  }
`;

export const name = css`
  grid-area: name;
`;

export const stars = css`
  grid-area: stars;
`;

export const commands = css`
  grid-area: commands;
`;
