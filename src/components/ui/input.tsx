import * as React from "react"
import { cn } from "../../utils/cn"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-none border-2 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                    // Minecraft Slot Style (Sunken)
                    // Bg: #1e1e1e (Dark Slot)
                    // Border: Top/Left Dark (#000000), Bottom/Right Light (#6b6b6b)
                    "bg-[#1e1e1e] text-[#e0e0e0] placeholder:text-[#808080]",
                    "border-t-[#101010] border-l-[#101010] border-b-[#6b6b6b] border-r-[#6b6b6b]",
                    // Focus State: Highlight the border or change bg slightly
                    "focus-visible:bg-[#2a2a2a] focus-visible:border-b-white focus-visible:border-r-white",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
