import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Layers, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Twitter, 
  Sun, 
  Moon,
  TrendingUp,
  FileSpreadsheet,
  Globe,
  FileText
} from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  location?: string;
  details: string[];
  url?: string;
}

interface EducationItem {
  school: string;
  degree: string;
  dates: string;
}

interface SkillItem {
  name: string;
  level: string;
  useCase: string;
}

const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Starts on classic light paper
  const [selectedBriefing, setSelectedBriefing] = useState<'finance' | 'automation' | 'venture'>('finance');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('tr-TR'));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const experiences: ExperienceItem[] = [
    {
      title: "Genel Muhasebe Uzman Yardımcısı",
      company: "American LIFE Konya",
      dates: "Eylül 2024 - Kasım 2025",
      location: "Konya, Türkiye",
      details: [
        "Genel muhasebe kayıtlarının tutulması, cari hesap mutabakatları ve finansal raporlamalar.",
        "Veri giriş ve kontrol süreçlerinin hızlandırılması amacıyla Python entegrasyonlu Excel modellerinin tasarımı."
      ],
      url: "https://www.americanlife.com.tr/"
    },
    {
      title: "Stajyer",
      company: "Konya Defterdarlığı (T.C. Maliye Bakanlığı)",
      dates: "Temmuz 2023 - Ağustos 2023",
      location: "Konya, Türkiye",
      details: [
        "Devlet bütçeleme süreçleri, harcama kalemleri ve kamu muhasebe sistemlerinin yerinde incelenmesi.",
        "Vergi dairesi denetim kuralları ve operasyonel mevzuatların takip edilmesi."
      ],
      url: "https://konya.hmb.gov.tr/"
    },
    {
      title: "VP Brand, Youth Marketing & Finance",
      company: "AIESEC Türkiye (Konya Şubesi)",
      dates: "Ocak 2023 - Ocak 2024",
      location: "Konya, Türkiye",
      details: [
        "Şube bütçesinin oluşturulması, nakit akışı kontrolü ve finansal sürdürülebilirlik planlaması.",
        "Kurumsal B2B iş geliştirme anlaşmalarının ve pazarlama ekiplerinin yönetilmesi."
      ],
      url: "https://aiesec.org.tr/"
    },
    {
      title: "Program Katılımcısı",
      company: "Yetkin Gençler (YetGen)",
      dates: "Eylül 2022 - Şubat 2023",
      location: "İstanbul, Türkiye",
      details: [
        "21. yüzyıl yetkinlikleri, veri analizi modelleri ve Python programlama temelleri.",
        "Takım çalışması, sunum teknikleri ve sosyal sorumluluk proje tasarımları."
      ],
      url: "https://yetkingencler.com/"
    }
  ];

  const educations: EducationItem[] = [
    {
      school: "Selçuk Üniversitesi",
      degree: "Lisans, İşletme",
      dates: "2020 - 2026"
    },
    {
      school: "İstanbul Üniversitesi",
      degree: "Ön Lisans, Bilgisayar Programcılığı",
      dates: "2022 - 2024"
    }
  ];

  const skills: SkillItem[] = [
    { name: "Python", level: "Gelişmiş", useCase: "Finansal Veri Analizi, API Entegrasyonları ve Cron Botları" },
    { name: "SQL", level: "Gelişmiş", useCase: "İlişkisel Veri Sorgulama, Analitik Tablolar" },
    { name: "Microsoft Excel", level: "Uzman", useCase: "Bütçe Planlama, Pivot Tabloları, VBA & Veri Modelleme" },
    { name: "Genel Muhasebe", level: "Gelişmiş", useCase: "Cari Hesap Takibi, Tekdüzen Hesap Planı, Finansal Tablolar" },
    { name: "React.js / Web Dev", level: "Orta", useCase: "Arayüz Geliştirme, SaaS Ürün Yönetimi" },
    { name: "Tableau", level: "Orta", useCase: "İş Zekası (BI) Raporlama, Yönetici KPI Panelleri" }
  ];

  const bgStyles = isDarkMode 
    ? "bg-[#0b100d] text-stone-250" 
    : "bg-[#fbfbf9] text-stone-900";

  const borderStyles = isDarkMode 
    ? "border-stone-850" 
    : "border-stone-200";

  return (
    <div className={`min-h-screen transition-colors duration-300 py-6 px-4 md:px-8 font-sans ${bgStyles}`}>
      
      {/* Editorial Page Container */}
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* EXECUTIVE HEADER */}
        <header className={`border-t-4 border-b pb-6 pt-4 ${isDarkMode ? 'border-emerald-700 border-b-stone-800' : 'border-stone-900 border-b-stone-200'}`}>
          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-semibold text-stone-500 mb-2">
            <span>NO. 04 / ANALYST PORTFOLIO</span>
            <span>EDITION: KONYA - TURKEY</span>
            <span className="flex items-center space-x-2">
              <span>{currentTime}</span>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-1 rounded transition-colors ${isDarkMode ? 'hover:bg-stone-900 text-amber-400' : 'hover:bg-stone-100 text-stone-800'}`}
                title={isDarkMode ? "Açık Moda Geç" : "Koyu Moda Geç"}
              >
                {isDarkMode ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
              </button>
            </span>
          </div>

          <div className="text-center py-4">
            <h1 className="text-4xl md:text-6xl font-black font-serif-custom tracking-tight uppercase">
              THE KOÇ LEDGER
            </h1>
            <p className="text-xs italic font-serif-custom mt-2 tracking-wide text-stone-500">
              "Integrating Capital Markets logic with computer programming systems."
            </p>
          </div>

          {/* Sub-header columns */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-3 mt-4 text-xs ${isDarkMode ? 'border-stone-850 text-stone-400' : 'border-stone-200 text-stone-600'}`}>
            <div className="md:border-r pr-4 border-inherit">
              <b>PROFILER:</b> Tufan Koç, Business graduate (Selçuk Uni) & Computer programmer (Istanbul Uni).
            </div>
            <div className="md:border-r px-0 md:px-4 border-inherit text-center md:text-left">
              <b>SYSTEM OBJECTIVE:</b> Automating accounting operations, building data feeds, and reducing manual business workloads.
            </div>
            <div className="pl-0 md:pl-4">
              <b>ENTREPRENEURSHIP:</b> Founder of diyetisyenasistani.com. Target tracks: SPK & SMMM qualifications.
            </div>
          </div>
        </header>

        {/* FEATURED STORY SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Briefing Column (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Lead Article */}
            <article className="space-y-4">
              <div className="flex items-center space-x-2 text-[11px] font-bold text-emerald-700 dark:text-emerald-500 uppercase tracking-widest">
                <span>Featured Dossier</span>
                <span>•</span>
                <span>System Architecture</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold font-serif-custom tracking-tight text-stone-900 dark:text-white leading-tight">
                Veri ve Finansın Kesişiminde: Bir Analistin Sistem İnşa Süreci
              </h2>

              <p className="font-serif-custom text-base md:text-lg italic text-stone-600 dark:text-stone-300 leading-relaxed quote-indicator pl-6">
                Finansal operasyonların ve piyasaların dinamiğini sadece izlemek yetmez; veriyi anlamlandıran ve süreçleri optimize eden sürdürülebilir sistemler kurmak gerekir.
              </p>

              <div className={`text-sm leading-relaxed space-y-4 pt-2 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                <p>
                  Klasik işletme eğitimi ile edindiğim <b>sermaye piyasaları</b> vizyonunu, akademik temelini aldığım <b>Bilgisayar Programcılığı</b> disipliniyle birleştiriyorum.
                  Python ve SQL kullanarak veri mutabakat süreçlerini, muhasebe operasyonlarını ve raporlamaları dijitalleştiriyorum.
                </p>
                <p>
                  Teorik bilgiyi ticari hayata adapte etme yaklaşımımın bir parçası olarak diyetisyenlere yönelik entegre bir SaaS platformu olan <b>diyetisyenasistani.com</b> girişimini hayata geçirdim. Bu süreçte ürün yönetimi, iş modeli tasarımı ve finansal planlamayı otonom olarak yönettim.
                </p>
              </div>
            </article>

            {/* INTERACTIVE BRIEFINGS (Dossier Tabs) */}
            <div className={`border p-5 rounded-lg ${isDarkMode ? 'bg-stone-900/40 border-stone-850' : 'bg-[#f4f3ef] border-stone-200'}`}>
              <div className="flex border-b border-stone-300 dark:border-stone-850 pb-2 mb-4 space-x-4 text-xs font-bold uppercase tracking-wider">
                <button 
                  onClick={() => setSelectedBriefing('finance')}
                  className={`pb-1 ${selectedBriefing === 'finance' ? 'border-b-2 border-emerald-700 text-emerald-700 dark:text-emerald-500' : 'text-stone-500'}`}
                >
                  Finansal Analiz
                </button>
                <button 
                  onClick={() => setSelectedBriefing('automation')}
                  className={`pb-1 ${selectedBriefing === 'automation' ? 'border-b-2 border-emerald-700 text-emerald-700 dark:text-emerald-500' : 'text-stone-500'}`}
                >
                  Otomasyon & Veri
                </button>
                <button 
                  onClick={() => setSelectedBriefing('venture')}
                  className={`pb-1 ${selectedBriefing === 'venture' ? 'border-b-2 border-emerald-700 text-emerald-700 dark:text-emerald-500' : 'text-stone-500'}`}
                >
                  Girişimcilik
                </button>
              </div>

              {selectedBriefing === 'finance' && (
                <div className="space-y-2 text-xs leading-relaxed">
                  <div className="font-bold font-serif-custom text-sm text-stone-850 dark:text-white">SPK & SMMM Hedefli Finans Yönetimi</div>
                  <p className="text-stone-600 dark:text-stone-400">
                    Genel muhasebe uzman yardımcılığı deneyimim ve aldığım finans eğitimi doğrultusunda, şirketlerin finansal sağlığını, bütçe uyumluluğunu ve nakit akış tablolarını analiz ediyorum. Türkiye vergi mevzuatı ve raporlama standartları çerçevesinde çalışıyorum.
                  </p>
                </div>
              )}

              {selectedBriefing === 'automation' && (
                <div className="space-y-2 text-xs leading-relaxed">
                  <div className="font-bold font-serif-custom text-sm text-stone-850 dark:text-white">Python & SQL Entegrasyonlu Süreçler</div>
                  <p className="text-stone-600 dark:text-stone-400">
                    Manuel veri girişlerini ortadan kaldıran, departmanlar arası veri mutabakat süreçlerindeki insan hatalarını minimuma indiren Python kütüphaneleri (Pandas, Numpy) ve ilişkisel veritabanı (SQL) çözümleri inşa ediyorum.
                  </p>
                </div>
              )}

              {selectedBriefing === 'venture' && (
                <div className="space-y-2 text-xs leading-relaxed">
                  <div className="font-bold font-serif-custom text-sm text-stone-850 dark:text-white">SaaS Kurucusu: diyetisyenasistani.com</div>
                  <p className="text-stone-600 dark:text-stone-400">
                    Sıfırdan bir SaaS iş modelinin tasarlanması, faturalandırma ve abonelik entegrasyonlarının kurulması, müşteri geri bildirimlerine göre ürünün iterate edilmesi süreçlerini bizzat yürüttüm.
                  </p>
                </div>
              )}
            </div>

            {/* EXPERIENCE DOSSIER (Timeline) */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold font-serif-custom border-b pb-2 flex items-center"
                  style={{ borderColor: isDarkMode ? '#1e293b' : '#e2e8f0' }}>
                <Briefcase className="h-4.5 w-4.5 text-stone-500 mr-2.5" />
                Dossier: Kronolojik Deneyim Takibi
              </h3>

              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className={`pb-5 border-b last:border-b-0 ${isDarkMode ? 'border-stone-850' : 'border-stone-200'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1.5">
                      <h4 className="font-bold text-sm md:text-base text-stone-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">{exp.dates}</span>
                    </div>
                    
                    <div className="text-xs text-stone-500 mb-2 flex items-center">
                      {exp.url ? (
                        <a href={exp.url} target="_blank" rel="noreferrer" className="text-emerald-700 dark:text-emerald-500 hover:underline inline-flex items-center gap-0.5 font-bold">
                          {exp.company}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="font-bold">{exp.company}</span>
                      )}
                      {exp.location && <span className="ml-1.5">• {exp.location}</span>}
                    </div>

                    <ul className="space-y-1.5">
                      {exp.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-xs text-stone-600 dark:text-stone-400 flex items-start leading-relaxed">
                          <span className="text-stone-400 dark:text-stone-600 mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar / Capital & Systems Metrics (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Profiles Block */}
            <div className={`border p-6 rounded-lg ${isDarkMode ? 'bg-stone-950/40 border-stone-850' : 'bg-[#fdfdfc] border-stone-200/80 shadow-sm'}`}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4 border-b pb-1.5 border-stone-200 dark:border-stone-850">
                Girişimler & Yayınlar
              </h3>
              
              <div className="space-y-4">
                
                {/* diyetisyen asistanı */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-serif-custom text-stone-900 dark:text-white">diyetisyenasistani.com</span>
                    <a href="https://diyetisyenasistani.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-emerald-700 transition-colors">
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="text-[11px] text-stone-500 leading-normal">
                    Diyetisyenler için müşteri yönetimi ve fatura takibi sağlayan entegre SaaS platformu.
                  </p>
                </div>

                {/* Automation lab */}
                <div className="space-y-1 border-t pt-3 dark:border-stone-850">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-serif-custom text-stone-900 dark:text-white">./Automation_Lab</span>
                    <FileSpreadsheet className="h-4 w-4 text-stone-500" />
                  </div>
                  <p className="text-[11px] text-stone-500 leading-normal">
                    Finans departmanları için geliştirilen veri mutabakat ve Excel/Python entegrasyon scriptleri.
                  </p>
                </div>

                {/* BIST Analyst */}
                <div className="space-y-1 border-t pt-3 dark:border-stone-850">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-serif-custom text-stone-900 dark:text-white">BIST / Raporlama Rüzgarı</span>
                    <TrendingUp className="h-4 w-4 text-stone-500" />
                  </div>
                  <p className="text-[11px] text-stone-500 leading-normal">
                    Borsa İstanbul verilerini çekip finansal duyarlılık analizi hazırlayan analitik veri hatları.
                  </p>
                </div>
              </div>
            </div>

            {/* TABULAR SKILLS METRIC */}
            <div className={`border p-6 rounded-lg ${isDarkMode ? 'bg-stone-950/40 border-stone-850' : 'bg-[#fdfdfc] border-stone-200/80 shadow-sm'}`}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4 border-b pb-1.5 border-stone-200 dark:border-stone-850">
                Yetenek Matrisi (Tabular)
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-[11px] text-left">
                  <thead>
                    <tr className="border-b border-stone-200 dark:border-stone-850 text-stone-500">
                      <th className="pb-1.5 font-bold uppercase">Yetenek</th>
                      <th className="pb-1.5 font-bold uppercase text-right">Seviye</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 dark:divide-stone-900">
                    {skills.map((skill, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-stone-900/30 transition-colors">
                        <td className="py-2">
                          <div className="font-bold text-stone-800 dark:text-stone-300">{skill.name}</div>
                          <div className="text-[10px] text-stone-500">{skill.useCase}</div>
                        </td>
                        <td className="py-2 text-right font-bold text-emerald-700 dark:text-emerald-500 uppercase">
                          {skill.level}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* EDUCATION SIDEBAR */}
            <div className={`border p-6 rounded-lg ${isDarkMode ? 'bg-stone-950/40 border-stone-850' : 'bg-[#fdfdfc] border-stone-200/80 shadow-sm'}`}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4 border-b pb-1.5 border-stone-200 dark:border-stone-850">
                Akademik Temel
              </h3>
              
              <div className="space-y-3 text-xs">
                {educations.map((edu, idx) => (
                  <div key={idx} className={idx > 0 ? "border-t pt-3 dark:border-stone-850" : ""}>
                    <div className="font-bold text-stone-900 dark:text-white font-serif-custom">{edu.school}</div>
                    <div className="text-stone-500 mt-0.5">{edu.degree}</div>
                    <div className="text-[10px] text-stone-500">{edu.dates}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* DOSSIER ACCESS (Contact channels) */}
            <div className={`border p-6 rounded-lg ${isDarkMode ? 'bg-stone-950/40 border-stone-850' : 'bg-[#fdfdfc] border-stone-200/80 shadow-sm'}`}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 border-b pb-1.5 border-stone-200 dark:border-stone-850">
                Resmi İrtibat Kanalları
              </h3>
              
              <div className="space-y-2.5 pt-1.5">
                <a href="mailto:hi@tufankoc.net" className="flex items-center text-xs text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors font-bold">
                  <Mail className="h-4 w-4 mr-2 text-stone-500" />
                  hi@tufankoc.net
                </a>
                <a href="https://linkedin.com/in/tufankoc" target="_blank" rel="noreferrer" className="flex items-center text-xs text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors font-bold">
                  <Linkedin className="h-4 w-4 mr-2 text-stone-500" />
                  linkedin.com/in/tufankoc
                </a>
                <a href="https://x.com/tufankoc00" target="_blank" rel="noreferrer" className="flex items-center text-xs text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors font-bold">
                  <Twitter className="h-4 w-4 mr-2 text-stone-500" />
                  @tufankoc00
                </a>
              </div>
            </div>

          </div>

        </section>

        {/* FOOTER */}
        <footer className={`border-t pt-6 pb-12 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 ${
          isDarkMode ? 'border-stone-850' : 'border-stone-200'
        }`}>
          <p>
            // Unvanlar geçici, stabil ve çalışan sistemler kalıcıdır.
          </p>
          <p className="flex items-center space-x-1">
            <span>&copy; {new Date().getFullYear()} Tufan Koç.</span>
            <span>•</span>
            <span className="font-bold">THE LEDGER</span>
          </p>
        </footer>

      </div>

    </div>
  );
};

export default App;