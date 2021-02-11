interface appointmentReminder {
  event: string;
  time: string; 
}

function appointmentReminder(arr :appointmentReminder[]): string[] {
return arr.map((element) => `Reminder: you have ${element.event} starting at ${element.time}`)
}

export { appointmentReminder };
