import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2>ไม่พบหน้าที่คุณค้นหา</h2>
        <p>ขอโทษด้วย หน้าที่คุณพยายามเข้าถึงไม่มีอยู่ในระบบ</p>
        <Link to="/" className="back-home-btn">
          กลับสู่หน้าหลัก
        </Link>
      </div>
    </div>
  )
}

export default NotFound
