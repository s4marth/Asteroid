import React, { useState,  useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';

interface Asteroid {
    id: string;
  }
  

const AsteroidForm = ({ onSearch }) => {
    const [asteroidId, setAsteroidId] = useState<string>('');
    const [asteroids, setAsteroids] = useState<Asteroid[]>([]);   //nya
    const navigate = useNavigate();
  
      useEffect(()=>{
          fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=6e8Jy7UOqvAxp9mdIZWDTcAVYt1NZ7VlioBQtxos')
          .then(response=>response.json())
          .then(data=>setAsteroids(data))
         //console.log(asteroids['near_earth_objects'].length)
      },[])
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      await onSearch(asteroidId);

      navigate('/asteroid-details');
    };
  
    const handleRandom = async (e: FormEvent) => {
      e.preventDefault();
      let l:number = await asteroids['near_earth_objects'].length
      if (l > 0) {
          const randomIndex = Math.floor(Math.random() * 20);
          const randomId: string = asteroids['near_earth_objects'][randomIndex].id;
          
          console.log("this is random id:" + randomId)
          setAsteroidId(randomId);
          
          await onSearch(randomId);
          navigate('/asteroid-details');
        }
    };
  
    return (
      <Grid >
      <form onSubmit={handleSubmit} style={{textAlign:'center', marginTop:"50px"}}>
        <TextField
          label="Asteroid ID"
          variant="outlined"
          value={asteroidId}
          onChange={(e) => setAsteroidId(e.target.value)}
          sx={{ boxShadow: 2 }}
          style={{backgroundColor:'white'}}
          required
        />
        <div>
          <Button type="submit" variant="contained" color="secondary" sx={{mt:2}}  >
              Search
              <SearchIcon sx={{marginLeft:'5px'}} />
          </Button>
        </div>
        <Button onClick={handleRandom} variant="contained" color="primary" sx={{mt:2}}>
          Get Random
          <SearchIcon sx={{marginLeft:'5px'}} />
        </Button>
      </form>
      </Grid>
    );
  };
  
  export default AsteroidForm;
  