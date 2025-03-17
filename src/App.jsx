import React from 'react';
import { useState,useEffect } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents,extractLocations } from './api';
import { InfoAlert,ErrorAlert, WarningAlert } from './components/Alert';
import CityEventsChart from './components/CityEventsChart';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);  
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [errorAlert, setErrorAlert] = useState('');
  const [infoAlert, setInfoAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  
  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
     allEvents :
     allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));    
    setAllLocations(extractLocations(allEvents));
  }
  useEffect(() => {
    if (navigator.onLine) {
      // set the warning alert message to an empty string ""
      setWarningAlert("");
    } else {
      // set the warning alert message to a non-empty string
      setWarningAlert("You are offline. Some features may not work properly.");
    }
    fetchData();
  }, [currentCity,currentNOE]);
  return (
    <div className="App">
      <div className="alerts-container">
       {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}      
     </div>
     <div className="alerts-container">
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
     </div>
     <div className="alerts-container">
        {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
     </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert}/>
      <NumberOfEvents numberOfEvents={currentNOE} setNumberOfEvents={setCurrentNOE} setErrorAlert={setErrorAlert}/>
      <CityEventsChart allLocations={allLocations} events={events} />
      <EventList events={events}/>      
    </div>
  );
}
 
 export default App;