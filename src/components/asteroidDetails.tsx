import React, { FormEvent,Component } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import withRouter from '../withRouter'
//import { useNavigate } from 'react-router-dom';

// interface Asteroid {
//     id: string;
//     name: string;
//     nasa_jpl_url: string;
//     designation: string;
//     absolute_magnitude_h: string;
//     // Add other properties as needed
//   }
  class AsteroidDetails extends Component<{ asteroid: any }> {
     //navigate = useNavigate();
     handleback = async (e: FormEvent) => {
        e.preventDefault();
    //    this.navigate("/")
    window.location.href="/"
      };
     render(){
        const { asteroid } = this.props;

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

      <Button onClick={this.handleback}  variant="outlined" color="primary" sx={{mt:2}}>
          Go back
    </Button>
    </div>
  );
}   
}

export default withRouter(AsteroidDetails);

