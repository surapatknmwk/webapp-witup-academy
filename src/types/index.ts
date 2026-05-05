// Common types used throughout the application

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'student' | 'teacher' | 'admin'
}

export interface Course {
  id: string
  title: string
  description: string
  thumbnail?: string
  instructor: User
  duration: number // in minutes
  price: number
  level: 'beginner' | 'intermediate' | 'advanced'
  category: string
  createdAt: Date
  updatedAt: Date
}

export interface Lesson {
  id: string
  courseId: string
  title: string
  content: string
  videoUrl?: string
  order: number
  duration: number
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
}
