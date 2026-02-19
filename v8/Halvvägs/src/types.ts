export type Mood = "great" | "good" | "okay" | "tired" | "stressed";


export type EnergyLevel = 1 | 2 | 3 | 4 | 5;


export interface CheckIn {
  id: string;
  name: string; // ISO format date string
  mood: Mood;
  energy: EnergyLevel;
  comment?: string;
  timestamp: Date;
}

//Ett interface för dashboard-statistik
export interface DayStats {
  averageEnergy: number;
  moodDistribution: Record<Mood, number>;
  totalCheckIns: number;
}

export type CheckinAction =
| { type: "ADD_CHECKIN"; payload: Omit<CheckIn, "id" | "timestamp"> } // payload innehåller alla fält utom id och timestamp, som genereras i reducer
| { type: "REMOVE_CHECKIN"; payload: {id:string }} // payload är id för check-in som ska tas bort
| { type: "CLEAR_DAY"; payload: {date: string}}; // ingen payload behövs, rensar alla check-ins för dagens datum

