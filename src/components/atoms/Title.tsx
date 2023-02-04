import React from "react"
import { forwardRef } from "react"
import clsxm from "@/utils/clsxm"

interface TitleProps {
  className?: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: string
}

const Title: React.FC<TitleProps> = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, level, ...rest }, ref) => {
    return React.createElement(`h${level}`, {
      className: clsxm("font-monospace font-bold", className),
      ref: ref,
      ...rest,
    })
  }
)

Title.displayName = "Title"

export default Title
