import { Attendee } from '.';

export interface EventItem {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  organizer: string;
  attendees: Attendee[];
}
