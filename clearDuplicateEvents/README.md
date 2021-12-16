# Event Name Based Google Calendar Event Removal (Duplicate Event Removal)

## [Code](https://github.com/71xn/google-apps-script/blob/main/clearDuplicateEvent/Code.js)

```javascript
const calID =
	"set your calendar id here e.g. sdfsdfsdfdsfdfdsfdh2g@group.calendar.google.com";

// Set the name of the event that needs to be removed
const eventNameToRemove = "event to be removed e.g. CC History Test";

function clearDuplicateEvents() {
	const cal = CalendarApp.getCalendarById(calID);
	const events = cal.getEvents();
	for (let i = 0; i < events.length; i++) {
		if (events[i].getTitle() === eventNameToRemove) {
			events[i].deleteEvent();
		}
	}

	Logger.log(
		"All duplicate events with name: " +
			eventNameToRemove +
			", have been removed!"
	);
}
```

## Trigger Setup

> There is no need for a trigger to be set as this is a manually run script for removing events when something goes wrong
