import React ,{useState}from 'react'
import SunCalc, { getMoonTimes } from 'suncalc';
import {createTimeOfInterest} from 'astronomy-bundle/time';
import {solarEclipseExists} from 'astronomy-bundle/solarEclipse';
import Calendar from 'react-calendar';
import {date} from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {createSun} from 'astronomy-bundle/sun';
import {createMars} from 'astronomy-bundle/planets';
import {CalendarContainer,CalenderSize} from './CalenderElements';
import Planets from './planets';

const MyCalender = () => {
  
    //library
     
    const location = {
        lat: 52.519,
        lon: 13.408,
    };
    const [currentdate, setDate] = useState(new Date());

    const onDateChange = (newdate) => {
    setDate(newdate);
    console.log(newdate);
    }
    
    var toi = createTimeOfInterest.fromTime(currentdate.getFullYear(),currentdate.getMonth(),currentdate.getDate(),0,0,0);
    var exists = String(solarEclipseExists(toi));
    
    
    var times = SunCalc.getTimes(currentdate, 19.076090,72.877426);
    var sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes()+ ':' +times.sunrise.getSeconds();
    var sunset = times.sunset.getHours() + ':' + times.sunset.getMinutes()+ ':' +times.sunset.getSeconds();
     var moon = SunCalc.getMoonIllumination(currentdate);
     var getMoonIllumination = moon.phase;
     var getMoonPhase = moon.fraction;
    // library

    var moons= SunCalc.getMoonTimes(currentdate, 19.076090,72.877426);
    var moonrise = moons.rise.getHours() + ':' + moons.rise.getMinutes() + ':' +moons.rise.getSeconds();
    var moonset = moon.set
    const mars = createMars(toi);

    const k =   mars.getIlluminatedFraction();
    const a =k.fraction;
    const isWaxing =  mars.isWaxing();

  // calendar

    return (
        <>
        
        <CalendarContainer>
        <div>
        <h1>Events Calender</h1>
     
         
        <Calendar
          onChange={onDateChange}
          value={currentdate}
          showNeighboringMonth={false}
          locale={"en-US"}
          hover={currentdate}
          
        />
         <h1>{exists}</h1>
         <h1>{sunriseStr.toString()}AM</h1>
         <h1>{sunset.toString()}PM</h1>
         <h1>{currentdate.getDate().toString()}</h1>
         <h1>{getMoonIllumination.toString()}</h1>
         <h1>{getMoonPhase}</h1>
         <h1>{moonrise.toString()}PM</h1>
         
         
        
        </div>
        </CalendarContainer>
        </>

    )
}

export default MyCalender
