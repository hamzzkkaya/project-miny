import { Button } from "../components/ui/button"
import { Send, Feather } from "lucide-react"

export function Contact() {
    return (
        <div className="min-h-screen bg-[#202020] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pt-24 pb-12 flex items-center justify-center">

            {/* BOOK & QUILL CONTAINER */}
            <div className="relative w-full max-w-2xl bg-[#f4e4bc] border-[6px] border-[#5d4037] shadow-2xl p-8 md:p-12 min-h-[600px] flex flex-col">

                <div className="absolute top-[-20px] right-[-20px] bg-[#3e2723] p-3 rounded-full border-4 border-[#5d4037] shadow-lg">
                    <Feather className="w-8 h-8 text-white" />
                </div>

                <h1 className="text-4xl font-bold font-minecraft text-[#3e2723] text-center mb-2">
                    Bize Yazın
                </h1>
                <p className="text-center font-minecraft text-[#5d4037] mb-8 text-sm">
                    Bir sorun mu var? Tüy kalemi eline al ve yaz.
                </p>

                <form className="flex-1 flex flex-col gap-6 font-minecraft">

                    {/* Name Input */}
                    <div className="relative">
                        <label className="block text-[#3e2723] font-bold mb-1 ml-2">İsim:</label>
                        <input
                            type="text"
                            className="w-full bg-transparent border-b-2 border-[#8b5a2b] text-[#3e2723] px-2 py-1 focus:outline-none focus:border-[#3e2723] placeholder-[#8b5a2b]/50"
                            placeholder="Steve"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                        <label className="block text-[#3e2723] font-bold mb-1 ml-2">E-posta:</label>
                        <input
                            type="email"
                            className="w-full bg-transparent border-b-2 border-[#8b5a2b] text-[#3e2723] px-2 py-1 focus:outline-none focus:border-[#3e2723] placeholder-[#8b5a2b]/50" // Transparent line input
                            placeholder="steve@minecraft.net"
                        />
                    </div>

                    {/* Message Textarea */}
                    <div className="relative flex-1">
                        <label className="block text-[#3e2723] font-bold mb-1 ml-2">Mesajın:</label>
                        <textarea
                            className="w-full h-full min-h-[150px] bg-transparent border-2 border-[#8b5a2b] border-dashed text-[#3e2723] p-4 focus:outline-none focus:border-solid focus:border-[#3e2723] resize-none leading-loose"
                            placeholder="Buraya yaz..."
                        ></textarea>
                    </div>

                    <div className="flex justify-end mt-4">
                        <Button className="bg-[#3e2723] hover:bg-[#271511] text-[#f4e4bc] border-[#5d4037] font-minecraft rounded-none">
                            <Send className="w-4 h-4 mr-2" />
                            İmzala ve Gönder
                        </Button>
                    </div>

                </form>

            </div>
        </div>
    )
}
