import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return <textarea ref={ref} className={cn("px-4 py-2 border rounded", className)} {...props} />
  }
)

Textarea.displayName = "Textarea"

export { Textarea }