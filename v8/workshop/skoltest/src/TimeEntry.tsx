
interface TimeEntry {
  id: string;
  description: string;
  startTime: Date;
  endTime?: Date;
  category: 'work' | 'break' | 'meeting' | 'other';
  tags?: Array<string>;
}

type Status = 'idle' | 'running' | 'paused' | 'stopped';

interface UserSettings {
  theme: 'light' | 'dark';
  workHoursPerDay: number;
  notifications: boolean;
  defaultCategory: TimeEntry['category'];
}
type AppState = {
  entries: Array<TimeEntry>;
  userSettings: UserSettings;
  currentEntry: TimeEntry | null;
  status: Status;
}

export default function calculateDuration(entry: TimeEntry): number {
  if (!entry.endTime) {
    return 0;
  }
  const durationMs = entry.endTime.getTime() - entry.startTime.getTime();
  return Math.floor(durationMs / 60000); // Return duration in minutes
}

