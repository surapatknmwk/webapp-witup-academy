import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Login.css'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const ok = login(username.trim(), password)
    if (ok) {
      navigate('/', { replace: true })
    } else {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <h1 className="login-brand">Witup Academy</h1>
          <p className="login-subtitle">ระบบจัดการการเรียนการสอน</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-group">
            <label className="login-label">ชื่อผู้ใช้</label>
            <input
              className="login-input"
              type="text"
              value={username}
              onChange={e => { setUsername(e.target.value); setError('') }}
              placeholder="teacher หรือ รหัสนักเรียน"
              autoFocus
              autoComplete="username"
            />
          </div>

          <div className="login-group">
            <label className="login-label">รหัสผ่าน</label>
            <div className="login-pass-wrap">
              <input
                className="login-input"
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={e => { setPassword(e.target.value); setError('') }}
                placeholder="รหัสผ่าน"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="login-eye"
                onClick={() => setShowPass(s => !s)}
                aria-label={showPass ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'}
              >
                {showPass ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-submit">เข้าสู่ระบบ</button>
        </form>

        <div className="login-hint">
          <p className="login-hint-title">Demo credentials</p>
          <p>ครู: <code>teacher</code> / <code>witup2024</code></p>
          <p>นักเรียน: <code>ST0001</code> ถึง <code>ST0005</code> / <code>1234</code></p>
        </div>
      </div>
    </div>
  )
}
