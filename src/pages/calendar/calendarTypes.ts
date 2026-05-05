import type { Activity } from '../../types/calendar'

export type CellType = 'prev' | 'current' | 'next'

export interface CalCell {
  day: number
  type: CellType
}

export interface SelectedEvent extends Activity {
  dayLabel: string
  ceYear: number
  month: number
  day: number
}

export interface AddForm {
  studentCode: string
  studentName: string
  studentRoom: string
  topic: string
  content: string
  timeStart: string
  timeEnd: string
  note: string
}

export type AddErrors = Partial<Record<keyof AddForm | 'overlap', string>>
