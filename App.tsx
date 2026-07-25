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
  Moon
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
  const [terminalInput, setTerminalInput] = useState<string>("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: 'input' | 'output'; text: string | React.ReactNode }>>([
    { type: 'output', text: 'Tufan Koç OS v1.0.4 - Initialized' },
    { type: 'output', text: 'Type "help" to see available commands or click the tags below.' }
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('tr-TR'));
    };
    const setTimeStr = (str: string) => {
      setCurrentTime(str);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  // Real data parsed from user's profile
  const experiences: ExperienceItem[] = [
    {
      title: "Genel Muhasebe Uzman Yardımcısı",
      company: "American LIFE Konya",
      dates: "Eylül 2024 - Kasım 2025 (1 yıl 3 ay)",
      location: "Konya, Türkiye",
      details: [
        "Finansal raporlama ve muhasebe süreçlerinin yönetilmesi.",
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
            <div className="grid grid-cols-2 gap-1 text-xs">
              <div><span className="text-emerald-500 font-bold">about</span> - Tufan kimdir?</div>
              <div><span className="text-emerald-500 font-bold">skills</span> - Yetenek matrisi</div>
              <div><span className="text-emerald-500 font-bold">experience</span> - Kariyer geçmişi</div>
              <div><span className="text-emerald-500 font-bold">projects</span> - Aktif projeler & SaaS</div>
              <div><span className="text-emerald-500 font-bold">matrix</span> - Sistem durumunu göster</div>
              <div><span className="text-emerald-500 font-bold">clear</span> - Konsolu temizle</div>
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
            <div className="space-y-1 text-xs">
              <div>- <span className="text-blue-400">American LIFE Konya:</span> Genel Muhasebe Uzman Yard. (1.2 yıl)</div>
              <div>- <span className="text-blue-400">Maliye Bakanlığı:</span> Konya Defterdarlığı Stajyeri</div>
              <div>- <span className="text-blue-400">AIESEC Türkiye:</span> VP Finance & Brand</div>
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
      case 'diyetisyen':
        newHistory.push({
          type: 'output',
          text: "diyetisyenasistani.com: Diyetisyenler için geliştirilmiş, faturalandırma, danışan takibi ve bütçe planlama içeren entegre SaaS platformudur."
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
    ? "bg-slate-950 text-slate-100 selection:bg-sky-500/30" 
    : "bg-slate-50 text-slate-800 selection:bg-sky-500/20";

  const panelStyles = isDarkMode 
    ? "bg-slate-900/70 border-slate-900" 
    : "bg-white/80 border-slate-200/80 shadow-sm";

  return (
    <div className={`min-h-screen transition-colors duration-300 relative font-sans antialiased ${bgStyles}`}>
      
      {/* Background Matrix/Grid lines effect */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none`}
           style={{ '--grid-color': isDarkMode ? '#0f172a' : '#f1f5f9' } as React.CSSProperties} />

      {/* Top Banner / System Status */}
      <div className={`sticky top-0 z-50 border-b px-4 py-2 text-xs flex flex-wrap items-center justify-between font-mono-custom ${panelStyles}`}>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-500 font-semibold tracking-wider uppercase">CORE: ONLINE</span>
          </div>
          <span className={isDarkMode ? "text-slate-800" : "text-slate-300"}>|</span>
          <div className="hidden sm:flex items-center space-x-1.5">
            <Activity className="h-3.5 w-3.5 text-sky-500" />
            <span className={isDarkMode ? "text-slate-400" : "text-slate-600"}>Automations: <b className="text-sky-500">12 Active</b></span>
          </div>
          <span className="hidden sm:inline text-slate-500">|</span>
          <div className="hidden md:flex items-center space-x-1.5">
            <Database className="h-3.5 w-3.5 text-purple-500" />
            <span className={isDarkMode ? "text-slate-400" : "text-slate-600"}>DB Integrity: <b className="text-purple-500">99.9%</b></span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className={`p-1 rounded-md border flex items-center justify-center transition-all ${
              isDarkMode 
                ? "border-slate-800 hover:bg-slate-800 text-amber-400" 
                : "border-slate-200 hover:bg-slate-100 text-indigo-600"
            }`}
            title={isDarkMode ? "Light Mode'a geç" : "Dark Mode'a geç"}
          >
            {isDarkMode ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
          <span className={isDarkMode ? "text-slate-800" : "text-slate-300"}>|</span>
          <span className={isDarkMode ? "text-slate-400" : "text-slate-600"}>PORT: <b className="text-emerald-500">3000</b></span>
          <span className={isDarkMode ? "text-slate-300" : "text-slate-700"}>SYS_TIME: <span className="font-semibold">{currentTime}</span></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        
        {/* LEFT COLUMN: HERO, ABOUT & INTERACTIVE TERMINAL */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-start">
          
          {/* Hero Branding */}
          <div className="space-y-4">
            <div className={`inline-flex items-center space-x-2 border rounded-full px-3.5 py-1 text-xs font-mono-custom font-medium ${
              isDarkMode 
                ? "bg-slate-900 border-slate-800 text-sky-400" 
                : "bg-sky-50 border-sky-100 text-sky-600"
            }`}>
              <Cpu className="h-3 w-3" />
              <span>Sistem Kurucu & Finansal Analist</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-orbitron">
              TUFAN KOÇ<span className="text-emerald-500">_</span>
            </h1>
            
            <p className={`text-lg leading-relaxed font-mono-custom text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              &gt; Veri analitiği ve Python/SQL otomasyonları ile şirketlerin finansal operasyonlarını optimize eden sistem geliştirici.
            </p>
          </div>

          {/* Interactive Terminal Window */}
          <div className={`rounded-xl overflow-hidden border flex flex-col h-[340px] font-mono-custom transition-all ${
            isDarkMode 
              ? "bg-slate-900/90 border-slate-800 glow-green" 
              : "bg-slate-900 border-slate-800 shadow-lg"
          }`}>
            <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-300">bash - tufan@system:~</span>
              </div>
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></div>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 flex-1 overflow-y-auto space-y-2 text-xs md:text-sm text-slate-300 scrollbar-thin">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="leading-relaxed">
                  {item.type === 'input' ? (
                    <div className="flex items-center text-sky-400">
                      <span className="text-slate-500 mr-2">guest@tufankoc:~$</span>
                      <span>{item.text}</span>
                    </div>
                  ) : (
                    <div className="text-slate-400 whitespace-pre-wrap pl-2 border-l border-emerald-500/20 py-0.5">
                      {item.text}
                    </div>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Interactive tags quick selector */}
            <div className="bg-slate-900/60 px-4 py-2 border-t border-slate-800 text-[10px] text-slate-500 flex flex-wrap gap-2 items-center">
              <span className="uppercase tracking-wider">Quick Commands:</span>
              {['help', 'about', 'skills', 'experience', 'projects', 'matrix'].map(cmd => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:bg-emerald-500 hover:text-slate-950 transition-colors border border-slate-700/60 font-semibold"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Input */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(terminalInput);
              }}
              className="bg-slate-900/80 px-4 py-2 border-t border-slate-800 flex items-center"
            >
              <ChevronRight className="h-4 w-4 text-emerald-500 mr-1.5 shrink-0" />
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Komut yazın (örn: help)..."
                className="w-full bg-transparent text-slate-200 outline-none text-xs md:text-sm font-semibold placeholder:text-slate-600"
              />
            </form>
          </div>

          {/* Socials / Direct Channels */}
          <div className={`p-5 rounded-xl border space-y-4 ${panelStyles}`}>
            <h4 className="text-sm font-bold uppercase tracking-wider font-orbitron border-b pb-2"
                style={{ borderColor: isDarkMode ? '#1e293b' : '#f1f5f9' }}>
              İletişim Kanalları
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              <a 
                href="mailto:hi@tufankoc.net" 
                className={`flex items-center p-2.5 rounded-lg border transition-all group ${
                  isDarkMode 
                    ? "bg-slate-900/50 hover:bg-emerald-500/10 border-slate-800 hover:border-emerald-500/30" 
                    : "bg-slate-50 hover:bg-emerald-50 border-slate-100 hover:border-emerald-200"
                }`}
              >
                <Mail className="h-4 w-4 text-emerald-500 mr-3 group-hover:scale-110 transition-transform" />
                <div className="flex-1">
                  <div className="text-[10px] text-slate-500 uppercase">E-posta</div>
                  <div className={`text-xs font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}>hi@tufankoc.net</div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-600" />
              </a>

              <a 
                href="https://linkedin.com/in/tufankoc" 
                target="_blank" 
                rel="noreferrer"
                className={`flex items-center p-2.5 rounded-lg border transition-all group ${
                  isDarkMode 
                    ? "bg-slate-900/50 hover:bg-sky-500/10 border-slate-800 hover:border-sky-500/30" 
                    : "bg-slate-50 hover:bg-sky-50 border-slate-100 hover:border-sky-200"
                }`}
              >
                <Linkedin className="h-4 w-4 text-sky-500 mr-3 group-hover:scale-110 transition-transform" />
                <div className="flex-1">
                  <div className="text-[10px] text-slate-500 uppercase">LinkedIn</div>
                  <div className={`text-xs font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}>linkedin.com/in/tufankoc</div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-600" />
              </a>

              <a 
                href="https://x.com/tufankoc00" 
                target="_blank" 
                rel="noreferrer"
                className={`flex items-center p-2.5 rounded-lg border transition-all group ${
                  isDarkMode 
                    ? "bg-slate-900/50 hover:bg-zinc-100/10 border-slate-800 hover:border-zinc-500/30" 
                    : "bg-slate-50 hover:bg-slate-100 border-slate-100 hover:border-slate-200"
                }`}
              >
                <Twitter className={`h-4 w-4 mr-3 group-hover:scale-110 transition-transform ${isDarkMode ? "text-slate-200" : "text-slate-600"}`} />
                <div className="flex-1">
                  <div className="text-[10px] text-slate-500 uppercase">Twitter / X</div>
                  <div className={`text-xs font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}>@tufankoc00</div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-600" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CORE DASHBOARD CONTENT */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Summary / Mission Panel */}
          <div className={`p-6 rounded-xl border transition-all ${panelStyles} ${isDarkMode ? 'glow-blue' : ''}`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold font-orbitron uppercase tracking-wider flex items-center">
                <Layers className="h-5 w-5 text-sky-500 mr-2" />
                Sistem Vizyonu
              </h2>
              <span className={`text-[10px] px-2 py-0.5 rounded border font-mono-custom ${
                isDarkMode 
                  ? "bg-sky-500/10 text-sky-400 border-sky-500/20" 
                  : "bg-sky-50 text-sky-600 border-sky-100"
              }`}>
                SYS_SUMMARY
              </span>
            </div>
            
            <p className={`leading-relaxed text-sm md:text-base ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
              Finansal piyasaların dinamiğini veri analitiğiyle anlamlandıran ve süreçleri optimize eden bir sistem kurucusuyum. 
              İşletme eğitimim ile edindiğim <b>sermaye piyasaları vizyonunu</b>, akademik temelini aldığım <b>Bilgisayar Programcılığı</b> disipliniyle birleştiriyorum.
              Python ve SQL kullanarak finansal raporlama ve operasyonları dijitalleştiriyor; sürdürülebilir altyapılar inşa ediyorum.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className={`p-6 rounded-xl border space-y-6 ${panelStyles}`}>
            <h2 className="text-lg font-bold font-orbitron uppercase tracking-wider flex items-center border-b pb-3"
                style={{ borderColor: isDarkMode ? '#1e293b' : '#f1f5f9' }}>
              <Briefcase className="h-5 w-5 text-emerald-500 mr-2" />
              Deneyim Geçmişi
            </h2>

            <div className="relative border-l pl-5 ml-2.5 space-y-8"
                 style={{ borderColor: isDarkMode ? '#1e293b' : '#e2e8f0' }}>
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet */}
                  <span className={`absolute -left-[29px] top-1.5 h-4.5 w-4.5 rounded-full border-2 transition-colors flex items-center justify-center ${
                    isDarkMode ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
                  } group-hover:border-emerald-500`}>
                    <span className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      isDarkMode ? "bg-slate-850" : "bg-slate-200"
                    } group-hover:bg-emerald-500`}></span>
                  </span>

                  <div className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className={`font-bold text-sm md:text-base group-hover:text-emerald-500 transition-colors ${
                        isDarkMode ? "text-slate-100" : "text-slate-800"
                      }`}>
                        {exp.title}
                      </h3>
                      <span className="text-[11px] font-mono-custom text-slate-500">
                        {exp.dates}
                      </span>
                    </div>

                    <div className="text-xs font-semibold flex items-center gap-1">
                      {exp.url ? (
                        <a 
                          href={exp.url} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="hover:underline inline-flex items-center gap-0.5 text-sky-600 dark:text-sky-400 hover:text-emerald-500 transition-colors"
                        >
                          {exp.company}
                          <ExternalLink className="h-3 w-3 opacity-70 hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <span className="text-sky-600">{exp.company}</span>
                      )}
                      <span className="text-slate-400">{exp.location && ` • ${exp.location}`}</span>
                    </div>

                    <ul className="list-none space-y-1 pl-0 pt-1">
                      {exp.details.map((detail, dIdx) => (
                        <li key={dIdx} className={`text-xs flex items-start ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                          <span className="text-emerald-500 mr-2 shrink-0">&gt;</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Showcase & Enterprise SaaS */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold font-orbitron uppercase tracking-wider flex items-center">
              <Code className="h-5 w-5 text-sky-500 mr-2" />
              Projeler & Girişimler
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* diyetisyenasistani.com */}
              <div className={`p-5 rounded-xl border hover:border-emerald-500/30 transition-all flex flex-col justify-between group ${panelStyles} ${
                isDarkMode ? 'glow-border-green' : 'hover:shadow-md'
              }`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-mono-custom text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Enterprise SaaS
                    </span>
                    <Globe className="h-4 w-4 text-emerald-500" />
                  </div>
                  <h3 className={`font-bold text-base group-hover:text-emerald-500 transition-colors ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}>
                    diyetisyenasistani.com
                  </h3>
                  <p className={`text-xs mt-2 leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Diyetisyenlere yönelik geliştirilmiş, iş modeli inşası, ürün yönetimi ve operasyonel otomasyonu bizzat yürütülen SaaS girişimi.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between"
                     style={{ borderColor: isDarkMode ? '#1e293b' : '#f1f5f9' }}>
                  <span className="text-[10px] font-mono-custom text-slate-400">Python / React / API</span>
                  <a 
                    href="https://diyetisyenasistani.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-semibold text-emerald-500 hover:underline flex items-center"
                  >
                    Platformu İncele
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Automation Lab */}
              <div className={`p-5 rounded-xl border hover:border-sky-500/30 transition-all flex flex-col justify-between group ${panelStyles} ${
                isDarkMode ? 'glow-border-blue' : 'hover:shadow-md'
              }`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-mono-custom text-sky-550 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                      Automation Lab
                    </span>
                    <FileSpreadsheet className="h-4 w-4 text-sky-500" />
                  </div>
                  <h3 className={`font-bold text-base group-hover:text-sky-500 transition-colors ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}>
                    ./Automation_Lab
                  </h3>
                  <p className={`text-xs mt-2 leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Muhasebe ve finans departmanlarının manuel süreçlerini, veri mutabakatlarını ve raporlama modellerini hızlandıran Python botları.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between"
                     style={{ borderColor: isDarkMode ? '#1e293b' : '#f1f5f9' }}>
                  <span className="text-[10px] font-mono-custom text-slate-400">Python / Pandas / Excel</span>
                  <span className="text-xs font-semibold text-slate-400">Active</span>
                </div>
              </div>

              {/* BIST Analytics */}
              <div className={`p-5 rounded-xl border hover:border-purple-500/30 transition-all flex flex-col justify-between group ${panelStyles}`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-mono-custom text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                      Sermaye Piyasaları
                    </span>
                    <TrendingUp className="h-4 w-4 text-purple-500" />
                  </div>
                  <h3 className={`font-bold text-base group-hover:text-purple-500 transition-colors ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}>
                    BIST / Finansal Raporlama
                  </h3>
                  <p className={`text-xs mt-2 leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Borsa İstanbul şirketlerinin mali tablolarından veri çekip anlamlandıran, bütçeleme ve değerleme analizleri sunan veri hatları.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between"
                     style={{ borderColor: isDarkMode ? '#1e293b' : '#f1f5f9' }}>
                  <span className="text-[10px] font-mono-custom text-slate-400">SQL / Tableau / Analysis</span>
                  <span className="text-xs font-semibold text-slate-400">Static Reports</span>
                </div>
              </div>

              {/* Education & Certs */}
              <div className={`p-5 rounded-xl border space-y-3.5 ${panelStyles}`}>
                <h4 className="text-xs uppercase tracking-wider font-orbitron font-bold text-slate-500 flex items-center">
                  <GraduationCap className="h-4 w-4 mr-1.5 text-yellow-500" />
                  Eğitim & Sertifikalar
                </h4>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className={`font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}>Selçuk Üniversitesi (İşletme)</div>
                    <div className="text-[10px] text-slate-550">Lisans • 2020 - 2026</div>
                  </div>
                  <div className="border-t pt-1.5"
                       style={{ borderColor: isDarkMode ? '#1e293b' : '#f1f5f9' }}>
                    <div className={`font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}>İstanbul Üniversitesi (Bilgisayar Prog.)</div>
                    <div className="text-[10px] text-slate-550">Ön Lisans • 2022 - 2024</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Skill Matrix */}
          <div className={`p-6 rounded-xl border space-y-6 ${panelStyles}`}>
            <h2 className="text-lg font-bold font-orbitron uppercase tracking-wider flex items-center border-b pb-3"
                style={{ borderColor: isDarkMode ? '#1e293b' : '#f1f5f9' }}>
              <Award className="h-5 w-5 text-yellow-500 mr-2" />
              Yetenek Matrisi (Skill Matrix)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillGroups.map((group, gIdx) => (
                <div key={gIdx} className="space-y-3">
                  <h3 className="text-xs font-bold font-mono-custom text-slate-500 uppercase tracking-wide">
                    {group.category}
                  </h3>
                  <div className="space-y-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className={isDarkMode ? "text-slate-300" : "text-slate-655"}>{skill.name}</span>
                          <span className="text-[10px] font-mono-custom text-slate-500">{skill.level}%</span>
                        </div>
                        <div className={`h-1 rounded-full overflow-hidden ${isDarkMode ? "bg-slate-800" : "bg-slate-100"}`}>
                          <div 
                            className="h-full bg-emerald-500/80 rounded-full transition-all duration-500"
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

        </div>

      </div>

      {/* Footer */}
      <footer className={`border-t py-8 px-4 mt-20 relative ${isDarkMode ? "border-slate-900 bg-slate-950/80" : "border-slate-200 bg-slate-100/50"}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-mono-custom space-y-4 md:space-y-0">
          <p className="text-center md:text-left">
            // Unvanlar geçici, stabil ve çalışan sistemler kalıcıdır.
          </p>
          <p className="flex items-center space-x-1">
            <span>&copy; {new Date().getFullYear()} Tufan Koç. All rights reserved.</span>
            <span>•</span>
            <span className="text-emerald-500/70 font-semibold">EOF</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;