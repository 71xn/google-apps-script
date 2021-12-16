// Clear calendar events script - Finn Lestrange 2021

// Variables that need to be set to use below
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
