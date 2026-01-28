import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Link } from "react-router"
import { Box } from "lucide-react"

export function Login() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            {/* Minecraft Window Container */}
            <Card className="w-full max-w-md bg-[#c6c6c6] dark:bg-[#3b3b3b]">
                <CardHeader className="text-center pb-2">
                    {/* Icon or Logo at top of window */}
                    <div className="mx-auto w-12 h-12 bg-[#2d2d2d] border-2 border-b-[#6b6b6b] border-r-[#6b6b6b] border-t-[#181818] border-l-[#181818] flex items-center justify-center mb-4">
                        <Box className="w-6 h-6 text-[#e0e0e0]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#e0e0e0] drop-shadow-md">Giriş Yap</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">

                    {/* Microsoft Auth Button */}
                    <Button className="w-full h-12 bg-[#2d7d46] hover:bg-[#1f5c32] text-white border-[#1d4d2b] font-minecraft text-base">
                        <img
                            src="https://learn.microsoft.com/en-us/azure/active-directory/develop/media/howto-add-branding-in-azure-ad-apps/ms-symbollockup_mssymbol_19.png"
                            className="w-5 h-5 mr-3"
                            alt="Microsoft"
                        />
                        Microsoft ile Giriş Yap
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-[#6b6b6b]/30" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#3b3b3b] px-2 text-[#a0a0a0] font-bold">Veya Offline Giriş</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-[#a0a0a0] ml-1">KULLANICI ADI</label>
                            <Input type="text" placeholder="Steve" className="h-11" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-[#a0a0a0] ml-1">ŞİFRE (Opsiyonel)</label>
                            <Input type="password" placeholder="••••••••" className="h-11" />
                        </div>

                        <Button className="w-full h-12 text-base shadow-sm mt-2 bg-[#555] hover:bg-[#666] border-[#333]">
                            Giriş Yap
                        </Button>
                    </div>

                </CardContent>

                <CardFooter className="flex flex-col gap-4 text-center pb-6">
                    <div className="text-xs text-[#a0a0a0] font-bold">
                        Hesabın yok mu? <Link to="/register" className="text-[#e0e0e0] underline hover:text-[#55ff55]">Kayıt Ol</Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
