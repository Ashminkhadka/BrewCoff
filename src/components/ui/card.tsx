import * as React from "react"

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-lg border bg-white shadow-sm ${className}`} {...props} />
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />
}

export { Card, CardContent }
