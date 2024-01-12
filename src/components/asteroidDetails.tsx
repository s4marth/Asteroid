import React, { FormEvent } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// interface Asteroid {
//     id: string;
//   }
// interface aster{
//     asteroid: Asteroid[];
// }

const AsteroidDetails = ({ asteroid }) => {
    const navigate = useNavigate();
    const handleback = async (e: FormEvent) => {
        e.preventDefault();
       navigate("/")
      };

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

      <Button onClick={handleback}  variant="outlined" color="primary" sx={{mt:2}}>
          Go back
    </Button>
    </div>
  );
};

export default AsteroidDetails;
