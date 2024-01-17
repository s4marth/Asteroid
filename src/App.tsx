import React, { Component} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AsteroidForm from './components/asteroidForm';
import AsteroidDetails from "./components/asteroidDetails";


interface Asteroid {
  id: string;
}


class App extends Component {
  
  state= {
    asteroid: []as Asteroid[]
  };
   searchAsteroid = async (asteroidId: string) => {
    try {
      const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=whhOT2h5gtdYdN9lau2nZ0fHTtaseEIdxMyHhsad`);
      const data: Asteroid[]= await response.json();
      this.setState({asteroid:data});
      console.log(data)
      //console.log("asteeroid to pass is" + asteroid)
    } 
     catch (error) {
       alert("Invalid Id");
       console.error('Error fetching asteroid details:', error);
       return "error1";
     }
  };
  render() {
    const { asteroid } = this.state;
    return (

      <Router>
            <Container maxWidth="md">
                 <Typography variant="h2" align="center" gutterBottom style={{marginTop:"3rem"}}>
                     Asteroid App
                 </Typography>
                 <Routes>
                     <Route path="/" element={<AsteroidForm onSearch={this.searchAsteroid} />} />
                     <Route path="/asteroid-details" element={<AsteroidDetails asteroid={asteroid} />} />
                 </Routes>
             </Container>
         </Router>

    );
  }
}
export default App;


