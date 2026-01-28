import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Monitor, Apple, Terminal, Download as DownloadIcon, Check, Info } from "lucide-react"

export function Download() {
    return (
        <div className="min-h-screen bg-[#202020] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] py-24">
            <div className="container mx-auto px-6">

                {/* HERO SECTION */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-5xl font-bold font-minecraft text-[#e0e0e0] drop-shadow-[4px_4px_0_#000000]">
                        MinyLauncher İndir
                    </h1>
                    <p className="text-xl text-[#a0a0a0] font-sans max-w-2xl mx-auto">
                        Minecraft deneyiminizi bir üst seviyeye taşıyın. İşletim sisteminizi seçin ve maceraya başlayın.
                    </p>
                </div>

                {/* PLATFORM CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

                    {/* WINDOWS (Featured) */}
                    <Card className="border-[3px] border-[#ffff55] bg-[#3b3b3b] shadow-[0_0_20px_rgba(255,255,85,0.15)] transform md:-translate-y-4">
                        <CardHeader className="text-center pb-2">
                            <div className="mx-auto w-16 h-16 bg-[#252525] border-2 border-[#555] flex items-center justify-center mb-4 shadow-inner">
                                <Monitor className="w-8 h-8 text-[#55ff55]" />
                            </div>
                            <CardTitle className="text-[#ffff55] text-2xl">Windows</CardTitle>
                            <CardDescription className="text-[#a0a0a0]">Windows 10 & 11 (64-bit)</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <ul className="text-left space-y-2 text-[#cccccc] text-sm font-minecraft mb-6 px-4">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#55ff55]" /> Otomatik Güncelleme</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#55ff55]" /> .exe Kurulumu</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#55ff55]" /> Yüksek Performans</li>
                            </ul>
                        </CardContent>
                        <CardFooter className="justify-center pb-8">
                            <Button size="lg" className="w-full text-lg shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                                <DownloadIcon className="mr-2 h-5 w-5" />
                                İNDİR (v2.0)
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* MACOS */}
                    <Card className="bg-[#2a2a2a] border-[#555] opacity-90 hover:opacity-100 transition-opacity">
                        <CardHeader className="text-center pb-2">
                            <div className="mx-auto w-16 h-16 bg-[#1a1a1a] border-2 border-[#444] flex items-center justify-center mb-4">
                                <Apple className="w-8 h-8 text-[#e0e0e0]" />
                            </div>
                            <CardTitle className="text-[#e0e0e0]">macOS</CardTitle>
                            <CardDescription className="text-[#808080]">M1/M2 & Intel</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <p className="text-sm text-[#808080] px-4 py-8">
                                Henüz geliştirme aşamasında. Çok yakında dmg dosyası olarak sunulacak.
                            </p>
                        </CardContent>
                        <CardFooter className="justify-center pb-8">
                            <Button disabled variant="secondary" className="w-full opacity-50 cursor-not-allowed">
                                Çok Yakında
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* LINUX */}
                    <Card className="bg-[#2a2a2a] border-[#555] opacity-90 hover:opacity-100 transition-opacity">
                        <CardHeader className="text-center pb-2">
                            <div className="mx-auto w-16 h-16 bg-[#1a1a1a] border-2 border-[#444] flex items-center justify-center mb-4">
                                <Terminal className="w-8 h-8 text-[#ffaa00]" />
                            </div>
                            <CardTitle className="text-[#e0e0e0]">Linux</CardTitle>
                            <CardDescription className="text-[#808080]">Debian/Ubuntu/Arch</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <p className="text-sm text-[#808080] px-4 py-8">
                                .deb ve .AppImage paketleri hazırlanıyor.
                            </p>
                        </CardContent>
                        <CardFooter className="justify-center pb-8">
                            <Button disabled variant="secondary" className="w-full opacity-50 cursor-not-allowed">
                                Çok Yakında
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* SYSTEM REQUIREMENTS */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                        <Info className="w-8 h-8 text-[#5555ff]" />
                        <h3 className="text-2xl font-bold font-minecraft text-[#e0e0e0]">Sistem Gereksinimleri</h3>
                    </div>

                    <div className="bg-[#252525] border-[3px] border-[#555] p-1">
                        <div className="border-2 border-[#151515] bg-[#1a1a1a] p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Minimum */}
                            <div>
                                <h4 className="text-[#ff5555] font-bold font-minecraft mb-4 uppercase tracking-wider border-b border-[#333] pb-2">Minimum</h4>
                                <ul className="space-y-3 text-[#a0a0a0] text-sm">
                                    <li className="flex justify-between">
                                        <span>İşletim Sistemi:</span>
                                        <span className="text-[#e0e0e0]">Windows 10</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>İşlemci:</span>
                                        <span className="text-[#e0e0e0]">Intel Core i3 / AMD Ryzen 3</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>RAM:</span>
                                        <span className="text-[#e0e0e0]">4 GB</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Depolama:</span>
                                        <span className="text-[#e0e0e0]">1 GB HDD</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Recommended */}
                            <div>
                                <h4 className="text-[#55ff55] font-bold font-minecraft mb-4 uppercase tracking-wider border-b border-[#333] pb-2">Önerilen</h4>
                                <ul className="space-y-3 text-[#a0a0a0] text-sm">
                                    <li className="flex justify-between">
                                        <span>İşletim Sistemi:</span>
                                        <span className="text-[#e0e0e0]">Windows 10/11 (64-bit)</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>İşlemci:</span>
                                        <span className="text-[#e0e0e0]">Intel Core i5 / AMD Ryzen 5</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>RAM:</span>
                                        <span className="text-[#e0e0e0]">8 GB+</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Depolama:</span>
                                        <span className="text-[#e0e0e0]">SSD</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
