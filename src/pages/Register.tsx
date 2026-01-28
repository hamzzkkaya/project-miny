import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Link } from "react-router"
import { UserPlus, ShieldAlert, Cpu } from "lucide-react"

export function Register() {
    const [accountType, setAccountType] = useState<'microsoft' | 'offline'>('microsoft')

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            {/* Minecraft Window Container */}
            <Card className="w-full max-w-md bg-[#c6c6c6] dark:bg-[#3b3b3b]">
                <CardHeader className="text-center pb-2">
                    <div className="mx-auto w-12 h-12 bg-[#2d2d2d] border-2 border-b-[#6b6b6b] border-r-[#6b6b6b] border-t-[#181818] border-l-[#181818] flex items-center justify-center mb-4">
                        <UserPlus className="w-6 h-6 text-[#e0e0e0]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#e0e0e0] drop-shadow-md">Kayıt Ol</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">

                    {/* Toggle Switch */}
                    <div className="flex p-1 bg-[#1a1a1a] border border-[#555]">
                        <button
                            onClick={() => setAccountType('microsoft')}
                            className={`flex-1 py-2 text-sm font-bold font-minecraft transition-all border ${accountType === 'microsoft'
                                    ? 'bg-[#2d7d46] text-white border-[#1d4d2b]'
                                    : 'bg-transparent text-[#666] border-transparent hover:text-[#aaa]'
                                }`}
                        >
                            Microsoft
                        </button>
                        <button
                            onClick={() => setAccountType('offline')}
                            className={`flex-1 py-2 text-sm font-bold font-minecraft transition-all border ${accountType === 'offline'
                                    ? 'bg-[#a0a0a0] text-[#1f1f1f] border-[#6b6b6b]'
                                    : 'bg-transparent text-[#666] border-transparent hover:text-[#aaa]'
                                }`}
                        >
                            Offline
                        </button>
                    </div>

                    {/* MICROSOFT FORM */}
                    {accountType === 'microsoft' && (
                        <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                            <div className="bg-[#2d7d46]/20 border border-[#2d7d46] p-4 text-[#2d7d46] text-sm text-center font-bold">
                                <p>Premium özelliklere ve sunuculara erişmek için önerilir.</p>
                            </div>
                            <Button className="w-full h-12 bg-[#2d7d46] hover:bg-[#1f5c32] text-white border-[#1d4d2b] font-minecraft text-base">
                                <img
                                    src="https://learn.microsoft.com/en-us/azure/active-directory/develop/media/howto-add-branding-in-azure-ad-apps/ms-symbollockup_mssymbol_19.png"
                                    className="w-5 h-5 mr-3"
                                    alt="Microsoft"
                                />
                                Microsoft ile Devam Et
                            </Button>
                        </div>
                    )}

                    {/* OFFLINE FORM */}
                    {accountType === 'offline' && (
                        <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                            <div className="bg-[#b44]/20 border border-[#b44] p-4 text-[#b44] text-sm flex gap-3 text-left">
                                <ShieldAlert className="w-5 h-5 shrink-0" />
                                <p>Offline hesaplar skin göremez ve premium sunuculara giremez.</p>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-[#a0a0a0] ml-1">KULLANICI ADI</label>
                                <Input type="text" placeholder="Steve" className="h-11" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-[#a0a0a0] ml-1">ŞİFRE</label>
                                    <Input type="password" placeholder="••••••••" className="h-11" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-[#a0a0a0] ml-1">TEKRAR</label>
                                    <Input type="password" placeholder="••••••••" className="h-11" />
                                </div>
                            </div>

                            <Button className="w-full h-12 text-base shadow-sm mt-2 bg-[#555] hover:bg-[#666] border-[#333]">
                                <Cpu className="w-4 h-4 mr-2" />
                                Yerel Hesap Oluştur
                            </Button>
                        </div>
                    )}

                </CardContent>

                <CardFooter className="flex flex-col gap-4 text-center pb-6">
                    <div className="text-xs text-[#a0a0a0] font-bold">
                        Zaten hesabın var mı? <Link to="/login" className="text-[#e0e0e0] underline hover:text-[#55ff55]">Giriş Yap</Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
