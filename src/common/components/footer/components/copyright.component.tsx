import React from 'react';
import { Typography, Link } from '@mui/material';

export const CopyrightComponent: React.FC = () => (
  <Typography variant="body2" align="center">
    {' © '}
    <Link
      color="inherit"
      target="_blank"
      rel="noopener"
      href=""
    >
    </Link>{' '}
    {new Date().getFullYear()}
  </Typography>
);
