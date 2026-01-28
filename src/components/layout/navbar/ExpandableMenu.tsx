import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router"
import { Home, Download, Box, Info, X, Menu, Settings } from "lucide-react"
import { cn } from "../../../utils/cn"
import { MinecraftSkinViewer } from "./MinecraftSkinViewer"

const navItems = [
    { name: "Anasayfa", href: "/", icon: Home, desc: "Arayüz Vitrini" },
    { name: "İndir", href: "/download", icon: Download, desc: "v2.0 Sürümü" },
    { name: "Modlar", href: "/mods", icon: Box, desc: "Topluluk Paketleri" },
    { name: "Hakkında", href: "/about", icon: Info, desc: "Ekip ve Vizyon" },
]

export function ExpandableMenu() {
    // 1. Logic (State)
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        // Root container must have dimensions to participate in Parent Flexbox correctly
        // This fixes the "slipping" issue by ensuring the absolute child has a reference frame that is actually positioned in the flow.
        <div ref={containerRef} className="relative z-50 font-sans w-10 h-10">

            {/* Backdrop Blur - Only visible when open */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40"
                        style={{ pointerEvents: "auto" }}
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* 
                2. Animasyonlu Kap (Wrapper) 
                Minecraft DARK MODE Inventory Window Style
                Positioning: ABSOLUTE to anchor to the button's original position.
                Z-Index: 100 to float above everything.
            */}
            <motion.div
                layout
                initial={false}
                animate={{
                    width: isOpen ? "700px" : "40px", // Button size closed
                    height: isOpen ? "500px" : "40px", // Button size closed
                    backgroundColor: isOpen ? "#3b3b3b" : "#3b3b3b",
                    borderRadius: isOpen ? "4px" : "4px",
                    // When open, slightly shift to accommodate size, but keep anchor right
                    right: 0,
                    top: 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 35
                }}
                className={cn(
                    "overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-[100]",
                    // Positioning: Always absolute relative to the parent div in Navbar
                    "absolute right-0 top-0",

                    // Minecraft Bevel Borders (Global Theme)
                    isOpen
                        ? "border-t-[#6b6b6b] border-l-[#6b6b6b] border-b-[#1f1f1f] border-r-[#1f1f1f] border-[3px] cursor-default"
                        : "border-t-[#6b6b6b] border-l-[#6b6b6b] border-b-[#1f1f1f] border-r-[#1f1f1f] border-[3px] hover:bg-[#4b4b4b] active:border-t-[#1f1f1f] active:border-l-[#1f1f1f] active:border-b-[#6b6b6b] active:border-r-[#6b6b6b] cursor-pointer"
                )}
                onClick={() => !isOpen && setIsOpen(true)}
            >
                {/* 
                    3. İçerik Değişimi (AnimatePresence) 
                */}
                <AnimatePresence mode="popLayout" initial={false}>
                    {isOpen ? (
                        // --- AÇIK İÇERİK (MC DARK GUI) ---
                        <motion.div
                            key="content-panel"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="w-full h-full flex flex-col relative p-1"
                        >
                            {/* CLOSE BUTTON - Dark Mode Style */}
                            <div className="absolute top-2 right-2 z-50">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                                    className="w-6 h-6 flex items-center justify-center bg-[#3b3b3b] border-2 border-b-[#1f1f1f] border-r-[#1f1f1f] border-t-[#6b6b6b] border-l-[#6b6b6b] hover:bg-[#4b4b4b] active:border-t-[#1f1f1f] active:border-l-[#1f1f1f] active:border-b-[#6b6b6b] active:border-r-[#6b6b6b] text-[#e0e0e0]"
                                >
                                    <X className="w-4 h-4" strokeWidth={3} />
                                </button>
                            </div>

                            {/* CONTENT GRID */}
                            <div className="flex-1 grid grid-cols-12 h-full gap-2 p-3">

                                {/* LEFT: Inventory Slots (Nav) */}
                                <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                                    <h3 className="text-lg font-bold text-[#e0e0e0] tracking-tight pl-1 select-none flex items-center gap-2 drop-shadow-md">
                                        Envanter
                                    </h3>

                                    {/* Slot Grid Container */}
                                    <div className="bg-[#1e1e1e] p-2 border-2 border-b-[#6b6b6b] border-r-[#6b6b6b] border-t-[#181818] border-l-[#181818]">
                                        <div className="flex flex-col gap-1">
                                            {navItems.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    to={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="group flex items-center gap-3 p-2 bg-[#2d2d2d] hover:bg-[#3d3d3d] transition-colors border-2 border-transparent hover:border-[#6b6b6b]/50"
                                                >
                                                    {/* Slot Icon */}
                                                    <div className="w-9 h-9 bg-[#2d2d2d] border-2 border-b-[#6b6b6b] border-r-[#6b6b6b] border-t-[#181818] border-l-[#181818] flex items-center justify-center shrink-0">
                                                        <item.icon className="w-5 h-5 text-[#e0e0e0] drop-shadow-md" />
                                                    </div>

                                                    {/* Item Name */}
                                                    <div className="flex flex-col flex-1">
                                                        <span className="text-sm font-bold text-[#e0e0e0] drop-shadow-[1px_1px_0_#1f1f1f]">
                                                            {item.name}
                                                        </span>
                                                        <span className="text-[10px] text-[#a0a0a0] font-medium opacity-80">
                                                            {item.desc}
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom Actions (Conditional) */}
                                    <div className="mt-auto">
                                        {/* Mock Auth State - In real app, this comes from context */}
                                        {true ? ( // Change to false to test logged out state
                                            <div className="flex items-center gap-3 p-2 bg-[#1e1e1e] border-2 border-b-[#6b6b6b] border-r-[#6b6b6b] border-t-[#181818] border-l-[#181818]">
                                                {/* Left: Face */}
                                                <div className="w-10 h-10 bg-[#3b3b3b] border-2 border-black flex items-center justify-center shrink-0">
                                                    <img
                                                        src="https://www.mc-heads.net/avatar/Steve"
                                                        alt="Face"
                                                        className="w-full h-full rendering-pixelated"
                                                    />
                                                </div>

                                                {/* Middle: Info */}
                                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                    <span className="text-sm font-bold text-[#e0e0e0] leading-none truncate font-minecraft">
                                                        Steve
                                                    </span>
                                                    <span className="text-[10px] text-[#a0a0a0] leading-tight truncate font-minecraft mt-1">
                                                        steve@minecraft.net
                                                    </span>
                                                </div>

                                                {/* Right: Edit Button */}
                                                <Link
                                                    to="/profile"
                                                    onClick={() => setIsOpen(false)}
                                                    className="w-8 h-8 flex items-center justify-center bg-[#3b3b3b] border-2 border-b-[#1f1f1f] border-r-[#1f1f1f] border-t-[#6b6b6b] border-l-[#6b6b6b] hover:bg-[#4b4b4b] active:border-t-[#1f1f1f] active:border-l-[#1f1f1f] active:border-b-[#6b6b6b] active:border-r-[#6b6b6b] group"
                                                    title="Profili Düzenle"
                                                >
                                                    <Settings className="w-4 h-4 text-[#e0e0e0] group-hover:rotate-90 transition-transform" />
                                                </Link>
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-2 gap-2">
                                                <Link
                                                    to="/login"
                                                    onClick={() => setIsOpen(false)}
                                                    className="flex items-center justify-center py-2 bg-[#3b3b3b] border-2 border-b-[#1f1f1f] border-r-[#1f1f1f] border-t-[#6b6b6b] border-l-[#6b6b6b] hover:bg-[#4b4b4b] active:border-t-[#1f1f1f] active:border-l-[#1f1f1f] active:border-b-[#6b6b6b] active:border-r-[#6b6b6b] text-[#e0e0e0] font-bold text-sm"
                                                >
                                                    Giriş Yap
                                                </Link>
                                                <Link
                                                    to="/register"
                                                    onClick={() => setIsOpen(false)}
                                                    className="flex items-center justify-center py-2 bg-[#3b3b3b] border-2 border-b-[#1f1f1f] border-r-[#1f1f1f] border-t-[#6b6b6b] border-l-[#6b6b6b] hover:bg-[#4b4b4b] active:border-t-[#1f1f1f] active:border-l-[#1f1f1f] active:border-b-[#6b6b6b] active:border-r-[#6b6b6b] text-[#e0e0e0] font-bold text-sm"
                                                >
                                                    Kayıt Ol
                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                </div>

                                {/* RIGHT: Character Preview Window */}
                                <div className="hidden md:flex col-span-6 h-full p-2 flex-col gap-2">
                                    <h3 className="text-lg font-bold text-[#e0e0e0] tracking-tight pl-1 select-none text-center drop-shadow-md">
                                        Karakter
                                    </h3>

                                    {/* The Black Box */}
                                    <div className="flex-1 bg-[#101010] border-2 border-b-[#6b6b6b] border-r-[#6b6b6b] border-t-[#1f1f1f] border-l-[#1f1f1f] relative flex items-end justify-center overflow-hidden">
                                        <div className="w-full h-full flex items-center justify-center relative z-10 p-4">
                                            <MinecraftSkinViewer width={200} height={350} />
                                        </div>
                                        <div className="absolute top-4 bg-[#000000]/50 px-3 py-1 rounded-sm border border-white/10 z-20">
                                            <span className="text-[#e0e0e0] text-xs font-bold font-mono">Steve?</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ) : (
                        // --- KAPALI İÇERİK (BUTON İKONU) ---
                        <motion.button
                            key="content-button"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            className="absolute inset-0 flex items-center justify-center text-[#e0e0e0]"
                        >
                            <Menu className="w-6 h-6" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
