import { useState, useMemo } from 'react'
import { calendarData } from '../../data/calendarData'
import type { Activity } from '../../types/calendar'
import {
  THAI_MONTHS, WEEKDAYS, MIN_YEAR, MAX_YEAR,
  TODAY_BE, TODAY_MONTH, TODAY_DAY, EMPTY_FORM, KNOWN_STUDENTS,
} from './calendarConstants'
import { toMins, statusClass } from './calendarUtils'
import type { AddForm, AddErrors, CalCell, CellType, SelectedEvent } from './calendarTypes'
import AddEventModal from './components/AddEventModal'
import EventModal from './components/EventModal'
import './Calendar.css'

export default function Calendar() {
  const [beYear, setBEYear] = useState(TODAY_BE)
  const [month, setMonth] = useState(TODAY_MONTH)
  const [selected, setSelected] = useState<SelectedEvent | null>(null)
  const [addDay, setAddDay] = useState<number | null>(null)
  const [addedEvents, setAddedEvents] = useState<
    Array<{ beYear: number; month: number; day: number; activity: Activity }>
  >([])
  const [addForm, setAddForm] = useState<AddForm>(EMPTY_FORM)
  const [addErrors, setAddErrors] = useState<AddErrors>({})
  const [cancelledKeys, setCancelledKeys] = useState<string[]>([])
  const [cancelConfirm, setCancelConfirm] = useState(false)
  const [cancelPin, setCancelPin] = useState('')
  const [cancelPinError, setCancelPinError] = useState('')

  const ceYear = beYear - 543

  // ── Derived data ──────────────────────────────────────────────────────────

  const monthDays = useMemo(() => {
    const cancelled = new Set(cancelledKeys)
    const evKey = (day: number, a: Activity) =>
      `${beYear - 543}|${month}|${day}|${a.timeStart}|${a.student.studentCode}`
    const merged: Record<number, { holiday: string | null; activities: Activity[] }> = {}

    for (const m of calendarData.filter(m => m.year === beYear && m.month === month)) {
      for (const d of m.days) {
        if (!merged[d.day]) merged[d.day] = { holiday: d.holiday, activities: [] }
        if (d.holiday) merged[d.day].holiday = d.holiday
        merged[d.day].activities.push(...d.activity.filter(a => !cancelled.has(evKey(d.day, a))))
      }
    }
    for (const ev of addedEvents) {
      if (ev.beYear === beYear && ev.month === month && !cancelled.has(evKey(ev.day, ev.activity))) {
        if (!merged[ev.day]) merged[ev.day] = { holiday: null, activities: [] }
        merged[ev.day].activities.push(ev.activity)
      }
    }
    return Object.keys(merged).length > 0 ? merged : null
  }, [beYear, month, addedEvents, cancelledKeys])

  const grid = useMemo<CalCell[]>(() => {
    // (getDay() + 6) % 7  → Mon=0 … Sun=6
    const firstDay = (new Date(ceYear, month - 1, 1).getDay() + 6) % 7
    const daysInMonth = new Date(ceYear, month, 0).getDate()
    const daysInPrev  = new Date(ceYear, month - 1, 0).getDate()
    const cells: CalCell[] = []
    for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: daysInPrev - i, type: 'prev' })
    for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, type: 'current' })
    const remaining = 42 - cells.length
    for (let d = 1; d <= remaining; d++) cells.push({ day: d, type: 'next' })
    return cells
  }, [ceYear, month])

  // ── Handlers ──────────────────────────────────────────────────────────────

  const navigate = (dir: -1 | 1) => {
    let m = month + dir
    let y = beYear
    if (m < 1) { m = 12; y -= 1 }
    else if (m > 12) { m = 1; y += 1 }
    if (y < MIN_YEAR || y > MAX_YEAR) return
    setBEYear(y)
    setMonth(m)
  }

  const goToday = () => { setBEYear(TODAY_BE); setMonth(TODAY_MONTH) }

  const isToday = (day: number, type: CellType) =>
    type === 'current' && day === TODAY_DAY && month === TODAY_MONTH && beYear === TODAY_BE

  const closeEventModal = () => {
    setSelected(null)
    setCancelConfirm(false)
    setCancelPin('')
    setCancelPinError('')
  }

  const openEvent = (act: Activity, day: number) => {
    setCancelConfirm(false)
    setCancelPin('')
    setCancelPinError('')
    const d = new Date(ceYear, month - 1, day)
    const dayLabel = d.toLocaleDateString('th-TH', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    })
    setSelected({ ...act, dayLabel, ceYear, month, day })
  }

  const handleCancelEvent = () => {
    if (cancelPin !== '7951') { setCancelPinError('รหัสไม่ถูกต้อง'); return }
    if (!selected) return
    const key = `${selected.ceYear}|${selected.month}|${selected.day}|${selected.timeStart}|${selected.student.studentCode}`
    setCancelledKeys(prev => [...prev, key])
    closeEventModal()
  }

  const openAddModal = (day: number) => {
    const clicked = new Date(ceYear, month - 1, day)
    const today   = new Date(TODAY_BE - 543, TODAY_MONTH - 1, TODAY_DAY)
    clicked.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)
    if (clicked < today) return
    setAddDay(day)
    setAddForm(EMPTY_FORM)
    setAddErrors({})
  }

  const handleStudentSelect = (code: string) => {
    const s = KNOWN_STUDENTS.find(s => s.studentCode === code)
    setAddForm(f => ({ ...f, studentCode: code, studentName: s?.name ?? '', studentRoom: s?.room ?? '' }))
  }

  const getNextRound = (code: string) => {
    let max = 0
    for (const md of calendarData) {
      for (const d of md.days) {
        for (const a of d.activity) {
          if (a.student.studentCode === code) max = Math.max(max, parseInt(a.student.round) || 0)
        }
      }
    }
    for (const ev of addedEvents) {
      if (ev.activity.student.studentCode === code) max = Math.max(max, parseInt(ev.activity.student.round) || 0)
    }
    return String(max + 1)
  }

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (addDay === null) return

    const errs: AddErrors = {}
    if (!addForm.studentName.trim()) errs.studentName = 'กรุณาระบุชื่อนักเรียน'
    if (!addForm.topic.trim())       errs.topic       = 'กรุณาระบุหัวข้อ'
    if (!addForm.content.trim())     errs.content     = 'กรุณาระบุเนื้อหา'

    if (addForm.timeStart && addForm.timeEnd) {
      const s  = toMins(addForm.timeStart)
      const e2 = toMins(addForm.timeEnd)
      if (s < toMins('07:00') || s >= toMins('21:00'))
        errs.timeStart = 'เวลาต้องอยู่ใน 07:00 – 21:00'
      else if (e2 <= s)
        errs.timeEnd = 'เวลาสิ้นสุดต้องมากกว่าเวลาเริ่ม'
      else if (e2 > toMins('21:00'))
        errs.timeEnd = 'เวลาต้องไม่เกิน 21:00'
      else {
        const conflict = (monthDays?.[addDay]?.activities ?? []).some(
          a => s < toMins(a.timeEnd) && toMins(a.timeStart) < e2
        )
        if (conflict) errs.overlap = 'เวลาทับซ้อนกับคาบสอนที่มีอยู่แล้ว'
      }
    }

    if (Object.keys(errs).length) { setAddErrors(errs); return }

    const code = addForm.studentCode || `NEW_${Date.now()}`
    const hrs  = String((toMins(addForm.timeEnd) - toMins(addForm.timeStart)) / 60)
    const newAct: Activity = {
      no: (monthDays?.[addDay]?.activities.length ?? 0) + 1,
      topic:    addForm.topic.trim(),
      content:  addForm.content.trim(),
      note:     addForm.note.trim() || undefined,
      timeStart: addForm.timeStart,
      timeEnd:   addForm.timeEnd,
      timeHrs:   hrs,
      status: 'S',
      student: {
        studentCode: code,
        name:  addForm.studentName.trim(),
        round: getNextRound(code),
        room:  addForm.studentRoom.trim(),
      },
    }
    setAddedEvents(prev => [...prev, { beYear, month, day: addDay, activity: newAct }])
    setAddDay(null)
  }

  const canPrev = !(beYear === MIN_YEAR && month === 1)
  const canNext = !(beYear === MAX_YEAR && month === 12)

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div>
      <div className="cal-header-top">
        <div className="cal-header-left">
          <button className="cal-btn-today" onClick={goToday}>วันนี้</button>
          <div className="cal-nav-group">
            <button className="cal-nav-btn" onClick={() => navigate(-1)} disabled={!canPrev} aria-label="เดือนก่อนหน้า">‹</button>
            <button className="cal-nav-btn" onClick={() => navigate(1)}  disabled={!canNext} aria-label="เดือนถัดไป">›</button>
          </div>
          <h2 className="cal-month-title">
            {THAI_MONTHS[month - 1]}&nbsp;พ.ศ.&nbsp;{beYear}
          </h2>
        </div>
      </div>

      <div className="cal-root">
        <div className="cal-grid-wrapper">
          {/* Weekday headers */}
          <div className="cal-weekday-row">
            {WEEKDAYS.map((d, i) => (
              <div key={d} className={`cal-weekday-label ${i === 6 ? 'sun' : i === 5 ? 'sat' : ''}`}>{d}</div>
            ))}
          </div>

          {/* Day grid */}
          <div className="cal-days-grid">
            {grid.map((cell, idx) => {
              const col     = idx % 7
              const isSun   = col === 6
              const isSat   = col === 5
              const today   = isToday(cell.day, cell.type)
              const dayData = cell.type === 'current' ? monthDays?.[cell.day] : undefined
              const isPast  = cell.type === 'current' && (
                beYear < TODAY_BE ||
                (beYear === TODAY_BE && month < TODAY_MONTH) ||
                (beYear === TODAY_BE && month === TODAY_MONTH && cell.day < TODAY_DAY)
              )

              return (
                <div
                  key={`${cell.type}-${cell.day}-${idx}`}
                  className={[
                    'cal-cell',
                    cell.type !== 'current' ? 'overflow' : '',
                    today   ? 'today'    : '',
                    isSun   ? 'sun-col'  : '',
                    isSat   ? 'sat-col'  : '',
                    dayData?.holiday ? 'has-holiday' : '',
                    isPast  ? 'past'     : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => cell.type === 'current' && openAddModal(cell.day)}
                >
                  <div className="cal-cell-head">
                    <span className={today ? 'today-badge' : 'day-num'}>{cell.day}</span>
                    {dayData?.holiday && (
                      <span className="holiday-name" title={dayData.holiday}>
                        {dayData.holiday}
                      </span>
                    )}
                  </div>
                  <div className="cal-cell-events">
                    {dayData?.activities.map((act, i) => (
                      <button
                        key={i}
                        className={`cal-event ${statusClass(act.status)}`}
                        onClick={e => { e.stopPropagation(); openEvent(act, cell.day) }}
                        title={`${act.timeStart}–${act.timeEnd}  ${act.topic || act.content}`}
                      >
                        <span className="ev-dot" />
                        <span className="ev-time">{act.timeStart}</span>
                        <span className="ev-label">{act.student.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Modals */}
        {addDay !== null && (
          <AddEventModal
            addDay={addDay}
            ceYear={ceYear}
            month={month}
            addForm={addForm}
            addErrors={addErrors}
            onClose={() => setAddDay(null)}
            onSubmit={handleAddSubmit}
            onStudentSelect={handleStudentSelect}
            setAddForm={setAddForm}
          />
        )}

        {selected && (
          <EventModal
            selected={selected}
            cancelConfirm={cancelConfirm}
            cancelPin={cancelPin}
            cancelPinError={cancelPinError}
            onClose={closeEventModal}
            onCancelConfirm={() => setCancelConfirm(true)}
            setCancelPin={setCancelPin}
            setCancelPinError={setCancelPinError}
            onCancelSubmit={handleCancelEvent}
            onCancelBack={() => { setCancelConfirm(false); setCancelPin(''); setCancelPinError('') }}
          />
        )}
      </div>
    </div>
  )
}
