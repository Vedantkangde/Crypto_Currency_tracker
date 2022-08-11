import { Component } from "react";
import {WeatherContainer1,WeatherCard2,WeatherCard1,WeatherWrapper1,WeatherH1} from './WeatherElements';
import UserLocation from './UserLocation';
import Navbar from './NavbarWeather';
import './weather.css';
import Axios from 'axios';
//import {WeatherCard1 from './WeatherElements'
class Weather extends Component{

    state = {

        userPosition:{
            latitude:35,
            longitude:139
        },
        weather:{},
        regionInput:"",
        loading:false
    }

    componentDidMount() {
        //check whether geolocation is supported
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
    
            //get the lat and long of your device
            let pos = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
    
            this.setState({ userPosition: pos });
    
            //Weather Api call
           // Axios.get(`http://api.weatherstack.com/current?access_key=f54e2fc77f90d7e6b7a205e2c83e21cb&query=${this.state.userPosition.latitude},${this.state.userPosition.longitude}`).then(res => {
    
            ////  let userWeather = {
               // temperature: res.data.current.temperature,
               // description: res.data.current.weather_descriptions[0],
               /// location: res.data.location.name,
               // region: res.data.location.region,
               // country: res.data.location.country,
               // wind_speed: res.data.current.wind_speed,
               // pressure: res.data.current.pressure,
              //  precip: res.data.current.precip,
              //  humidity: res.data.current.humidity,
               // img: res.data.current.weather_icons,
              //  cloudcover:res.data.current.cloudcover,
              //  wind_degree: res.data.current.wind_degree,
               // wind_dir: res.data.current.wind_dir
              
              //}
    
              //this.setState({ weather: userWeather });
              this.setState({loading:true});
              
            //})
          })
       }
      }
    
      //update the value of the the input field with state
      changeRegion = (value) => {
        this.setState({ regionInput: value })
      }
    
      //update the weather depending upon the value user entered
     // changeLocation = (e) => {
    
     //   e.preventDefault()
    
      //  Axios.get(`http://api.weatherstack.com/current?access_key=786f5f55b775837fb426dbde2b4af26b&query=${this.state.regionInput}`).then(res => {
    
      //    let userWeather = {
       //     temperature: res.data.current.temperature,
        //    description: res.data.current.weather_descriptions[0],
        //    location: res.data.location.name,
         //   region: res.data.location.region,
         //   country: res.data.location.country,
         //   wind_speed: res.data.current.wind_speed,
         //   pressure: res.data.current.pressure,
          //  precip: res.data.current.precip,
          //  humidity: res.data.current.humidity,
          //  img: res.data.current.weather_icons,
          //  cloudcover:res.data.current.cloudcover,
           // wind_degree: res.data.current.wind_degree,
           // wind_dir: res.data.current.wind_dir

         // }
    
          //this.setState({ weather: userWeather });
    
         // <Navbar changeRegion={this.changeRegion} changeLocation={this.changeLocation} />
       // })
     // }
      // 

      render(loading) {
        return ( loading?(  <WeatherContainer1>
           
          <div className="App" id='weather'>
            <div className="container">
        
            <WeatherCard2>
            <WeatherH1>Weather</WeatherH1>
              </WeatherCard2>
              <UserLocation weather={this.state.weather} />
            </div>
          </div>
          
          </WeatherContainer1>):(
              <WeatherContainer1>
           
              <div className="App" id='weather'>
                <div className="container">
            
                <WeatherCard2>
                <WeatherH1>Weather</WeatherH1>
                  </WeatherCard2>
                  <UserLocation />
                </div>
              </div>
              
              </WeatherContainer1>
          )
          
          
        );
      }

}

export default Weather;