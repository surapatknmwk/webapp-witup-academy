import { HOURS } from '../calendarConstants'

interface Props {
  value: string
  onChange: (v: string) => void
}

export default function TimeSelect({ value, onChange }: Props) {
  const [h, m] = value ? value.split(':') : ['08', '00']
  return (
    <div className="cal-time-picker">
      <select
        className="cal-form-select"
        value={h || '08'}
        onChange={e => onChange(`${e.target.value}:${m || '00'}`)}
      >
        {HOURS.map(hr => <option key={hr} value={hr}>{hr} นาฬิกา</option>)}
      </select>
      <select
        className="cal-form-select"
        value={m || '00'}
        onChange={e => onChange(`${h || '08'}:${e.target.value}`)}
      >
        <option value="00">00 น.</option>
        <option value="30">30 น.</option>
      </select>
    </div>
  )
}
