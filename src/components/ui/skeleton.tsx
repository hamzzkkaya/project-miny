import { cn } from "../../utils/cn"

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-[#3b3b3b]/50", className)}
            {...props}
        />
    )
}

export { Skeleton }
