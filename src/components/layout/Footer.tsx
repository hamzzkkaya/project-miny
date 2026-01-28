import { Link } from "react-router"

export function Footer() {
    return (
        // Minecraft GUI Footer
        // Bg: #3b3b3b (Dark), Border Top: #6b6b6b (Light Highlight) -> Actually footers often look like the bottom of a window
        // Let's use standard Solid Dark + Top Bevel
        <footer className="w-full bg-[#3b3b3b] pt-8 pb-8 border-t-[3px] border-t-[#6b6b6b] shadow-[0_-4px_0_#1f1f1f]">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-sm font-bold text-[#a0a0a0] drop-shadow-sm">
                    © 2026 MinyLauncher. Tüm hakları saklıdır.
                </p>
                <div className="flex items-center gap-6">
                    <Link to="/privacy" className="text-sm font-bold text-[#e0e0e0] hover:text-[#55ff55] hover:underline decoration-2 underline-offset-4 transition-colors">Gizlilik</Link>
                    <Link to="/terms" className="text-sm font-bold text-[#e0e0e0] hover:text-[#55ff55] hover:underline decoration-2 underline-offset-4 transition-colors">Şartlar</Link>
                    <Link to="/contact" className="text-sm font-bold text-[#e0e0e0] hover:text-[#55ff55] hover:underline decoration-2 underline-offset-4 transition-colors">İletişim</Link>
                </div>
            </div>
        </footer>
    )
}
