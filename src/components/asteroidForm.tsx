import React, { FormEvent, Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import withRouter from '../withRouter'



interface Asteroid {
    id: string,
  }
  interface AsteroidFormProps {
    onSearch: (id: string) => Promise<string>;
    navigate: any
  }


  interface NearEarthObjects {
    near_earth_objects: Asteroid[];
  }
  interface AsteroidFormState {
    asteroidId: string;
    asteroids: NearEarthObjects;
  }

  class AsteroidForm extends Component<AsteroidFormProps, AsteroidFormState>{
    state: AsteroidFormState = {
        asteroidId: '',
        asteroids: {near_earth_objects: []},
      };

    componentDidMount() {
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=whhOT2h5gtdYdN9lau2nZ0fHTtaseEIdxMyHhsad')
          .then(response => response.json())
          .then(data => this.setState({ asteroids: data }))
          .catch(error => console.error('Error fetching asteroids:', error));
      }

  
     handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      const { asteroidId } = this.state;
      let msg = await this.props.onSearch(asteroidId);
        if(msg==='error1')
        {
            this.setState({asteroidId: ""});
            this.props.navigate('/')
        }
        else{this.props.navigate('/asteroid-details')}
    };
  
     handleRandom = async (e: FormEvent) => {
      e.preventDefault();
      const { asteroids } = this.state;
       
      let l:number = await asteroids['near_earth_objects'].length
      if (l > 0) {
          const randomIndex = Math.floor(Math.random() * 20);
          const randomId: string = asteroids['near_earth_objects'][randomIndex].id;
          
          console.log("this is random id:" + randomId)
          this.setState({asteroidId: randomId});
          
          await this.props.onSearch(randomId);
          this.props.navigate('/asteroid-details')
          //this.navigate('/asteroid-details');
        }
    };
  
    render() {
        const { asteroidId } = this.state;
        //console.log(this.state.asteroids.length)
        return(
      <Grid data-testid="form1">
      <form onSubmit={this.handleSubmit} style={{textAlign:'center', marginTop:"50px"}}>
        <TextField
          label="Asteroid ID"
          variant="outlined"
          value={asteroidId}
          onChange={(e) => this.setState({asteroidId: e.target.value})}
          sx={{ boxShadow: 2 }}
          style={{backgroundColor:'white'}}
          required
          type='number'
          placeholder="textinput"
        />
        
        <div>
        <Button disabled={asteroidId.length<7} name="search"  type="submit" variant="contained" color="secondary" sx={{mt:2, zIndex:1}}  >
            Search
            <SearchIcon sx={{marginLeft:'5px'}} />
          </Button>
        </div>
        <Button onClick={this.handleRandom} variant="contained" color="primary" sx={{mt:2}}>
          Get Random
          <SearchIcon sx={{marginLeft:'5px'}} />
        </Button>
      </form>
      </Grid>
    );
  }
}

  
export default withRouter(AsteroidForm);