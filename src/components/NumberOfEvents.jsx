import React, { useState } from 'react';


const NumberOfEvents = ({ numberOfEvents, setNumberOfEvents, setErrorAlert }) => {
    const [error, setError] = useState('');
    const [number, setNumber] = useState(numberOfEvents);    

    const handleInputChanged = (event) => {
        const value = parseInt(event.target.value, 10);
       
        if (value < 1 || value > 32) {
            setError('Select number from 1 to 32');
            setErrorAlert('Select number from 1 to 32');
        } else {
            setError('');
            setErrorAlert('');
            setNumber(value);
            setNumberOfEvents(value);
        }
    };
  return (
    <div id="number-of-events">
        <label>
        Number of Events:
        </label>
        <input
            type="number"
            value={number || ''}
            id="number-of-events-input"
            className="number-of-events-input"
            data-testid="number-of-events-input"            
            placeholder="Enter a number"            
            onChange={handleInputChanged}           
        />  
        {error && <div className="error-alert">{error}</div>}     
  </div>  )
}

export default NumberOfEvents;