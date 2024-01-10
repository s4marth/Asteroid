import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AsteroidForm from './components/asteroidForm.tsx';
import AsteroidDetails from "./components/asteroidDetails.tsx";

interface Asteroid {
  id: string;
}

function App() {

  const [asteroid, setAsteroid] = useState<Asteroid[]>([]);
  const searchAsteroid = async (asteroidId: string) => {
    try {
      const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=6e8Jy7UOqvAxp9mdIZWDTcAVYt1NZ7VlioBQtxos`);
      const data: Asteroid[]= await response.json();
      setAsteroid(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching asteroid details:', error);
    }
  };

  return (
    <Router>
            <Container maxWidth="md">
                <Typography variant="h2" align="center" gutterBottom style={{marginTop:"3rem"}}>
                    Asteroid App
                </Typography>
                <Routes>
                    <Route path="/" element={<AsteroidForm onSearch={searchAsteroid} />} />
                    <Route path="/asteroid-details" element={<AsteroidDetails asteroid={asteroid} />} />
                </Routes>
            </Container>
        </Router>
  );
}

export default App;
