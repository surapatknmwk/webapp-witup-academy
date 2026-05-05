import { calendarData } from '../../data/calendarData'
import type { AddForm } from './calendarTypes'

export const THAI_MONTHS = [
  'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน',
  'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม',
  'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม',
]

export const WEEKDAYS = ['จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา']

export const HOURS = Array.from({ length: 15 }, (_, i) => String(i + 7).padStart(2, '0'))

export const MIN_YEAR = 2569
export const MAX_YEAR = 2571

const _now = new Date()
export const TODAY_BE    = _now.getFullYear() + 543
export const TODAY_MONTH = _now.getMonth() + 1
export const TODAY_DAY   = _now.getDate()

export const EMPTY_FORM: AddForm = {
  studentCode: '', studentName: '', studentRoom: '',
  topic: '', content: '', timeStart: '08:00', timeEnd: '10:00', note: '',
}

export const KNOWN_STUDENTS = (() => {
  const map = new Map<string, { studentCode: string; name: string; room: string }>()
  for (const md of calendarData) {
    for (const d of md.days) {
      for (const a of d.activity) {
        if (!map.has(a.student.studentCode))
          map.set(a.student.studentCode, {
            studentCode: a.student.studentCode,
            name: a.student.name,
            room: a.student.room,
          })
      }
    }
  }
  return [...map.values()]
})()
