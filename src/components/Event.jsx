import React from 'react';
import { useState } from 'react';

const Event = ({event}) => {
  const[showDetails, setShowDetails] = useState(false);
  return (
    <li key={event.id} className='event'>
      <h2 id='eventHeader'>{event.summary}</h2>
      <p id='eventLocation'>{event.location}</p>
      <p>{event && new Date(event.created).toUTCString()}</p>
      
      {showDetails ? (<p id="eventDetails" className="eventDetails" data-testid="event-details">{event && event.description}</p>):null}
      
      <button
				className="submitButton"
        id = "submitButton"
				onClick={() => {
					showDetails ? setShowDetails(false) : setShowDetails(true);
				}}
			>
				{showDetails ? "Hide Details" : "Show Details"}
			</button>
    </li>
  );
}

export default Event;