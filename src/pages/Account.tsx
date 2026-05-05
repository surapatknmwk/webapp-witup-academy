import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Account.css'

export default function Account() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  if (!user) return null

  return (
    <div className="account-page">
      <div className="account-card">
        <div className="account-avatar">
          <span className="account-avatar-icon">{user.role === 'teacher' ? '👩‍🏫' : '👤'}</span>
        </div>

        <div className="account-info">
          <h2 className="account-name">{user.name}</h2>
          <span className={`account-role-badge ${user.role}`}>
            {user.role === 'teacher' ? 'คุณครู' : 'นักเรียน'}
          </span>
        </div>

        <div className="account-details">
          <div className="account-row">
            <span className="account-row-label">ชื่อผู้ใช้</span>
            <span className="account-row-value">{user.username}</span>
          </div>
          {user.studentCode && (
            <div className="account-row">
              <span className="account-row-label">รหัสนักเรียน</span>
              <span className="account-row-value">{user.studentCode}</span>
            </div>
          )}
          <div className="account-row">
            <span className="account-row-label">สิทธิ์</span>
            <span className="account-row-value">{user.role === 'teacher' ? 'ผู้สอน (เต็มสิทธิ์)' : 'ผู้เรียน'}</span>
          </div>
        </div>

        <button className="account-logout" onClick={handleLogout}>
          ออกจากระบบ
        </button>
      </div>
    </div>
  )
}
