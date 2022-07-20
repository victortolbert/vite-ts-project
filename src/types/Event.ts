import { Attendee } from '.'

export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
  attendees: Attendee[]
}
