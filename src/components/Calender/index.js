import React ,{useState}from 'react'
import SunCalc, { getMoonTimes } from 'suncalc';
import {createTimeOfInterest} from 'astronomy-bundle/time';
import {solarEclipseExists} from 'astronomy-bundle/solarEclipse';
import Calendar from 'react-calendar';
import {date} from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {createSun} from 'astronomy-bundle/sun';
import {CalendarContainer,CalenderSize} from './CalenderElements';

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
    var sunriseendStr = times.sunriseEnd.getHours() + ':' + times.sunriseEnd.getMinutes()+ ':' +times.sunriseEnd.getSeconds();
     var moon = SunCalc.getMoonIllumination(currentdate);
     var getMoonIllumination = moon.phase;
    // library

    var moon= SunCalc.getMoonTimes(currentdate, 19.076090,72.877426)
   
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
         <h1>{sunriseStr.toString()}</h1>
         <h1>{sunriseendStr.toString()}</h1>
         <h1>{currentdate.getDate().toString()}</h1>
         <h1>{getMoonIllumination.toString()}</h1>
         <h1>{moon.rise.toString()}</h1>
         
        </div>
        </CalendarContainer>
        </>

    )
}

export default MyCalender
