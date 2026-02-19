import type { CheckIn, CheckinAction } from "../types";

export function checkInReducer(state:CheckIn[], action: CheckinAction): CheckIn[] {
  switch (action.type) {
    case "ADD_CHECKIN":
      const newCheckIn: CheckIn = {
        id: crypto.randomUUID(), // Genererar ett unikt ID
        timestamp: new Date(), // Sätter timestamp till nuvarande tid
        ...action.payload, // Inkluderar övriga fält från payload
      };
      return [...state, newCheckIn]; // Lägger till den nya check-in i state

    case "REMOVE_CHECKIN":
      return state.filter(checkIn => checkIn.id !== action.payload.id); // Tar bort check-in med matchande ID

    case "CLEAR_DAY":
      const today = new Date().toISOString().split("T")[0]; // Får dagens datum i ISO format (YYYY-MM-DD)
      return state.filter(checkIn => !checkIn.name.startsWith(today)); // Tar bort alla check-ins som har dagens datum

    default:
      return state; // Returnerar oförändrat state för okända action-typer
  }
}