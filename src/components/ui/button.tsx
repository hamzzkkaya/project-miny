import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../utils/cn"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-bold ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-[2px] active:translate-y-[2px] active:shadow-none",
    {
        variants: {
            variant: {
                default:
                    // Stone Button Style (Minecraft)
                    "bg-[#7a7a7a] text-[#ffffff] shadow-[inset_-2px_-4px_0px_#555555,inset_2px_2px_0px_#aaaaaa] border-black hover:bg-[#8b8b8b] hover:shadow-[inset_-2px_-4px_0px_#666666,inset_2px_2px_0px_#bbbbbb] active:bg-[#6b6b6b]",
                destructive:
                    "bg-red-900 text-red-100 border-red-950 shadow-[inset_-2px_-4px_0px_#450a0a,inset_2px_2px_0px_#ef4444] hover:bg-red-800",
                outline:
                    "border-2 border-[#aaaaaa] bg-transparent hover:bg-[#ffffff]/5 text-[#e0e0e0]",
                secondary:
                    "bg-[#3b3b3b] text-[#e0e0e0] border-black shadow-[inset_-2px_-4px_0px_#1f1f1f,inset_2px_2px_0px_#6b6b6b] hover:bg-[#4b4b4b]",
                ghost: "border-transparent hover:bg-[#ffffff]/10 text-[#e0e0e0] shadow-none border-0 active:translate-y-0",
                link: "text-brand-blue underline-offset-4 hover:underline border-none shadow-none active:translate-y-0",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 px-3",
                lg: "h-14 px-8 text-lg",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
