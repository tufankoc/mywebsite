import React, { useState, useEffect } from 'react';
import { RetroBox } from './components/RetroBox';
import { TypewriterText } from './components/TypewriterText';
import { Terminal, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('tr-TR'));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-8 max-w-4xl mx-auto font-mono text-sm sm:text-base">
      
      {/* File Header / Top Bar */}
      <div className="mb-12 text-gray-500 flex flex-col sm:flex-row justify-between border-b border-gray-800 pb-2">
        <div>
          <span className="text-blue-400">root</span>
          <span className="text-gray-600">@</span>
          <span className="text-purple-400">tufankoc.net</span>
          <span className="text-gray-600">:</span>
          <span className="text-yellow-300">~/public/cv.txt</span>
        </div>
        <div className="mt-1 sm:mt-0 text-xs sm:text-sm opacity-50">
           Last login: {time} on ttys001
        </div>
      </div>

      {/* Hero / Intro */}
      <div className="mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
          TUFAN KOÇ<span className="text-green-500 blink">_</span>
        </h1>
        <p className="text-gray-400 text-lg">
          &gt; Analist & Otomasyon Mimarı
        </p>
      </div>

      <main>
        {/* [1] Ben kimim? */}
        <RetroBox title="[1] BEN KİMİM?">
           <p className="leading-relaxed max-w-2xl">
             Finans, veri ve otomasyon kesişiminde; karar süreçlerini hızlandıran sistemler kuran bir analistim.
           </p>
        </RetroBox>

        {/* [2] Ne çözüyorum? */}
        <RetroBox title="[2] NE ÇÖZÜYORUM?">
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2 text-gray-600">-</span> 
              Manuel, yavaş ve hataya açık finansal süreçleri
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-gray-600">-</span>
              Dağınık kamu ve piyasa verilerinden anlam çıkarılamamasını
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-gray-600">-</span>
              Karar alıcıların zaman kaybı yaşadığı raporlama problemlerini
            </li>
          </ul>
          
          <div className="border border-gray-700 bg-gray-900/50 p-4 inline-block">
            <span className="text-blue-400 font-bold">def</span> <span className="text-yellow-200">solve_problem</span>():<br/>
            &nbsp;&nbsp;<span className="text-green-400">return</span> "Bilgi var ama karar yok sorununu çözüyorum."
          </div>
        </RetroBox>

        {/* [3] Bunu nasıl yapıyorum? */}
        <RetroBox title="[3] BUNU NASIL YAPIYORUM?">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-400">
            <div>
              <span className="block text-white font-bold mb-1 underline decoration-gray-700 underline-offset-4">01. Veri</span>
              Finansal verileri toplayıp, temizleyip, anlamlandırarak.
            </div>
            <div>
              <span className="block text-white font-bold mb-1 underline decoration-gray-700 underline-offset-4">02. Otomasyon</span>
              Tekrarlayan işleri otomasyonlara bağlayarak.
            </div>
            <div>
              <span className="block text-white font-bold mb-1 underline decoration-gray-700 underline-offset-4">03. Sistem</span>
              Excel, Python ve workflow araçlarıyla insan yerine sistemlerin çalışmasını sağlayarak.
            </div>
          </div>
          
          <div className="mt-6 text-gray-500 italic">
            # Amacım: Aynı işi daha hızlı, daha şeffaf ve daha az insan hatasıyla yapmak.
          </div>
        </RetroBox>

        {/* [4] Nerede kanıtı var? */}
        <RetroBox title="[4] NEREDE KANITI VAR?">
          <p className="mb-6 text-white border-l-2 border-red-500 pl-3">
            Yaptıklarımı anlatmıyorum, çalıştırıyorum.
          </p>
          
          <div className="space-y-4 font-mono">
            <a href="#" className="flex items-center group hover:text-white transition-colors">
              <span className="text-green-500 mr-2 opacity-0 group-hover:opacity-100">&gt;</span>
              <span className="text-blue-400 underline decoration-dotted underline-offset-4">./Automation_Lab</span>
              <span className="text-gray-600 mx-2">::</span>
              <span className="text-gray-400 text-sm">Finans ve regülasyon odaklı otomasyonlar</span>
            </a>

            <a href="#" className="flex items-center group hover:text-white transition-colors">
              <span className="text-green-500 mr-2 opacity-0 group-hover:opacity-100">&gt;</span>
              <span className="text-blue-400 underline decoration-dotted underline-offset-4">./Reports</span>
              <span className="text-gray-600 mx-2">::</span>
              <span className="text-gray-400 text-sm">Gerçek verilerle hazırlanmış analizler</span>
            </a>

            <a href="#" className="flex items-center group hover:text-white transition-colors">
              <span className="text-green-500 mr-2 opacity-0 group-hover:opacity-100">&gt;</span>
              <span className="text-blue-400 underline decoration-dotted underline-offset-4">./Code_Workflows</span>
              <span className="text-gray-600 mx-2">::</span>
              <span className="text-gray-400 text-sm">Açık örnekler ve teknik notlar</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-yellow-600">
            [WARNING] Bu site bir portföy değil, canlı bir çalışma alanı.
          </div>
        </RetroBox>

        {/* [5] Bana nasıl ulaşırsın? */}
        <RetroBox title="[5] İLETİŞİM / CONNECT">
          <div className="flex flex-col gap-2">
             <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
                <span className="w-24 text-gray-500">EMAIL</span>
                <a href="mailto:hi@tufankoc.net" className="text-white hover:text-green-400 hover:underline">hi@tufankoc.net</a>
             </div>
             <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
                <span className="w-24 text-gray-500">LINKEDIN</span>
                <a href="https://linkedin.com/in/tufankoc" target="_blank" className="text-white hover:text-green-400 hover:underline">linkedin.com/in/tufankoc</a>
             </div>
             <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
                <span className="w-24 text-gray-500">TWITTER</span>
                <a href="https://x.com/tufankoc00" target="_blank" className="text-white hover:text-green-400 hover:underline">@tufankoc00</a>
             </div>
          </div>

          <div className="mt-8 p-4 border border-gray-800 text-center text-sm text-gray-400">
             CV istemeden önce linklere bak. Zaten ihtiyacın olan cevap orada.
          </div>
        </RetroBox>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-800 pt-6 pb-12 text-gray-600 text-xs">
        <p className="mb-2 text-gray-500">
          // Unvanlar geçici, çalışan sistemler kalıcıdır.
        </p>
        <p>
          EOF
        </p>
      </footer>
    </div>
  );
};

export default App;