import type React from 'react'
import { KNOWN_STUDENTS } from '../calendarConstants'
import type { AddForm, AddErrors } from '../calendarTypes'
import TimeSelect from './TimeSelect'

interface Props {
  addDay: number
  ceYear: number
  month: number
  addForm: AddForm
  addErrors: AddErrors
  onClose: () => void
  onSubmit: (e: React.FormEvent) => void
  onStudentSelect: (code: string) => void
  setAddForm: React.Dispatch<React.SetStateAction<AddForm>>
}

export default function AddEventModal({
  addDay, ceYear, month, addForm, addErrors,
  onClose, onSubmit, onStudentSelect, setAddForm,
}: Props) {
  const dateLabel = new Date(ceYear, month - 1, addDay).toLocaleDateString('th-TH', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div className="cal-overlay" onClick={onClose}>
      <div className="cal-modal" onClick={e => e.stopPropagation()}>
        <div className="cal-modal-accent ev-scheduled" />
        <div className="cal-modal-inner">
          <div className="cal-modal-top">
            <div>
              <h3 className="cal-modal-title">เพิ่มคาบสอน</h3>
              <p className="cal-add-date">{dateLabel}</p>
            </div>
            <button className="cal-modal-close" onClick={onClose} aria-label="ปิด">✕</button>
          </div>

          <form className="cal-add-form" onSubmit={onSubmit}>
            <div className="cal-form-group">
              <label className="cal-form-label">เลือกนักเรียน</label>
              <select
                className="cal-form-select"
                value={addForm.studentCode}
                onChange={e => onStudentSelect(e.target.value)}
              >
                <option value="">-- เลือกจากรายชื่อ --</option>
                {KNOWN_STUDENTS.map(s => (
                  <option key={s.studentCode} value={s.studentCode}>{s.name}</option>
                ))}
              </select>
            </div>

            <div className="cal-form-group">
              <label className="cal-form-label">ลิงก์ Google Meet</label>
              <input
                className="cal-form-input"
                placeholder="https://meet.google.com/..."
                value={addForm.studentRoom}
                onChange={e => setAddForm(f => ({ ...f, studentRoom: e.target.value }))}
              />
            </div>

            <div className="cal-form-group">
              <label className="cal-form-label">หัวข้อ <span className="cal-form-req">*</span></label>
              <input
                className="cal-form-input"
                placeholder="เช่น บทที่ 1 กฎของนิวตัน"
                value={addForm.topic}
                onChange={e => setAddForm(f => ({ ...f, topic: e.target.value }))}
              />
              {addErrors.topic && <p className="cal-form-error">{addErrors.topic}</p>}
            </div>

            <div className="cal-form-group">
              <label className="cal-form-label">เนื้อหา <span className="cal-form-req">*</span></label>
              <input
                className="cal-form-input"
                placeholder="เช่น กฎข้อที่ 1 และ 2"
                value={addForm.content}
                onChange={e => setAddForm(f => ({ ...f, content: e.target.value }))}
              />
              {addErrors.content && <p className="cal-form-error">{addErrors.content}</p>}
            </div>

            <div className="cal-form-row">
              <div className="cal-form-group">
                <label className="cal-form-label">เวลาเริ่ม <span className="cal-form-req">*</span></label>
                <TimeSelect value={addForm.timeStart} onChange={v => setAddForm(f => ({ ...f, timeStart: v }))} />
                {addErrors.timeStart && <p className="cal-form-error">{addErrors.timeStart}</p>}
              </div>
              <div className="cal-form-group">
                <label className="cal-form-label">เวลาสิ้นสุด <span className="cal-form-req">*</span></label>
                <TimeSelect value={addForm.timeEnd} onChange={v => setAddForm(f => ({ ...f, timeEnd: v }))} />
                {addErrors.timeEnd && <p className="cal-form-error">{addErrors.timeEnd}</p>}
              </div>
            </div>

            {addErrors.overlap && (
              <p className="cal-form-error cal-form-error--block">{addErrors.overlap}</p>
            )}

            <div className="cal-form-group">
              <label className="cal-form-label">หมายเหตุ</label>
              <input
                className="cal-form-input"
                placeholder="(ไม่บังคับ)"
                value={addForm.note}
                onChange={e => setAddForm(f => ({ ...f, note: e.target.value }))}
              />
            </div>

            <div className="cal-form-actions">
              <button type="button" className="cal-form-cancel" onClick={onClose}>ยกเลิก</button>
              <button type="submit" className="cal-form-submit">เพิ่มคาบสอน</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
