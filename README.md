# Meet App
## Features & Scenarios
### Feature 1: Filter Events By City
   **User Story :**  As a user,  
     I should be able to filter events by city  
     So that I can see a list of events taking place in that city.  

* Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.   
  **Given** the user has not searched for a city    
  **When** the events are displayed    
  **Then** upcoming events from all cities should be shown  
   
* Scenario 2: User should see a list of suggestions when they search for a city.  
	   **Given** the user is searching for a city  
    **When** they enter a city name in the search field  
    **Then** they should see a list of suggested cities  

* Scenario 3: User can select a city from the suggested list.  
	   **Given** the user is searching for a city     
    And a list of suggested cities is displayed    
    **When** the user selects a city from the list    
    **Then** the selected city should be applied as the filter    

### Feature 2: Show/Hide Event Details
**User Story:** As a user,  
I should be able to show or hide event details,  
So all event details will not be always hidden or displayed.  

* Scenario 1: An event element is collapsed by default.  
	 **Given** the user is viewing the list of events  
  **When** the events are displayed  
  **Then** each event element should be collapsed by default    

* Scenario 2: User can expand an event to see details.  
	  **Given** the user is viewing the list of events    
   **When** the user clicks on an event  
   **Then** the event details should be expanded and visible  

* Scenario 3: User can collapse an event to hide details.  
	   **Given** an event is expanded    
    **When** the user clicks on the event  
    **Then** the event details should be collapsed and hidden  
	
### Feature 3: Specify Number of Events
**User Story:** As a user,  
I should be able to specify number of events.  
So that the right amount of events will be displayed.  

* Scenario 1: When user hasn’t specified a number, 32 events are shown by default.  
    **Given** the user has not specified a number of events    
    **When** the events are displayed    
    **Then** 32 events should be shown by default  
	
* Scenario 2: User can change the number of events displayed.  
    **Given** the user wants to specify the number of events    
    **When** they enter a desired number of events    
    **Then** the event list should display the specified number of events    
	
### Feature 4: Use the App When Offline
**User Story:** As a user,  
I want to use the app offline  
So Meet app is available without internet connection  

* Scenario 1: Show cached data when there’s no internet connection.  
	   **Given** the user is offline    
    **When** they open the app    
    **Then** cached event data should be displayed    
	
* Scenario 2: Show error when user changes search settings (city, number of events).  
	   **Given** the user is offline    
    **When** they attempt to change the search settings    
    **Then** an error message should be shown    
	
### Feature 5: Add an App Shortcut to the Home Screen
**User Story:** As a user,  
I can add an App Shortcut to the Home Screen  
So I can access the app quickly  

* Scenario 1: User can install the meet app as a shortcut on their device home screen.  
	This feature will be handled by the user’s OS. 

### Feature 6: Display Charts Visualizing Event Details
**User Story:** As a user,  
I can view charts visualizing event details in a town/city/country  
So I can easily understand the event data  

* Scenario 1: Show a chart with the number of upcoming events in each city.  
	   **Given** the user is viewing the event statistics    
    **When** the data is loaded    
    **Then** a chart should be displayed showing the number of upcoming events in each city    
