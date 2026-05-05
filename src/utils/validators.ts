/**
 * Validate email format
 * @param email - Email string to validate
 * @returns True if valid email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate Thai phone number format
 * @param phone - Phone number to validate
 * @returns True if valid Thai phone number
 */
export const isValidThaiPhone = (phone: string): boolean => {
  const phoneRegex = /^(0[0-9]{9})$/
  return phoneRegex.test(phone.replace(/[-\s]/g, ''))
}

/**
 * Validate password strength
 * @param password - Password to validate
 * @returns Object with validation result and message
 */
export const validatePassword = (password: string): {
  isValid: boolean
  message: string
} => {
  if (password.length < 8) {
    return { isValid: false, message: 'รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร' }
  }

  if (!/[A-Z]/.test(password)) {
    return { isValid: false, message: 'รหัสผ่านต้องมีตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว' }
  }

  if (!/[a-z]/.test(password)) {
    return { isValid: false, message: 'รหัสผ่านต้องมีตัวอักษรพิมพ์เล็กอย่างน้อย 1 ตัว' }
  }

  if (!/[0-9]/.test(password)) {
    return { isValid: false, message: 'รหัสผ่านต้องมีตัวเลขอย่างน้อย 1 ตัว' }
  }

  return { isValid: true, message: 'รหัสผ่านถูกต้อง' }
}
