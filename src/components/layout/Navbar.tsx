import { Link } from "react-router"
import { Box } from "lucide-react"
import { cn } from "../../utils/cn"
import { ExpandableMenu } from "./navbar/ExpandableMenu"

export function Navbar() {
    // No scroll logic needed for fixed GUI Top Bar
    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50",
                // Minecraft GUI Header Style
                // Bg: #3b3b3b (Dark), Border Bottom: #1f1f1f (Dark Shadow) + #101010 (Deep Shadow)
                "bg-[#3b3b3b] border-b-2 border-b-[#1f1f1f] shadow-lg",
                "py-2" // Compact game-like spacing
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between h-14">

                {/* 1. Logo */}
                <Link to="/" className="flex items-center gap-3 group relative z-50">
                    {/* Logo Box - Styled as an Item Slot */}
                    <div className="relative flex h-10 w-10 items-center justify-center bg-[#8b8b8b] border-2 border-b-[#373737] border-r-[#373737] border-t-[#ffffff] border-l-[#ffffff] shadow-sm group-hover:scale-105 transition-transform">
                        <Box className="h-6 w-6 text-[#1f1f1f]" strokeWidth={2.5} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-[#e0e0e0] drop-shadow-md font-minecraft">
                        Miny
                    </span>
                </Link>

                {/* 2. Right Side: The Expandable Menu (Acts as Nav & Actions) */}
                <div className="relative">
                    <ExpandableMenu />
                </div>

            </div>
        </header>
    )
}
