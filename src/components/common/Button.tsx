import { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  children: ReactNode
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`.trim()

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}

export default Button
