import { statusClass, statusLabel } from '../calendarUtils'
import type { SelectedEvent } from '../calendarTypes'

interface Props {
  selected: SelectedEvent
  cancelConfirm: boolean
  cancelPin: string
  cancelPinError: string
  onClose: () => void
  onCancelConfirm: () => void
  setCancelPin: (pin: string) => void
  setCancelPinError: (err: string) => void
  onCancelSubmit: () => void
  onCancelBack: () => void
}

export default function EventModal({
  selected, cancelConfirm, cancelPin, cancelPinError,
  onClose, onCancelConfirm, setCancelPin, setCancelPinError,
  onCancelSubmit, onCancelBack,
}: Props) {
  return (
    <div className="cal-overlay" onClick={onClose}>
      <div className="cal-modal" onClick={e => e.stopPropagation()}>
        <div className={`cal-modal-accent ${statusClass(selected.status)}`} />
        <div className="cal-modal-inner">
          <div className="cal-modal-top">
            <h3 className="cal-modal-title">
              <strong>{selected.student.name}</strong>
              &ensp;({selected.student.studentCode})&ensp;รอบที่ {selected.student.round}
            </h3>
            <button className="cal-modal-close" onClick={onClose} aria-label="ปิด">✕</button>
          </div>

          <div className="cal-modal-rows">
            <div className="modal-row">
              <span className="modal-icon">📅</span>
              <span>{selected.dayLabel}</span>
            </div>
            <div className="modal-row">
              <span className="modal-icon">🕐</span>
              <span>{selected.timeStart} – {selected.timeEnd}&nbsp;&nbsp;({selected.timeHrs} ชม.)</span>
            </div>
            {selected.content && selected.content !== selected.topic && (
              <div className="modal-row">
                <span className="modal-icon">📖</span>
                <span>
                  {selected.topic || selected.content || '(ไม่ระบุหัวข้อ)'}
                  &nbsp;:&nbsp;
                  {selected.content}
                </span>
              </div>
            )}
            <div className="modal-row">
              <span className="modal-icon">💻</span>
              <a
                href={selected.student.room}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                เข้าห้องเรียน Google Meet ↗
              </a>
            </div>
            {selected.note && (
              <div className="modal-row">
                <span className="modal-icon">📝</span>
                <span>{selected.note}</span>
              </div>
            )}
            <div className="modal-row">
              <span className={`status-badge ${statusClass(selected.status)}`}>
                {statusLabel(selected.status)}
              </span>
            </div>
          </div>

          <div className="modal-cancel-section">
            {!cancelConfirm ? (
              <button className="cal-event-cancel-btn" onClick={onCancelConfirm}>
                ยกเลิกคาบนี้
              </button>
            ) : (
              <>
                <p className="cal-pin-label">กรอกรหัส 4 หลักเพื่อยืนยันการยกเลิก</p>
                <div className="cal-pin-row">
                  <input
                    className="cal-pin-input"
                    type="password"
                    inputMode="numeric"
                    maxLength={4}
                    value={cancelPin}
                    onChange={e => {
                      setCancelPin(e.target.value.replace(/\D/g, '').slice(0, 4))
                      setCancelPinError('')
                    }}
                    placeholder="••••"
                    autoFocus
                  />
                  <button className="cal-form-submit cal-pin-btn" onClick={onCancelSubmit}>
                    ยืนยัน
                  </button>
                  <button className="cal-form-cancel cal-pin-btn" onClick={onCancelBack}>
                    ยกเลิก
                  </button>
                </div>
                {cancelPinError && (
                  <p className="cal-form-error" style={{ marginTop: 6 }}>{cancelPinError}</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
