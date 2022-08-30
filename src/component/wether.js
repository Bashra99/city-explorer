import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            lon:'',
            errFlag: false,
            timezone:'',
            lat:'',
            description:'',
            high_temp:'',
            date:'',
            low_temp:'',    
        }
    }
    getWeatherData=async(event)=>{
        event.preventDefault();
        const name=event.target.cityName.value;
        const url =`${process.env.REACT_APP_URL}getWetherData?name=${name}`;
        console.log (url);
     try{
        const result = await axios.get(url);
      this.setState({
        name : result.data.city_name,
        lon : result.data.lon,
        errFlag:result[0],
        timezone: result.data.timezone,
        lat:result.data.lat,
        description:result.data.data[0].weather.description,
        high_temp:result.data.data[0].max_temp,
        low_temp:result.data.data[0].low_temp,
        date:result.data.data[0].valid_date,
      })
      
    }
    catch
    {
        console.log('err');
        this.setState({
          errFlag : true
        })
    } 
    }
    render(){
        return(
            <div>
            <Form onSubmit={this.getWeatherData}>
      <Form.Group >
        <Form.Label>Enter the name of the city: </Form.Label>
        <Form.Control name="cityName" type="text" placeholder="" />
        <Form.Text className="text-muted">
          write correct name please
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
    <h3>Display name : {this.state.name}</h3>
        <p>Lon : {this.state.lon}</p>
        <p>Lat : {this.state.lat}</p>
        <p>Time Zone: {this.state.timezone}</p>
        <p>Weather status: low of {this.state.low_temp} and high of {this.state.high_temp} with {this.state.description}</p> 
        <p>date: {this.state.date}</p>

        {this.state.errFlag && <h4>Error : sorry something went wrong!</h4>}
    </div>
        )
    }
}

export default Main;