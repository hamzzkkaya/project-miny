import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { MinecraftSkinViewer } from "../components/layout/navbar/MinecraftSkinViewer"
import { Save, LogOut, Shield, Mail, User, Clock, Calendar, LayoutDashboard, Shirt, Link as LinkIcon, Settings as SettingsIcon, Play } from "lucide-react"
import { Card } from "../components/ui/card"

export function Profile() {
    const [activeTab, setActiveTab] = useState("overview")

    return (
        <div className="min-h-screen bg-[#151515] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pt-24 pb-12 px-6 flex justify-center items-start">

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* --- SIDEBAR NAV --- */}
                <div className="md:col-span-1 space-y-4">

                    {/* User Mini Card */}
                    <div className="bg-[#2a2a2a] border-[3px] border-[#444] p-4 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-[#111] border-2 border-[#fff] mb-3 overflow-hidden">
                            <img src="https://www.mc-heads.net/avatar/Steve" alt="Avatar" className="w-full h-full rendering-pixelated" />
                        </div>
                        <h2 className="text-[#e0e0e0] font-minecraft font-bold text-lg">Steve</h2>
                        <span className="text-[#555] font-minecraft text-xs">Elmas Üye</span>
                    </div>

                    {/* Nav Menu */}
                    <nav className="flex flex-col gap-2">
                        {[
                            { id: "overview", label: "Genel Bakış", icon: LayoutDashboard },
                            { id: "skins", label: "Görünüm & Pelerin", icon: Shirt },
                            { id: "connections", label: "Bağlantılar", icon: LinkIcon },
                            { id: "settings", label: "Hesap Ayarları", icon: SettingsIcon },
                        ].map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center gap-3 p-3 font-minecraft text-sm transition-all border-l-4 ${activeTab === item.id
                                        ? "bg-[#333] border-[#ffff55] text-[#ffff55]"
                                        : "bg-[#2a2a2a] border-transparent text-[#aaa] hover:bg-[#333]"
                                    }`}
                            >
                                <item.icon className="w-4 h-4" />
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Logout */}
                    <Button variant="ghost" className="w-full justify-start text-[#ff5555] hover:bg-[#ff5555]/10 hover:text-[#ff5555] font-minecraft gap-3 pl-3">
                        <LogOut className="w-4 h-4" />
                        Çıkış Yap
                    </Button>
                </div>

                {/* --- CONTENT AREA --- */}
                <div className="md:col-span-3 bg-[#2a2a2a]/90 backdrop-blur-md border-[3px] border-[#444] min-h-[600px] p-8 relative overflow-hidden">

                    {/* Tech Decor */}
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <SettingsIcon className="w-64 h-64 text-white" />
                    </div>

                    {/* TAB: OVERVIEW */}
                    {activeTab === "overview" && (
                        <div className="space-y-8 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div>
                                <h1 className="text-3xl font-minecraft text-white mb-2">Hoşgeldin, Steve!</h1>
                                <p className="text-[#aaa]">Macera seni bekliyor. İşte istatistiklerin.</p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-4">
                                <Card className="bg-[#1f1f1f] border-[#333] p-4">
                                    <div className="text-[#55ff55] font-minecraft text-2xl font-bold mb-1">24</div>
                                    <div className="text-[#666] text-xs uppercase tracking-wider">Seviye</div>
                                </Card>
                                <Card className="bg-[#1f1f1f] border-[#333] p-4">
                                    <div className="text-[#ffff55] font-minecraft text-2xl font-bold mb-1">142s</div>
                                    <div className="text-[#666] text-xs uppercase tracking-wider">Oyun Süresi</div>
                                </Card>
                                <Card className="bg-[#1f1f1f] border-[#333] p-4">
                                    <div className="text-[#55ffff] font-minecraft text-2xl font-bold mb-1">12</div>
                                    <div className="text-[#666] text-xs uppercase tracking-wider">Mod Paketi</div>
                                </Card>
                            </div>

                            {/* Recent Activity */}
                            <div>
                                <h3 className="text-[#e0e0e0] font-minecraft mb-4 flex items-center gap-2">
                                    <Clock className="w-4 h-4" /> Son Oynanan
                                </h3>
                                <div className="bg-[#1a1a1a] border border-[#333] p-4 flex items-center justify-between group hover:border-[#ffff55] transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-900 border border-green-700 flex items-center justify-center font-bold text-white">B</div>
                                        <div>
                                            <h4 className="text-white font-minecraft">Better Minecraft</h4>
                                            <span className="text-[#666] text-xs">Son oynama: 2 saat önce</span>
                                        </div>
                                    </div>
                                    <Button size="icon" className="bg-[#ffff55] text-black hover:bg-[#eebb00] rounded-none">
                                        <Play className="w-5 h-5 fill-current" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB: SKINS */}
                    {activeTab === "skins" && (
                        <div className="h-full flex gap-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="w-1/2 flex items-center justify-center bg-[#111] border border-[#333]">
                                <MinecraftSkinViewer width={200} height={350} />
                            </div>
                            <div className="flex-1 space-y-4">
                                <h3 className="text-[#e0e0e0] font-minecraft text-xl border-b border-[#333] pb-2">Gardırop</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    {["Steve", "Alex", "Ari", "Sunny", "Zuri", "Efe"].map(skin => (
                                        <div key={skin} className="aspect-square bg-[#1f1f1f] border border-[#333] hover:border-[#ffff55] cursor-pointer p-2 flex flex-col items-center justify-center gap-2">
                                            <img src={`https://www.mc-heads.net/head/${skin}`} className="w-8 h-8 rendering-pixelated" />
                                            <span className="text-[10px] text-[#aaa]">{skin}</span>
                                        </div>
                                    ))}
                                    <div className="aspect-square border-2 border-dashed border-[#444] flex items-center justify-center text-[#444] text-xs text-center cursor-pointer hover:border-[#666] hover:text-[#666]">
                                        + Yükle
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB: SETTINGS */}
                    {activeTab === "settings" && (
                        <div className="space-y-6 max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <h3 className="text-[#e0e0e0] font-minecraft text-xl border-b border-[#333] pb-2">Hesap Bilgileri</h3>

                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-[#888] text-xs uppercase font-bold">Kullanıcı Adı</label>
                                    <Input defaultValue="Steve" className="bg-[#1a1a1a] border-[#333] text-white font-minecraft h-12" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[#888] text-xs uppercase font-bold">E-Posta</label>
                                    <Input defaultValue="steve@minecraft.net" className="bg-[#1a1a1a] border-[#333] text-white font-minecraft h-12" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[#888] text-xs uppercase font-bold">Şifre</label>
                                    <Input type="password" placeholder="••••••" className="bg-[#1a1a1a] border-[#333] text-white font-minecraft h-12" />
                                </div>
                            </div>

                            <Button className="w-full bg-[#ffff55] text-black hover:bg-[#eebb00] font-minecraft font-bold h-12 rounded-none">
                                <Save className="mr-2 w-4 h-4" />
                                Değişiklikleri Kaydet
                            </Button>
                        </div>
                    )}

                    {/* TAB: CONNECTIONS */}
                    {activeTab === "connections" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <h3 className="text-[#e0e0e0] font-minecraft text-xl border-b border-[#333] pb-2">Bağlantılar</h3>

                            <div className="space-y-4">
                                <div className="bg-[#1f1f1f] p-4 border border-[#333] flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#5865F2] flex items-center justify-center text-white font-bold rounded">D</div>
                                        <div>
                                            <h4 className="text-white font-bold">Discord</h4>
                                            <p className="text-[#666] text-xs">Bağlı değil</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="border-[#444] text-[#ccc] hover:bg-[#333]">Bağla</Button>
                                </div>

                                <div className="bg-[#1f1f1f] p-4 border border-[#333] flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#9146FF] flex items-center justify-center text-white font-bold rounded">T</div>
                                        <div>
                                            <h4 className="text-white font-bold">Twitch</h4>
                                            <p className="text-[#666] text-xs">Steve_Streamer</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="border-red-900 text-red-500 hover:bg-red-900/20 hover:text-red-400">Kopar</Button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </div>
    )
}
