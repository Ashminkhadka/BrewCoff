import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return <input ref={ref} className={cn("px-4 py-2 border rounded", className)} {...props} />
  }
)

Input.displayName = "Input"

export { Input }
