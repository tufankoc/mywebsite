import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  ChevronRight, 
  Cpu, 
  Database, 
  Activity, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Twitter, 
  Award, 
  Code,
  TrendingUp,
  FileSpreadsheet,
  Globe,
  Sun,
  Moon,
  Sparkles,
  ArrowDown
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
  level: number;
}

interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [activeSystemStat, setActiveSystemStat] = useState<string>("SaaS");
  const [terminalInput, setTerminalInput] = useState<string>("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: 'input' | 'output'; text: string | React.ReactNode }>>([
    { type: 'output', text: 'Tufan Koç OS v1.2.0 - Loaded' },
    { type: 'output', text: 'Type "help" or click shortcuts below to interact.' }
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('tr-TR'));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const experiences: ExperienceItem[] = [
    {
      title: "Genel Muhasebe Uzman Yardımcısı",
      company: "American LIFE Konya",
      dates: "Eylül 2024 - Kasım 2025 (1 yıl 3 ay)",
      location: "Konya, Türkiye",
      details: [
        "Finansal raporlama, bütçe yönetimi ve muhasebe süreçlerinin koordinasyonu.",
        "Python ve Excel kullanarak tekrarlayan veri girişleri ve veri mutabakat süreçlerinin otomatize edilmesi."
      ],
      url: "https://www.americanlife.com.tr/"
    },
    {
      title: "Stajyer",
      company: "Konya Defterdarlığı (T.C. Maliye Bakanlığı)",
      dates: "Temmuz 2023 - Ağustos 2023",
      location: "Konya, Türkiye",
      details: [
        "Kamu muhasebesi, bütçe takibi ve devlet gelir/gider kalemlerinin işleyişinin öğrenilmesi.",
        "Vergi dairelerindeki denetim ve operasyonel süreçlerin incelenmesi."
      ],
      url: "https://konya.hmb.gov.tr/"
    },
    {
      title: "VP Brand, Youth Marketing & Finance",
      company: "AIESEC Türkiye (Konya Şubesi)",
      dates: "Ocak 2023 - Ocak 2024 (1 yıl 1 ay)",
      location: "Konya, Türkiye",
      details: [
        "Şube bütçesinin oluşturulması, finansal planlama ve yasal uyumluluk (compliance) süreçlerinin yönetimi.",
        "Gençlik pazarlaması stratejilerinin geliştirilmesi ve kurumsal B2B satış operasyonlarının koordinasyonu."
      ],
      url: "https://aiesec.org.tr/"
    },
    {
      title: "Program Katılımcısı",
      company: "Yetkin Gençler (YetGen)",
      dates: "Eylül 2022 - Şubat 2023",
      location: "İstanbul, Türkiye",
      details: [
        "21. yüzyıl yetkinlikleri, sürdürülebilirlik, veri okuryazarlığı ve sunum teknikleri eğitimi.",
        "Python ile programlama temelleri ve algoritma tasarımı pratikleri."
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

  const skillGroups: SkillGroup[] = [
    {
      category: "Programlama & Veri",
      skills: [
        { name: "Python (Pandas, Flask)", level: 90 },
        { name: "SQL (PostgreSQL, SQLite)", level: 85 },
        { name: "React.js / Web Dev", level: 75 },
        { name: "C# / PHP", level: 60 }
      ]
    },
    {
      category: "Finans & Muhasebe",
      skills: [
        { name: "Genel Muhasebe", level: 85 },
        { name: "Finansal Analiz & Raporlama", level: 90 },
        { name: "Bütçeleme & Risk Yönetimi", level: 80 },
        { name: "Sermaye Piyasaları", level: 75 }
      ]
    },
    {
      category: "Araçlar & Analitik",
      skills: [
        { name: "Microsoft Excel (Advanced)", level: 95 },
        { name: "Tableau & Veri Görselleştirme", level: 80 },
        { name: "Linux & Git Workflows", level: 85 }
      ]
    }
  ];

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...terminalHistory, { type: 'input' as const, text: cmdText }];

    switch (trimmed) {
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      case 'help':
        newHistory.push({
          type: 'output',
          text: (
            <div className="grid grid-cols-2 gap-1 text-xs font-mono-custom">
              <div><span className="text-cyan-400 font-bold">about</span> - Tufan kimdir?</div>
              <div><span className="text-cyan-400 font-bold">skills</span> - Yetenek matrisi</div>
              <div><span className="text-cyan-400 font-bold">experience</span> - Kariyer geçmişi</div>
              <div><span className="text-cyan-400 font-bold">projects</span> - Aktif projeler & SaaS</div>
              <div><span className="text-cyan-400 font-bold">matrix</span> - Sistem durumunu göster</div>
              <div><span className="text-cyan-400 font-bold">clear</span> - Konsolu temizle</div>
            </div>
          )
        });
        break;
      case 'about':
        newHistory.push({
          type: 'output',
          text: "Selçuk Üni. İşletme ile İstanbul Üni. Bilgisayar Programcılığı mezuniyetini birleştiren, finansal operasyonları ve analizleri Python/SQL otomasyonlarıyla hızlandıran bir analist ve sistem mimarıdır."
        });
        break;
      case 'skills':
        newHistory.push({
          type: 'output',
          text: "Gelişmiş Teknolojiler: Python (Pandas/NumPy), SQL, Excel Otomasyonu, Muhasebe Raporları, Tableau Görselleştirme, Git/GitHub."
        });
        break;
      case 'experience':
        newHistory.push({
          type: 'output',
          text: (
            <div className="space-y-1 text-xs font-mono-custom">
              <div>- American LIFE Konya: Genel Muhasebe Uzman Yard. (1.2 yıl)</div>
              <div>- Maliye Bakanlığı: Konya Defterdarlığı Stajyeri</div>
              <div>- AIESEC Türkiye: VP Finance & Brand</div>
            </div>
          )
        });
        break;
      case 'projects':
        newHistory.push({
          type: 'output',
          text: "1. diyetisyenasistani.com (SaaS) - Kurucu | 2. Automation Lab - Finansal Süreç Robotları | 3. BIST Analyst Pipeline."
        });
        break;
      case 'matrix':
        newHistory.push({
          type: 'output',
          text: `SYS_STATUS: ACTIVE | ACTIVE_CRONS: 8 | DB_INTEGRITY: 100% | SAAS_HEALTH: GOOD | TIMESTAMP: ${new Date().toISOString()}`
        });
        break;
      default:
        newHistory.push({
          type: 'output',
          text: `Command not found: "${cmdText}". Type "help" for a list of commands.`
        });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  const bgStyles = isDarkMode 
    ? "gradient-bg text-slate-100 selection:bg-purple-500/30" 
    : "bg-slate-50 text-slate-800 selection:bg-sky-500/20";

  const panelStyles = isDarkMode 
    ? "cyber-panel" 
    : "bg-white/80 border border-slate-200/80 shadow-sm transition-all duration-300";

  return (
    <div className={`min-h-screen transition-colors duration-500 relative font-sans antialiased overflow-x-hidden ${bgStyles}`}>
      
      {/* Top Banner / System Status */}
      <div className={`sticky top-0 z-50 px-4 py-3 text-xs flex flex-wrap items-center justify-between font-mono-custom ${
        isDarkMode ? "bg-slate-955/70 border-b border-purple-950/40 backdrop-blur-md" : "bg-white/90 border-b border-slate-200 backdrop-blur-md shadow-sm"
      }`}>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-glow-cyan">CORE: SECURE</span>
          </div>
          <span className="text-slate-700">|</span>
          <div className="hidden sm:flex items-center space-x-1.5">
            <Activity className="h-3.5 w-3.5 text-purple-400" />
            <span className={isDarkMode ? "text-slate-400" : "text-slate-650"}>
              Automations: <b className="text-purple-400 text-glow-purple">12 Ready</b>
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className={`p-1.5 rounded-md border flex items-center justify-center transition-all ${
              isDarkMode 
                ? "border-purple-900/60 hover:bg-purple-900/20 text-amber-400" 
                : "border-slate-200 hover:bg-slate-100 text-indigo-600"
            }`}
            title={isDarkMode ? "Light Mode'a geç" : "Dark Mode'a geç"}
          >
            {isDarkMode ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
          <span className="text-slate-700">|</span>
          <span className={isDarkMode ? "text-slate-400" : "text-slate-650"}>SYS_TIME: <span className="font-semibold">{currentTime}</span></span>
        </div>
      </div>

      {/* HERO SECTION - Curiosity Driven Introduction */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(192,132,252,0.1),transparent_100%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-6 relative float-element">
          
          <div className={`inline-flex items-center space-x-2 border rounded-full px-4 py-1.5 text-xs font-mono-custom font-semibold tracking-wider uppercase ${
            isDarkMode 
              ? "bg-slate-950/80 border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(192,132,252,0.1)]" 
              : "bg-sky-50 border-sky-100 text-sky-600"
          }`}>
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Veri, Finans ve Kod Kombinasyonu</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tight font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-cyan-200">
            TUFAN KOÇ
          </h1>

          <p className={`text-lg md:text-2xl font-mono-custom max-w-2xl mx-auto leading-relaxed ${isDarkMode ? "text-slate-300 text-glow-purple" : "text-slate-700"}`}>
            Süreçleri otomatize etmek, dağınık veriden anlam çıkarmak ve stabil finansal sistemler kurmak üzerine odaklı bir analist.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#timeline" 
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-slate-950 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105"
            >
              Serüveni Keşfet
            </a>
            <a 
              href="#console" 
              className={`px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase border transition-all hover:scale-105 ${
                isDarkMode 
                  ? "border-purple-500/30 bg-slate-900/40 text-purple-300 hover:bg-purple-900/10" 
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              Sistem Konsolu
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500 text-xs font-mono-custom gap-2 animate-bounce">
          <span>Aşağı Kaydır</span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </section>

      {/* CORE MATRIX INTERACTION - Stat Reveal Deck */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div 
          onClick={() => setActiveSystemStat("SaaS")}
          className={`cursor-pointer p-6 rounded-2xl border transition-all ${panelStyles} ${
            activeSystemStat === "SaaS" ? "border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.15)]" : "opacity-80"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono-custom text-cyan-400">01 / ENTERPRISE</span>
            <Globe className="h-5 w-5 text-cyan-400" />
          </div>
          <h3 className="font-bold text-lg font-orbitron text-white">SaaS Girişimi</h3>
          <p className="text-xs text-slate-400 mt-2">Diyetisyenler için entegre iş yönetim platformu. Tıklayarak detayları terminale gönderin.</p>
        </div>

        <div 
          onClick={() => setActiveSystemStat("Automation")}
          className={`cursor-pointer p-6 rounded-2xl border transition-all ${panelStyles} ${
            activeSystemStat === "Automation" ? "border-purple-500/50 shadow-[0_0_20px_rgba(192,132,252,0.15)]" : "opacity-80"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono-custom text-purple-400">02 / WORKFLOW</span>
            <Cpu className="h-5 w-5 text-purple-400" />
          </div>
          <h3 className="font-bold text-lg font-orbitron text-white">Otomasyon Kütüphanesi</h3>
          <p className="text-xs text-slate-400 mt-2">Finans ve veri toplama robotları. Excel ve Python otomasyonları.</p>
        </div>

        <div 
          onClick={() => setActiveSystemStat("Finance")}
          className={`cursor-pointer p-6 rounded-2xl border transition-all ${panelStyles} ${
            activeSystemStat === "Finance" ? "border-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.15)]" : "opacity-80"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono-custom text-rose-400">03 / ANALYTICS</span>
            <TrendingUp className="h-5 w-5 text-rose-400" />
          </div>
          <h3 className="font-bold text-lg font-orbitron text-white">Finansal Raporlama</h3>
          <p className="text-xs text-slate-400 mt-2">Borsa İstanbul ve şirket finansalları bütçe mutabakat modelleri.</p>
        </div>

      </section>

      {/* CORE WORKSPACE GRID */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        
        {/* LEFT COLUMN: INTERACTIVE CONSOLE (lg:col-span-5) */}
        <div id="console" className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 h-fit">
          <div className={`p-5 rounded-2xl border ${panelStyles}`}>
            <h3 className="text-sm font-bold font-orbitron uppercase tracking-wider mb-4 flex items-center">
              <Terminal className="h-4.5 w-4.5 text-cyan-400 mr-2" />
              Sistem Terminali
            </h3>
            
            {/* Terminal Screen */}
            <div className="bg-slate-950 p-4 rounded-xl border border-purple-950/30 h-[280px] overflow-y-auto font-mono-custom text-xs space-y-2 text-slate-300">
              {terminalHistory.map((item, idx) => (
                <div key={idx}>
                  {item.type === 'input' ? (
                    <div className="text-cyan-400 flex items-center">
                      <span className="text-slate-600 mr-1.5">&gt;</span>
                      <span>{item.text}</span>
                    </div>
                  ) : (
                    <div className="text-slate-400 pl-2 border-l border-purple-500/10">{item.text}</div>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-wrap gap-2 pt-4">
              {['help', 'about', 'skills', 'experience', 'projects', 'matrix'].map(cmd => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className={`px-3 py-1 rounded-md text-xs font-mono-custom font-semibold transition-all border ${
                    isDarkMode 
                      ? "bg-slate-900 border-purple-950/40 text-purple-300 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]" 
                      : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* SaaS detailed preview card if SaaS active */}
          {activeSystemStat === "SaaS" && (
            <div className={`p-5 rounded-2xl border transition-all duration-500 ${panelStyles} border-cyan-500/20`}>
              <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                <Globe className="h-4 w-4 animate-spin-slow" />
                <span className="text-xs font-mono-custom font-bold uppercase tracking-wider">diyetisyenasistani.com</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Diyetisyenlerin randevu, bütçe, faturalandırma ve diyet planlama gibi tüm operasyonlarını tek merkezden yönetmelerini sağlayan, kurucu rolünde olduğum bulut tabanlı yazılım girişimi.
              </p>
              <a 
                href="https://diyetisyenasistani.com" 
                target="_blank" 
                rel="noreferrer"
                className="mt-3 inline-flex items-center text-xs font-bold text-cyan-400 hover:underline"
              >
                Girişimi Ziyaret Et
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          )}

          {activeSystemStat === "Automation" && (
            <div className={`p-5 rounded-2xl border transition-all duration-500 ${panelStyles} border-purple-500/20`}>
              <div className="flex items-center space-x-2 text-purple-400 mb-2">
                <Cpu className="h-4 w-4" />
                <span className="text-xs font-mono-custom font-bold uppercase tracking-wider">Automation Lab</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Genel muhasebe süreçlerinde veri mutabakat hatasını minimize eden, fatura eşleştirme ve finansal rapor hazırlama sürelerini 10 kattan fazla kısaltan Python & SQL otomasyon kütüphaneleri.
              </p>
            </div>
          )}

          {activeSystemStat === "Finance" && (
            <div className={`p-5 rounded-2xl border transition-all duration-500 ${panelStyles} border-rose-500/20`}>
              <div className="flex items-center space-x-2 text-rose-400 mb-2">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xs font-mono-custom font-bold uppercase tracking-wider">BIST Raporlama</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Borsa İstanbul veri akışları üzerinden şirket mali tabloları, oranları ve nakit akış tabloları üzerinde otomatik değerleme, bütçeleme ve duyarlılık analizleri modelleri.
              </p>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: SCROLL JOURNEY & PORTFOLIO TIMELINE (lg:col-span-7) */}
        <div id="timeline" className="lg:col-span-7 space-y-12">
          
          {/* Timeline Section */}
          <div className={`p-6 md:p-8 rounded-2xl border ${panelStyles}`}>
            <h2 className="text-xl font-bold font-orbitron uppercase tracking-wider flex items-center border-b pb-4 mb-8"
                style={{ borderColor: isDarkMode ? 'rgba(192,132,252,0.15)' : '#f1f5f9' }}>
              <Briefcase className="h-5 w-5 text-purple-400 mr-3" />
              Kariyer Serüveni
            </h2>

            <div className="relative border-l pl-6 space-y-10"
                 style={{ borderColor: isDarkMode ? 'rgba(192,132,252,0.15)' : '#e2e8f0' }}>
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Timeline bullet indicator */}
                  <span className={`absolute -left-[35px] top-1.5 h-4.5 w-4.5 rounded-full border-2 transition-all flex items-center justify-center ${
                    isDarkMode ? "bg-slate-955 border-purple-500/30" : "bg-white border-slate-200"
                  } group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]`}>
                    <span className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      isDarkMode ? "bg-purple-950" : "bg-slate-250"
                    } group-hover:bg-cyan-400`}></span>
                  </span>

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className={`font-bold text-base md:text-lg group-hover:text-cyan-400 transition-colors ${
                        isDarkMode ? "text-slate-100" : "text-slate-800"
                      }`}>
                        {exp.title}
                      </h3>
                      <span className="text-[11px] font-mono-custom text-slate-500">
                        {exp.dates}
                      </span>
                    </div>

                    <div className="text-xs font-semibold flex items-center gap-1.5">
                      {exp.url ? (
                        <a 
                          href={exp.url} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="hover:underline inline-flex items-center gap-0.5 text-purple-400 hover:text-cyan-400 transition-colors font-mono-custom"
                        >
                          {exp.company}
                          <ExternalLink className="h-3 w-3 opacity-70" />
                        </a>
                      ) : (
                        <span className="text-purple-400 font-mono-custom">{exp.company}</span>
                      )}
                      <span className="text-slate-505">{exp.location && ` • ${exp.location}`}</span>
                    </div>

                    <ul className="space-y-2.5 pt-2">
                      {exp.details.map((detail, dIdx) => (
                        <li key={dIdx} className={`text-xs flex items-start leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                          <span className="text-cyan-400 mr-2 shrink-0">&gt;</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Radar / Matrix Section */}
          <div className={`p-6 md:p-8 rounded-2xl border ${panelStyles}`}>
            <h2 className="text-xl font-bold font-orbitron uppercase tracking-wider flex items-center border-b pb-4 mb-8"
                style={{ borderColor: isDarkMode ? 'rgba(192,132,252,0.15)' : '#f1f5f9' }}>
              <Award className="h-5 w-5 text-purple-400 mr-3" />
              Yetenek & Güç Haritası
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillGroups.map((group, gIdx) => (
                <div key={gIdx} className="space-y-4">
                  <h3 className="text-xs font-bold font-mono-custom text-slate-500 uppercase tracking-wider">
                    {group.category}
                  </h3>
                  <div className="space-y-3.5">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1 group">
                        <div className="flex justify-between text-xs transition-colors group-hover:text-cyan-400">
                          <span className={isDarkMode ? "text-slate-300" : "text-slate-705"}>{skill.name}</span>
                          <span className="text-[10px] font-mono-custom text-slate-500">{skill.level}%</span>
                        </div>
                        <div className={`h-1.5 rounded-full overflow-hidden transition-all ${isDarkMode ? "bg-slate-900" : "bg-slate-100"}`}>
                          <div 
                            className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Contacts (Combined bottom stack) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Education panel */}
            <div className={`p-6 rounded-2xl border ${panelStyles}`}>
              <h3 className="text-sm font-bold font-orbitron uppercase tracking-wider mb-4 flex items-center">
                <GraduationCap className="h-4.5 w-4.5 text-purple-400 mr-2" />
                Eğitim
              </h3>
              <div className="space-y-4 text-xs">
                {educations.map((edu, idx) => (
                  <div key={idx} className={idx > 0 ? "border-t pt-3" : ""}
                       style={{ borderColor: isDarkMode ? '#1e1b4b' : '#f1f5f9' }}>
                    <div className={`font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}>
                      {edu.school}
                    </div>
                    <div className="text-cyan-400 font-mono-custom mt-0.5">{edu.degree}</div>
                    <div className="text-[10px] text-slate-500 font-mono-custom">{edu.dates}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Access panel */}
            <div className={`p-6 rounded-2xl border ${panelStyles} flex flex-col justify-between`}>
              <div>
                <h3 className="text-sm font-bold font-orbitron uppercase tracking-wider mb-3 flex items-center">
                  <Mail className="h-4.5 w-4.5 text-purple-400 mr-2" />
                  Kanal Bağlantısı
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Süreç otomasyonları, veri analitiği veya entegre SaaS geliştirme talepleriniz için doğrudan iletişim kurun.
                </p>
              </div>

              <div className="flex space-x-3">
                <a 
                  href="mailto:hi@tufankoc.net" 
                  className={`p-2.5 rounded-lg border flex items-center justify-center transition-all ${
                    isDarkMode 
                      ? "bg-slate-900 border-purple-950/40 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]" 
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                  title="Mail Gönder"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a 
                  href="https://linkedin.com/in/tufankoc" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`p-2.5 rounded-lg border flex items-center justify-center transition-all ${
                    isDarkMode 
                      ? "bg-slate-900 border-purple-955/40 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]" 
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                  title="LinkedIn Profil"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://x.com/tufankoc00" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`p-2.5 rounded-lg border flex items-center justify-center transition-all ${
                    isDarkMode 
                      ? "bg-slate-900 border-purple-955/40 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]" 
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                  title="Twitter / X"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className={`border-t py-8 px-4 mt-20 relative ${
        isDarkMode ? "border-purple-950/30 bg-slate-950/70" : "border-slate-200 bg-slate-100/50"
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-mono-custom space-y-4 md:space-y-0">
          <p className="text-center md:text-left">
            // Unvanlar geçici, stabil ve çalışan sistemler kalıcıdır.
          </p>
          <p className="flex items-center space-x-1">
            <span>&copy; {new Date().getFullYear()} Tufan Koç. All rights reserved.</span>
            <span>•</span>
            <span className="text-cyan-400 font-semibold text-glow-cyan">EOF</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;