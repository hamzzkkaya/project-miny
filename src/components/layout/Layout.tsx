import { ThemeProvider } from "../ui/theme-provider"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { Outlet, useLocation } from "react-router"
import { AnimatePresence, motion } from "framer-motion"

export function Layout() {
    const location = useLocation()

    return (
        <ThemeProvider defaultTheme="dark" storageKey="miny-ui-theme">
            {/* 
                Main Background: #3b3b3b (Minecraft GUI Dark Grey)
                Text: #e0e0e0 (Minecraft White)
            */}
            <div className="relative min-h-screen flex flex-col bg-[#3b3b3b] text-[#e0e0e0] font-sans overflow-x-hidden selection:bg-[#505050] selection:text-white">
                <Navbar />

                {/* 
                    Page Transition: "GUI Window Open" Effect 
                    Subtle scale up and fade in.
                */}
                <AnimatePresence mode="wait">
                    <motion.main
                        key={location.pathname}
                        initial={{ opacity: 0, scale: 0.99, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.99, y: -5, transition: { duration: 0.1 } }}
                        transition={{
                            duration: 0.25,
                            ease: [0.22, 1, 0.36, 1] // Custom snappy easing
                        }}
                        className="flex-1 pt-[72px]" // Height of Navbar + padding
                    >
                        <Outlet />
                    </motion.main>
                </AnimatePresence>

                <Footer />
            </div>
        </ThemeProvider>
    )
}
