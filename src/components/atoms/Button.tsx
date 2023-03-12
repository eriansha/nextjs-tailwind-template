import clsxm from "@/utils/clsxm"
import { forwardRef, ReactNode } from "react"

interface ButtonProps {
  className?: string
  isLoading?: boolean
  children: ReactNode
}

const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, className }, ref) => {
  return (
    <button ref={ref} type="button" className={clsxm("", className)}>
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button
