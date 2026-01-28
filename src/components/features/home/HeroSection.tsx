import { motion } from "framer-motion"
import { Button } from "../../ui/button"
import { Download, ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { MinecraftSkinViewer } from "../../layout/navbar/MinecraftSkinViewer"

export function HeroSection() {
    return (
        // Dirt Background Texture or just Solid Dark GUI
        <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#3b3b3b] pt-20 pb-16 px-6">

            {/* Optional: Vignette for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 transition-all">

                {/* LEFT: Text Content */}
                <div className="flex flex-col items-start text-left space-y-8 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        // Minecraft Announcement Badge
                        className="flex items-center gap-2 bg-[#2d2d2d] border-2 border-b-[#6b6b6b] border-r-[#6b6b6b] border-t-[#181818] border-l-[#181818] px-4 py-2 text-sm font-bold text-[#ffff55] shadow-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            {/* Green online dot */}
                            <span className="relative inline-flex rounded-none h-2 w-2 bg-[#55ff55]"></span>
                        </span>
                        v2.0 Stabil Sürüm Yayında
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-[#e0e0e0] leading-[1.1] drop-shadow-[2px_2px_0_#000000] font-minecraft"
                    >
                        Minecraft İçin <br />
                        <span className="text-[#3b82f6] drop-shadow-[2px_2px_0_#1f1f1f]">Premium Deneyim</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xl text-lg md:text-xl text-[#a0a0a0] leading-relaxed font-normal"
                    >
                        MinyLauncher, performans odaklı mimarisi ve modern arayüzü ile oyun deneyiminizi yeniden tanımlıyor. Açık kaynak, güvenli ve tamamen ücretsiz.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        {/* Primary Button */}
                        <Button size="lg" className="h-14 w-full sm:w-auto px-8 text-lg font-bold shadow-lg" asChild>
                            <Link to="/download">
                                <Download className="mr-2 h-5 w-5" />
                                OYNA (İNDİR)
                            </Link>
                        </Button>

                        <Button size="lg" variant="secondary" className="h-14 w-full sm:w-auto px-8 text-lg font-bold" asChild>
                            <Link to="/mods">
                                Modları İncele
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* RIGHT: 3D Character (Steve) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex lg:flex items-center justify-center relative order-1 lg:order-2 min-h-[400px]"
                >
                    {/* Character Glow/Aura for emphasis */}
                    <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10 w-full h-[500px] flex items-center justify-center pointer-events-none">
                        {/* Using explicit pixel sizes matching the container roughly */}
                        <MinecraftSkinViewer
                            width={400}
                            height={600}
                            interactive={false}
                            pose="walking"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
