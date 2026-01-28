import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Code, Cpu, Globe, Heart, Shield, Terminal, Users } from "lucide-react"
import { motion } from "framer-motion"

const TEAM = [
    { name: "WolfK", role: "Kurucu & Lead Developer", color: "bg-red-600" },
    { name: "Miny", role: "UI/UX & Konsept", color: "bg-blue-600" },
    { name: "Steve", role: "Topluluk Yöneticisi", color: "bg-green-600" },
]

const TECH_STACK = [
    { label: "React", icon: Code },
    { label: "Rust", icon: Terminal },
    { label: "Tauri", icon: Shield },
    { label: "Tailwind", icon: Globe },
]

export function About() {
    return (
        <div className="min-h-screen bg-[#202020] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pt-24 pb-12">

            <div className="container mx-auto px-6 max-w-6xl space-y-16">

                {/* --- HERO / MISSION --- */}
                <div className="text-center space-y-6">
                    <h1 className="text-5xl font-bold font-minecraft text-[#e0e0e0] drop-shadow-[4px_4px_0_#000000]">
                        Hikayemiz
                    </h1>
                    <div className="max-w-3xl mx-auto bg-[#f4e4bc] border-[4px] border-[#8b5a2b] p-8 rounded-none shadow-xl transform rotate-1">
                        <p className="font-minecraft text-[#5c4033] text-lg leading-relaxed">
                            "MinyLauncher, sadece bir başlatıcı değil; Minecraft topluluğu için bir özgürlük hareketidir.
                            Performansı kısıtlayan, karmaşık ve hantal yazılımlardan sıkıldık.
                            Amacımız, her oyuncunun tek tıkla en iyi mod paketlerine erişebilmesi ve oyununu özgürce yönetebilmesidir."
                        </p>
                        <div className="mt-4 flex justify-end">
                            <span className="font-minecraft text-[#8b5a2b] text-sm">- Kurucunun Notu</span>
                        </div>
                    </div>
                </div>

                {/* --- TEAM SECTION --- */}
                <div>
                    <h2 className="text-3xl font-bold font-minecraft text-[#e0e0e0] mb-8 text-center flex items-center justify-center gap-3">
                        <Users className="w-8 h-8 text-[#55ff55]" />
                        Geliştirici Ekip
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TEAM.map((member, i) => (
                            <motion.div
                                key={member.name}
                                whileHover={{ y: -10 }}
                                className="bg-[#2a2a2a] border-[3px] border-[#111] p-6 text-center group cursor-pointer hover:border-[#777] transition-all"
                            >
                                <div className={`w-24 h-24 mx-auto mb-6 ${member.color} border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,0.5)] flex items-center justify-center`}>
                                    <span className="font-minecraft text-4xl text-white font-bold">
                                        {member.name.charAt(0)}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-minecraft text-[#e0e0e0] mb-2">{member.name}</h3>
                                <p className="text-[#a0a0a0] font-sans">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- TECH STACK --- */}
                <div>
                    <h2 className="text-3xl font-bold font-minecraft text-[#e0e0e0] mb-8 text-center flex items-center justify-center gap-3">
                        <Cpu className="w-8 h-8 text-[#55ffff]" />
                        Güç Kaynağı
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {TECH_STACK.map(tech => (
                            <Card key={tech.label} className="bg-[#1a1a1a] border-[#333] hover:bg-[#252525] transition-colors">
                                <CardContent className="p-4 flex flex-col items-center gap-3">
                                    <tech.icon className="w-8 h-8 text-[#a0a0a0]" />
                                    <span className="text-[#e0e0e0] font-bold font-minecraft">{tech.label}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* --- FOOTER / LICENSE --- */}
                <div className="text-center pt-8 border-t border-[#333]">
                    <div className="inline-flex items-center gap-2 text-[#666] mb-4">
                        <Heart className="w-4 h-4 text-red-900" />
                        <span>Developed with passion in Turkey</span>
                    </div>
                    <p className="text-xs text-[#444] font-mono">
                        MinyLauncher is open source software licensed under MIT License. NOT AN OFFICIAL MINECRAFT PRODUCT.
                    </p>
                </div>

            </div>
        </div>
    )
}
