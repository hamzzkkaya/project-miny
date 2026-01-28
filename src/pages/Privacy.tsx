export function Privacy() {
    return (
        <div className="min-h-screen bg-[#202020] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pt-24 pb-12 flex items-center justify-center">

            {/* BOOK CONTAINER */}
            <div className="relative w-full max-w-3xl bg-[#f4e4bc] border-[6px] border-[#5d4037] shadow-2xl p-8 md:p-12 min-h-[600px] flex flex-col md:rotate-1">

                {/* Binding Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#4e342e] border-r border-[#3e2723]"></div>

                <h1 className="text-4xl font-bold font-minecraft text-[#3e2723] text-center mb-8 border-b-2 border-[#3e2723] pb-4">
                    Gizlilik Politikası
                </h1>

                <div className="flex-1 font-minecraft text-[#3e2723] leading-relaxed space-y-6 overflow-y-auto custom-scrollbar pr-4">
                    <p>
                        <span className="font-bold text-xl">1. Veri Toplama</span><br />
                        MinyLauncher, kullanıcı deneyimini geliştirmek amacıyla minimum düzeyde veri toplar.
                        Toplanan veriler şunları içerir:
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Kullanıcı adı ve UUID (Mojang API üzerinden).</li>
                            <li>Launcher kullanım istatistikleri (anonim).</li>
                            <li>Hata raporları (isteğe bağlı).</li>
                        </ul>
                    </p>

                    <p>
                        <span className="font-bold text-xl">2. Veri Güvenliği</span><br />
                        Hesap şifreleriniz veya tokenlarınız asla sunucularımızda saklanmaz.
                        Tüm kimlik doğrulama işlemleri doğrudan Mojang/Microsoft sunucuları ile yapılır.
                    </p>

                    <p>
                        <span className="font-bold text-xl">3. Üçüncü Taraflar</span><br />
                        Bazı mod paketleri ve eklentiler üçüncü taraf sunuculara bağlanabilir.
                        Bu bağlantıların güvenliğinden MinyLauncher sorumlu değildir.
                    </p>

                    <p className="italic text-sm text-center mt-8">
                        Son Güncelleme: 25.01.2026
                    </p>
                </div>

                <div className="mt-8 text-center text-[#5d4037] text-sm">
                    Sayfa 1 / 3
                </div>
            </div>
        </div>
    )
}
