import React from 'react';
import Typography from '@mui/material/Typography';

const AsteroidDetails = ({ asteroid }) => {

  if (!asteroid) {
    return null;
  }

  return (
    <div>
      {asteroid.id ? <Typography variant="h4">Asteroid Details</Typography> : <Typography></Typography>}
      {asteroid.id ? <Typography>ID: {asteroid.id}</Typography> : <Typography>Please Enter correct Id..</Typography>}
      {asteroid.id ? <Typography>Name: {asteroid.name}</Typography> : <Typography></Typography>}
      {asteroid.id ? <Typography>URL: {asteroid.nasa_jpl_url}</Typography> : <Typography></Typography>}
      {asteroid.id ? <Typography>Designation: {asteroid.designation}</Typography> : <Typography></Typography>}
      {asteroid.id ? <Typography>Absolute_magnitude_h: {asteroid.absolute_magnitude_h}</Typography> : <Typography></Typography>}
    </div>
  );
};

export default AsteroidDetails;
