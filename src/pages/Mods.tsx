import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Search, Download, Zap, Sparkles, Box, Hammer, Sword, Map } from "lucide-react"
import { Link } from "react-router"

// --- MOCK DATA (MOD PACKS) ---
const CATEGORIES = [
    { id: "all", label: "Tümü", icon: Box },
    { id: "rpg", label: "RPG & Macera", icon: Sword },
    { id: "tech", label: "Teknoloji", icon: Hammer },
    { id: "magic", label: "Büyü", icon: Sparkles },
    { id: "lite", label: "Hafif (Lite)", icon: Zap },
    { id: "explore", label: "Keşif", icon: Map },
]

const MODPACKS = [
    {
        id: "better-minecraft",
        title: "Better Minecraft",
        description: "Minecraft'ın olması gerektiği hali. Yeni biyomlar, moblar ve zindanlar.",
        downloads: "5M+",
        category: "rpg",
        iconColors: "bg-green-600 text-white"
    },
    {
        id: "rlcraft",
        title: "RLCraft",
        description: "Gerçekçi ve zorlayıcı bir hayatta kalma deneyimi. Ejderhalar içerir!",
        downloads: "10M+",
        category: "rpg",
        iconColors: "bg-red-800 text-white"
    },
    {
        id: "all-the-mods-9",
        title: "All The Mods 9",
        description: "Olabilecek neredeyse tüm modları içeren devasa bir teknoloji ve büyü paketi.",
        downloads: "2M+",
        category: "tech",
        iconColors: "bg-purple-700 text-white"
    },
    {
        id: "dawncraft",
        title: "DawnCraft",
        description: "Souls-like savaş mekanikleri ve hikaye odaklı bir macera.",
        downloads: "1.5M+",
        category: "rpg",
        iconColors: "bg-orange-600 text-white"
    },
    {
        id: "create-above",
        title: "Create: Above & Beyond",
        description: "Create modu odaklı, otomasyon ve uzay çağı teknolojileri.",
        downloads: "3M+",
        category: "tech",
        iconColors: "bg-blue-600 text-white"
    },
    {
        id: "fabulously-optimized",
        title: "Fabulously Optimized",
        description: "Vanilla deneyimini bozmadan FPS'i tavan yaptıran performans paketi.",
        downloads: "8M+",
        category: "lite",
        iconColors: "bg-yellow-500 text-black"
    },
    {
        id: "roguelike-adventures",
        title: "Roguelike A.D.",
        description: "Zindan keşfi ve loot odaklı roguelike deneyimi.",
        downloads: "4.5M+",
        category: "explore",
        iconColors: "bg-zinc-700 text-white"
    }
]

export function Mods() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    // Filter Logic
    const filteredPacks = MODPACKS.filter(pack => {
        const matchesCategory = selectedCategory === "all" || pack.category === selectedCategory
        const matchesSearch = pack.title.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="min-h-screen bg-[#202020] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pt-24 pb-12">

            {/* SEARCH BAR */}
            <div className="container mx-auto px-6 mb-8">
                <div className="flex items-center gap-4 bg-[#3b3b3b] p-2 border-[3px] border-[#151515] rounded-none shadow-sm">
                    <Search className="text-[#a0a0a0] w-6 h-6 ml-2" />
                    <Input
                        placeholder="Mod paketlerinde ara..."
                        className="bg-transparent border-none text-lg text-[#e0e0e0] placeholder:text-[#6b6b6b] focus-visible:ring-0 focus-visible:bg-transparent shadow-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-8">

                {/* --- LEFT SIDEBAR (CATEGORIES) --- */}
                <div className="w-full lg:w-64 shrink-0 space-y-2">
                    {CATEGORIES.map(cat => {
                        const isActive = selectedCategory === cat.id
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`
                                    w-full flex items-center gap-3 px-4 py-3 font-minecraft transition-all
                                    border-[3px] shadow-[inset_-2px_-4px_0px_rgba(0,0,0,0.3)]
                                    ${isActive
                                        ? 'bg-[#5555ff] border-[#0000aa] text-white shadow-[inset_2px_2px_0px_rgba(255,255,255,0.2)]'
                                        : 'bg-[#3b3b3b] border-[#151515] text-[#a0a0a0] hover:bg-[#4b4b4b]'
                                    }
                                `}
                            >
                                <cat.icon className="w-5 h-5" />
                                {cat.label}
                            </button>
                        )
                    })}
                </div>

                {/* --- RIGHT GRID (PACK CARDS) --- */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredPacks.map(pack => (
                            <Card key={pack.id} className="bg-[#2a2a2a] border-[#111111] hover:border-[#777] transition-colors group">
                                <CardContent className="p-4 flex flex-col h-full">

                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`w-12 h-12 shrink-0 border-2 border-black flex items-center justify-center shadow-inner font-bold text-lg ${pack.iconColors}`}>
                                            {pack.title.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="text-[#e0e0e0] font-bold font-minecraft leading-tight group-hover:text-[#ffff55] transition-colors">
                                                {pack.title}
                                            </h3>
                                            <p className="text-[#6b6b6b] text-xs font-minecraft mt-1 flex items-center gap-1">
                                                <Download className="w-3 h-3" /> {pack.downloads}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-[#a0a0a0] text-sm mb-6 line-clamp-2 leading-relaxed font-sans">
                                        {pack.description}
                                    </p>

                                    {/* Action */}
                                    <div className="mt-auto">
                                        <Button className="w-full h-8 text-xs bg-[#1a1a1a] hover:bg-[#252525] border-[#444] text-[#ffff55]" asChild>
                                            <Link to={`/mods/${pack.id}`}>Paketi İncele</Link>
                                        </Button>
                                    </div>

                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
