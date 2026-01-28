import { Button } from "../../ui/button"
import { MinecraftSkinViewer } from "../../layout/navbar/MinecraftSkinViewer"
import { motion } from "framer-motion"

export function CommunitySection() {
    return (
        <section className="relative border-y border-[#1f1f1f] bg-[#2a2a2a] overflow-hidden py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Steve Crowd */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full flex items-center justify-center lg:justify-start"
                    >
                        {/* Background Glow */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

                        {/* Crowd Container - Using relative positioning offsets to create a group */}

                        {/* Steve 1 (Back Left) */}
                        <div className="absolute left-[0px] top-[20px] opacity-80 z-10 scale-90 blur-[1px]">
                            <MinecraftSkinViewer width={250} height={350} interactive={false} pose="walking" rotationy={-0.5} />
                        </div>

                        {/* Steve 2 (Back Right) */}
                        <div className="absolute left-[200px] top-[20px] opacity-80 z-10 scale-90 blur-[1px]">
                            <MinecraftSkinViewer width={250} height={350} interactive={false} pose="walking" rotationy={0.8} />
                        </div>

                        {/* Steve 3 (Front Center-Left) */}
                        <div className="absolute left-[50px] top-[50px] z-20">
                            <MinecraftSkinViewer width={300} height={400} interactive={false} pose="walking" rotationy={0.2} />
                        </div>

                        {/* Steve 4 (Front Center-Right) */}
                        <div className="absolute left-[150px] top-[60px] z-30">
                            <MinecraftSkinViewer width={300} height={400} interactive={false} pose="walking" rotationy={-0.3} />
                        </div>

                    </motion.div>

                    {/* RIGHT: Text Content */}
                    <div className="text-left space-y-6 relative z-40">
                        <h2 className="text-4xl font-bold font-minecraft text-[#e0e0e0] drop-shadow-[2px_2px_0_#000000]">
                            Büyük Bir <span className="text-[#55ff55]">Aile</span> Oluyoruz
                        </h2>

                        <p className="text-[#a0a0a0] text-lg leading-relaxed max-w-xl">
                            Her gün binlerce oyuncu MinyLauncher ile Minecraft evrenini keşfediyor.
                            Discord sunucumuzda yeni arkadaşlar edinebilir, mod paketleri hakkında yardım alabilir
                            ve kendi sunucunu tanıtabilirsin.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button variant="default" size="lg" className="border-[3px] shadow-[4px_4px_0_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-none transition-all">
                                Discord'a Katıl
                            </Button>

                            <Button variant="secondary" size="lg" className="border-[3px] bg-[#3b3b3b] text-[#e0e0e0] hover:bg-[#4b4b4b] border-[#555] shadow-[4px_4px_0_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-none transition-all">
                                İstatistikler
                            </Button>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t-2 border-[#333] mt-8">
                            <div>
                                <h4 className="text-2xl font-bold text-[#e0e0e0] font-minecraft">50K+</h4>
                                <p className="text-xs text-[#808080] font-bold uppercase tracking-widest">Oyuncu</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-[#e0e0e0] font-minecraft">99.9%</h4>
                                <p className="text-xs text-[#808080] font-bold uppercase tracking-widest">Uptime</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-[#e0e0e0] font-minecraft">7/24</h4>
                                <p className="text-xs text-[#808080] font-bold uppercase tracking-widest">Destek</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
