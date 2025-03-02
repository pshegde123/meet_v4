import React from 'react';
import { useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';

const App = () => {
  const [currentNOE, setCurrentNOE] = useState(32);

  return (
    <div className="App">
      <CitySearch/>
      <NumberOfEvents/>
      <EventList />      
    </div>
  );
}
 
 export default App;