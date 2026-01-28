import { useParams, Link } from "react-router"
import { useState } from "react"
import { Button } from "../components/ui/button"
import { ArrowLeft, Download, Calendar, User, FileCode, Search, Image as ImageIcon } from "lucide-react"
import exampleImage from "../assets/mod_details/example.png"

// --- RICH MOCK DATA ---
interface PackDetail {
    title: string;
    description: string;
    longDescription: string[];
    features: string[];
    author: string;
    downloads: string;
    updated: string;
    version: string;
    mods: string[];
}

const PACK_DETAILS: Record<string, PackDetail> = {
    "better-minecraft": {
        title: "Better Minecraft",
        description: "Minecraft'ın olması gerektiği hali. Vanilla hissini bozmadan yüzlerce yenilik.",
        longDescription: [
            "Better Minecraft, oyunu tamamen değiştirmeden geliştirmeyi hedefleyen bir mod paketidir.",
            "Yeni biyomlar, zindanlar ve yaratıklar ile keşif hissini katlayın. Nether ve End boyutları tamamen yenilendi.",
            "Artık ejderha yumurtasını kuluçkaya yatırabilir ve kendi ejderhanıza binebilirsiniz!"
        ],
        features: ["Yenilenmiş Nether & End", "Ejderha Binekleri", "100+ Yeni Biyom", "Yeni Bosslar"],
        author: "LunaPixel",
        downloads: "5M+",
        updated: "1 Gün Önce",
        version: "v24.0",
        mods: ["Sodium", "Iris", "Biomes O' Plenty", "Alex's Mobs", "Create", "JEI", "JourneyMap", "Waystones", "Nature's Compass", "Jade"]
    },
    "rlcraft": {
        title: "RLCraft",
        description: "Gerçekçi ve acımasız. Minecraft'ın en zor mod paketi.",
        longDescription: [
            "Real Life Craft (RLCraft), hayatta kalmayı gerçekten zorlaştıran bir pakettir.",
            "Susuzluk, sıcaklık, gerçekçi iyileşme sistemi ve rastgele spawn noktaları ile her an ölebilirsiniz.",
            "Ejderhalarla savaşın, güçlü zırhlar yapın ve hayatta kalmaya çalışın."
        ],
        features: ["Susuzluk Barı", "Vücut Isısı Sistemi", "Rastgele Spawn", "Zorlu Bosslar"],
        author: "Shivaxi",
        downloads: "10M+",
        updated: "1 Hafta Önce",
        version: "v2.9.3",
        mods: ["Ice and Fire", "Tough As Nails", "First Aid", "Spartan Weaponry", "Lycanites Mobs", "JEI", "Antique Atlas"]
    },
    "all-the-mods-9": {
        title: "All The Mods 9",
        description: "Teknoloji, Büyü ve Keşif... Hepsi bir arada.",
        longDescription: [
            "ATM9, aklınıza gelebilecek neredeyse tüm büyük modları içeren devasa bir mutfak lavabosu paketidir.",
            "Mekanism ile fabrikalar kurun, Botanania ile doğanın gücünü kullanın veya Twilight Forest'ta kaybolun.",
            "End game görevleri ile ATM Star'ı yapmaya çalışın!"
        ],
        features: ["Mekanism & Create", "Botania & Ars Nouveau", "Ad Astra (Uzay)", "Binlerce Görev"],
        author: "ATM Team",
        downloads: "2M+",
        updated: "3 Gün Önce",
        version: "v0.2.1",
        mods: ["Mekanism", "Create", "Botania", "Ars Nouveau", "Applied Energistics 2", "Refined Storage", "Ad Astra", "Twilight Forest"]
    }
}

// Fallback for unknown IDs
const DEFAULT_PACK: PackDetail = {
    title: "Bilinmeyen Paket",
    description: "Bu paket hakkında detaylı bilgi bulunamadı.",
    longDescription: ["Veri tabanımızda bu paket için detaylı açıklama henüz girilmedi."],
    features: ["Standart Modlar"],
    author: "Bilinmiyor",
    downloads: "???",
    updated: "Bilinmiyor",
    version: "v1.0",
    mods: ["Sodium", "JEI"]
}

export function ModDetail() {
    const { modId } = useParams()
    const [activeTab, setActiveTab] = useState<'desc' | 'screens' | 'versions'>('desc')

    const pack = PACK_DETAILS[modId || ""] || DEFAULT_PACK

    return (
        <div className="min-h-screen bg-[#202020] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Back Button */}
                <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-brand-blue" asChild>
                    <Link to="/mods">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Paketlere Dön
                    </Link>
                </Button>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                    {/* Icon */}
                    <div className="w-32 h-32 bg-[#3b3b3b] border-[3px] border-[#000] flex items-center justify-center shadow-lg shrink-0">
                        <span className="font-bold text-4xl text-[#ffff55]">{pack.title.charAt(0)}</span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-4">
                        <h1 className="text-4xl font-bold font-minecraft text-[#e0e0e0] drop-shadow-md">
                            {pack.title}
                        </h1>
                        <p className="text-[#a0a0a0] text-lg leading-relaxed max-w-3xl">
                            {pack.description}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-[#808080] font-minecraft">
                            <div className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1 border border-[#333]">
                                <User className="w-4 h-4" />
                                <span>Yapımcı: <span className="text-[#e0e0e0]">{pack.author}</span></span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1 border border-[#333]">
                                <Download className="w-4 h-4" />
                                <span>{pack.downloads} İndirme</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1 border border-[#333]">
                                <Calendar className="w-4 h-4" />
                                <span>Güncelleme: {pack.updated}</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button size="lg" className="w-full md:w-auto px-12 text-lg shadow-lg">
                                <Download className="mr-2 h-5 w-5" />
                                Paketi Kur ({pack.version})
                            </Button>
                        </div>
                    </div>
                </div>

                {/* --- CONTENT AREA --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COL: Tabs & Main Content */}
                    <div className="lg:col-span-2 space-y-0">

                        {/* Tab Headers */}
                        <div className="flex gap-1 border-b-[3px] border-[#3b3b3b]">
                            <button
                                onClick={() => setActiveTab('desc')}
                                className={`px-6 py-3 font-bold border-t-[3px] border-x-[3px] relative top-[3px] transition-colors
                                ${activeTab === 'desc'
                                        ? 'bg-[#3b3b3b] text-[#e0e0e0] border-[#555] border-b-[#3b3b3b] z-10'
                                        : 'bg-[#202020] text-[#808080] border-transparent hover:bg-[#2a2a2a] hover:border-[#333]'
                                    }`}
                            >
                                Açıklama
                            </button>
                            <button
                                onClick={() => setActiveTab('screens')}
                                className={`px-6 py-3 font-bold border-t-[3px] border-x-[3px] relative top-[3px] transition-colors
                                ${activeTab === 'screens'
                                        ? 'bg-[#3b3b3b] text-[#e0e0e0] border-[#555] border-b-[#3b3b3b] z-10'
                                        : 'bg-[#202020] text-[#808080] border-transparent hover:bg-[#2a2a2a] hover:border-[#333]'
                                    }`}
                            >
                                Ekran Görüntüleri
                            </button>
                        </div>

                        {/* Tab Content Container */}
                        <div className="bg-[#252525] border-[3px] border-[#3b3b3b] p-8 text-[#a0a0a0] leading-7 font-sans min-h-[400px]">

                            {/* DESCRIPTION TAB */}
                            {activeTab === 'desc' && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <h3 className="text-2xl font-minecraft text-[#e0e0e0] mb-4">Paket Detayları</h3>
                                    {pack.longDescription.map((desc, i) => (
                                        <p key={i}>{desc}</p>
                                    ))}

                                    <h4 className="text-xl font-minecraft text-[#e0e0e0] mt-8 mb-4 flex items-center gap-2">
                                        <FileCode className="w-5 h-5 text-[#55ff55]" />
                                        Öne Çıkan Özellikler
                                    </h4>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        {pack.features.map((feat, i) => (
                                            <li key={i}>{feat}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* SCREENSHOTS TAB */}
                            {activeTab === 'screens' && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <h3 className="text-2xl font-minecraft text-[#e0e0e0] mb-4">Oyun İçi Görüntüler</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="aspect-video bg-[#1a1a1a] border-2 border-[#444] group overflow-hidden relative cursor-pointer hover:border-[#e0e0e0] transition-colors">
                                                <img
                                                    src={exampleImage}
                                                    alt={`Screenshot ${i}`}
                                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <ImageIcon className="text-white w-8 h-8" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-center text-[#666] mt-4">*Görüntüler temsilidir.</p>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* RIGHT COL: Mod List Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#1a1a1a] border-[3px] border-[#333] h-full flex flex-col sticky top-24 max-h-[calc(100vh-8rem)]">
                            {/* Header */}
                            <div className="p-4 border-b-2 border-[#333] bg-[#252525]">
                                <h3 className="font-minecraft text-[#e0e0e0] text-lg">Paket İçeriği</h3>
                                <p className="text-xs text-[#808080]">{pack.mods.length} Mod (Örnek)</p>
                            </div>

                            {/* Search Local */}
                            <div className="p-2 border-b-2 border-[#333]">
                                <div className="flex items-center gap-2 bg-[#111] border border-[#333] px-2 h-8">
                                    <Search className="w-3 h-3 text-[#666]" />
                                    <input
                                        type="text"
                                        placeholder="Mod ara..."
                                        className="bg-transparent border-none text-xs text-[#ccc] focus:outline-none w-full"
                                    />
                                </div>
                            </div>

                            {/* List */}
                            <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                                {pack.mods.map((modName, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-2 hover:bg-[#2a2a2a] group cursor-default transition-colors border border-transparent hover:border-[#444]">
                                        {/* Mod Icon Placeholder */}
                                        <div className="w-6 h-6 bg-[#333] border border-[#555] flex items-center justify-center text-[10px] text-[#888] font-bold shrink-0">
                                            {modName.charAt(0)}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm text-[#ccc] font-minecraft truncate group-hover:text-white">{modName}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="p-4 text-center text-xs text-[#666] italic">
                                    + {Math.floor(Math.random() * 100) + 50} diğer mod...
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
