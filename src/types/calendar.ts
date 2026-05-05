export interface Student {
  studentCode: string
  name: string
  round: string
  room: string
}

export interface Activity {
  no: number
  topic: string
  content: string
  note?: string
  timeStart: string
  timeEnd: string
  timeHrs: string
  status?: 'A' | 'S' | 'C'
  student: Student
}

export interface CalendarDay {
  day: number
  weekDay: string
  holiday: string | null
  activity: Activity[]
}

export interface MonthData {
  year: number
  month: number
  days: CalendarDay[]
}
