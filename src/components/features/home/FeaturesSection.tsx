import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Zap, Shield, Globe, Box, Check, Cpu, Lock, EyeOff, User,
    Gauge, Layers, Sliders, Wifi, CloudLightning, Image, Palette,
    FileCode, Server
} from "lucide-react"
import { cn } from "../../../utils/cn"

// --- TYPE DEFINITIONS ---
type FeatureNode = {
    id: string
    icon: any
    title: string
    description: string
    color: string
    children?: FeatureNode[]
}

// --- DATA STRUCTURE (Expanded & Uneven) ---
const TREE_DATA: FeatureNode = {
    id: "root",
    icon: Box,
    title: "MinyLauncher",
    description: "Serüven Başlıyor",
    color: "#e0e0e0",
    children: [
        {
            id: "perf",
            icon: Zap,
            title: "Performans",
            description: "Hız ve stabilite optimizasyonları.",
            color: "#ffff55",
            children: [
                {
                    id: "fps",
                    icon: Gauge,
                    title: "FPS Boost",
                    description: "Render optimizasyonu ile +%40 FPS.",
                    color: "#55ff55"
                },
                {
                    id: "net",
                    icon: Wifi,
                    title: "Ağ",
                    description: "Düşük ping ve hızlı bağlantı.",
                    color: "#55ff55",
                    children: [
                        { id: "cdn", icon: CloudLightning, title: "Turbo İndirme", description: "Dosyaları ışık hızında indir.", color: "#00aaaa" }
                    ]
                },
                {
                    id: "ram",
                    icon: Cpu,
                    title: "Akıllı RAM",
                    description: "Bellek sızıntılarını önler.",
                    color: "#55ff55"
                }
            ]
        },
        {
            id: "sec",
            icon: Shield,
            title: "Güvenlik",
            description: "Hesabınızı koruyun.",
            color: "#5555ff",
            children: [
                {
                    id: "auth",
                    icon: Lock,
                    title: "Güvenli Giriş",
                    description: "Microsoft hesabınız güvende.",
                    color: "#aa00aa"
                },
                {
                    id: "priv",
                    icon: EyeOff,
                    title: "Gizlilik",
                    description: "Log tutmayan mimari.",
                    color: "#aa00aa"
                }
            ]
        },
        {
            id: "content",
            icon: Layers,
            title: "İçerik",
            description: "Özelleştirilebilir dünya.",
            color: "#ff5555",
            children: [
                {
                    id: "vis",
                    icon: Palette,
                    title: "Görünüm",
                    description: "Karakterinizi yansıtın.",
                    color: "#ffaa00",
                    children: [
                        { id: "skins", icon: User, title: "Skinler", description: "Sınırsız skin değiştirme.", color: "#ffaa00" },
                        { id: "capes", icon: Image, title: "Pelerinler", description: "HD Pelerin desteği.", color: "#ffaa00" },
                        { id: "hd", icon: Sliders, title: "HD Dokular", description: "Yüksek çözünürlük desteği.", color: "#ffaa00" }
                    ]
                },
                {
                    id: "mods",
                    icon: Globe,
                    title: "Modlar",
                    description: "Tek tıkla mod kurulumu.",
                    color: "#ffaa00"
                },
                {
                    id: "serv",
                    icon: Server,
                    title: "Sunucular",
                    description: "Favori sunucularınız.",
                    color: "#ffaa00"
                }
            ]
        }
    ]
}

export function FeaturesSection() {
    return (
        <section className="py-24 bg-[#202020] border-y border-[#111111] overflow-hidden select-none relative">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pointer-events-none min-w-[1200px]" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold font-minecraft text-[#e0e0e0] drop-shadow-[2px_2px_0_#000000] mb-2">
                        Gelişim Ağacı
                    </h2>
                    <p className="text-[#808080] font-minecraft text-sm">
                        Keşfetmek için fareyi ikonların üzerine getirin.
                    </p>
                </div>

                {/* --- TREE VISUALIZATION --- */}
                <div className="w-full overflow-x-auto overflow-y-visible pb-24 custom-scrollbar flex justify-center">
                    {/* Centered Scroll Wrapper */}
                    <div className="min-w-max flex items-center justify-center py-4 pl-10 pr-10">
                        <TreeNode
                            node={TREE_DATA}
                            isRoot={true}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

// --- RECURSIVE NODE COMPONENT ---
function TreeNode({
    node,
    isRoot = false
}: {
    node: FeatureNode,
    isRoot?: boolean
}) {
    // Local Hover State for Tooltip
    const [isHovered, setIsHovered] = useState(false)
    const hasChildren = node.children && node.children.length > 0

    // Gaps and Dimensions - Compacted
    const GAP_SIZE = 64
    const HALF_GAP = GAP_SIZE / 2

    return (
        <div className="flex items-center">

            {/* 1. THE NODE ITSELF */}
            <motion.div
                className="relative group flex-shrink-0"
                style={{
                    // Add gap if children exist
                    marginRight: hasChildren ? GAP_SIZE : 0,
                    // Dynamic Z-Index: If hovered, bring this node AND its tooltip to extreme front
                    zIndex: isHovered ? 100 : 20
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
            >
                {/* Frame */}
                <div
                    className={cn(
                        "w-12 h-12 bg-[#3b3b3b] border-[3px] transition-all duration-200 relative",
                        isHovered
                            ? "border-[#ffff55] bg-[#4b4b4b] shadow-[0_0_20px_rgba(255,255,85,0.3)]"
                            : "border-[#6b6b6b] bg-[#3b3b3b] shadow-sm"
                    )}
                >
                    <div className="w-full h-full border-2 border-[#151515] flex items-center justify-center relative bg-[#3b3b3b]">
                        <node.icon
                            strokeWidth={2}
                            className={cn(
                                "w-6 h-6 transition-colors duration-200",
                                isHovered ? "text-[#ffff55]" : "text-[#808080]"
                            )}
                        />
                    </div>
                </div>

                {/* --- FLOATING TOOLTIP (MINECRAFT STYLE) --- */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, x: 10, scale: 0.95 }}
                            animate={{ opacity: 1, x: 16, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.1 } }}
                            transition={{ duration: 0.05 }} // Snappy appearing
                            // Positioning: To the right of the icon box
                            className="absolute left-full top-0 w-max z-[200] pointer-events-none"
                            style={{ top: "0px" }}
                        >
                            <div className="flex flex-col bg-[#100010]/95 border-2 border-[#5000ff] rounded-sm p-2 shadow-[4px_4px_0_rgba(0,0,0,0.5)] min-w-[200px] max-w-[300px]">
                                <h4 className="text-[#ffff55] font-minecraft text-lg drop-shadow-md leading-tight mb-1">
                                    {node.title}
                                </h4>
                                <p className="text-[#55ff55] font-minecraft text-sm leading-snug drop-shadow-sm">
                                    {node.description}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Parent Connector (Line to the Right) */}
                {hasChildren && (
                    <div
                        className="absolute top-1/2 h-[4px] bg-[#111111] -translate-y-1/2 z-0"
                        style={{
                            left: "100%",
                            width: `${HALF_GAP + 2}px`
                        }}
                    >
                        <div className="w-full h-[2px] bg-[#333333] opacity-30" />
                    </div>
                )}

            </motion.div>

            {/* 2. THE CHILDREN (RECURSIVE) */}
            {hasChildren && (
                <div className="flex flex-col justify-center relative">

                    {node.children!.map((child, index) => {
                        const isFirst = index === 0
                        const isLast = index === node.children!.length - 1

                        return (
                            <div key={child.id} className="relative flex items-center">

                                {/* Padding for specific branch height (Compacted) */}
                                <div className="py-2">
                                    <TreeNode
                                        node={child}
                                    />
                                </div>

                                {/* CONNECTOR LOGIC */}
                                {/* 1. Horizontal Line (Spine to Child) */}
                                <div
                                    className="absolute h-[4px] bg-[#111111] top-1/2 -translate-y-1/2 -z-10"
                                    style={{
                                        left: `-${HALF_GAP}px`, // Start at spine
                                        width: `${HALF_GAP}px`   // Reach child
                                    }}
                                >
                                    <div className="w-full h-[2px] bg-[#333333] opacity-30" />
                                </div>

                                {/* 2. Vertical Spine Segments */}

                                {/* Upward connection (if not first) */}
                                {!isFirst && (
                                    <div
                                        className="absolute top-0 h-1/2 w-[4px] bg-[#111111] -translate-x-1/2 -z-10"
                                        style={{ left: `-${HALF_GAP}px` }}
                                    >
                                        <div className="w-[2px] h-full bg-[#333333] opacity-30 mx-auto" />
                                    </div>
                                )}

                                {/* Downward connection (if not last) */}
                                {!isLast && (
                                    <div
                                        className="absolute top-1/2 h-1/2 w-[4px] bg-[#111111] -translate-x-1/2 -z-10"
                                        style={{ left: `-${HALF_GAP}px` }}
                                    >
                                        <div className="w-[2px] h-full bg-[#333333] opacity-30 mx-auto" />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
