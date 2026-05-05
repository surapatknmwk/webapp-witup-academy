import { createContext, useContext, useState, type ReactNode } from 'react'

export type Role = 'teacher' | 'student'

export interface AuthUser {
  username: string
  name: string
  role: Role
  studentCode?: string
}

interface AuthContextType {
  user: AuthUser | null
  login: (username: string, password: string) => boolean
  logout: () => void
}

const USERS: Array<AuthUser & { password: string }> = [
  { username: 'teacher',  password: 'witup2024', name: 'คุณครู Witup',  role: 'teacher' },
  { username: 'ST0001',   password: '1234',       name: 'น้องดรีม',     role: 'student', studentCode: 'ST0001' },
  { username: 'ST0002',   password: '1234',       name: 'น้องมิ้น',     role: 'student', studentCode: 'ST0002' },
  { username: 'ST0003',   password: '1234',       name: 'น้องพลอย',    role: 'student', studentCode: 'ST0003' },
  { username: 'ST0004',   password: '1234',       name: 'น้องต้น',      role: 'student', studentCode: 'ST0004' },
  { username: 'ST0005',   password: '1234',       name: 'น้องเบล',      role: 'student', studentCode: 'ST0005' },
]

const STORAGE_KEY = 'witup_user'
const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY)
      return s ? (JSON.parse(s) as AuthUser) : null
    } catch { return null }
  })

  const login = (username: string, password: string): boolean => {
    const found = USERS.find(u => u.username === username && u.password === password)
    if (!found) return false
    const { password: _, ...authUser } = found
    void _
    setUser(authUser)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(authUser))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside AuthProvider')
  return ctx
}
