export function Terms() {
    return (
        <div className="min-h-screen bg-[#202020] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pt-24 pb-12 flex items-center justify-center">

            {/* BOOK CONTAINER */}
            <div className="relative w-full max-w-3xl bg-[#f4e4bc] border-[6px] border-[#5d4037] shadow-2xl p-8 md:p-12 min-h-[600px] flex flex-col md:-rotate-1">

                {/* Binding Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#4e342e] border-r border-[#3e2723]"></div>

                <h1 className="text-4xl font-bold font-minecraft text-[#3e2723] text-center mb-8 border-b-2 border-[#3e2723] pb-4">
                    Kullanım Şartları
                </h1>

                <div className="flex-1 font-minecraft text-[#3e2723] leading-relaxed space-y-6 overflow-y-auto custom-scrollbar pr-4">
                    <p>
                        <span className="font-bold text-xl">1. Kabul</span><br />
                        MinyLauncher'ı indirerek ve kullanarak bu şartları kabul etmiş sayılırsınız.
                        Şartları kabul etmiyorsanız, lütfen yazılımı cihazınızdan kaldırın.
                    </p>

                    <p>
                        <span className="font-bold text-xl">2. Lisans</span><br />
                        MinyLauncher, MIT Lisansı altında dağıtılan açık kaynaklı bir yazılımdır.
                        Kaynak kodunu değiştirebilir, dağıtabilir ve katkıda bulunabilirsiniz.
                    </p>

                    <p>
                        <span className="font-bold text-xl">3. Sorumluluk Reddi</span><br />
                        Bu yazılım "OLDUĞU GİBİ" sunulur. Geliştiriciler, yazılımın kullanımından doğabilecek
                        veri kaybı veya donanım hasarlarından sorumlu tutulamaz.
                    </p>

                    <p>
                        <span className="font-bold text-xl">4. Minecraft</span><br />
                        Bu proje Mojang Studios veya Microsoft ile ilişkili değildir.
                        Minecraft, Mojang Synergies AB'nin ticari markasıdır.
                    </p>
                </div>

                <div className="mt-8 text-center text-[#5d4037] text-sm">
                    Sayfa 1 / 1
                </div>
            </div>
        </div>
    )
}
