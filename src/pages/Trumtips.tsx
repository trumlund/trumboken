import { motion } from "motion/react";
import { Lightbulb, Info, Share2, Music2, ExternalLink, ArrowRight, BookOpen, Volume2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Trumtips() {
  const sections = [
    {
      id: "nyborjare",
      title: "Nybörjarguide",
      icon: BookOpen,
      content: "Välkommen till trummornas värld! Vår kompletta nybörjarguide guidar dig som är helt grön steg-för-steg genom den spännande starten. Vi hjälper dig att välja rätt typ av trumset (akustiskt eller digitalt utifrån dina hemförhållanden), visar hur du hittar rätt storlek på trumpinnar (t.ex. de mångsidiga 5A eller tunnare 7A för de mindre händerna), går igenom hälsa och ergonomi för att du ska sitta helt rätt bakom setet utan skador, samt ger praktiska tips för att göra dina allra första slag med perfekt kontroll och spelkänsla.",
      link: "/nyborjarguide",
      linkText: "Läs nybörjarguiden",
      image: "/src/assets/images/drumsticks_on_snare_1781457481882.jpg"
    },
    {
      id: "ag-ditt-ovande",
      title: "Äg ditt övande!",
      icon: Sparkles,
      content: (
        <div className="space-y-4">
          <p>
            Kan du leka dig till att bli en bättre musiker? Svaret är självklart JA. Jag säger <em>”spela och ha kul!”</em> i vissa av videolektionerna och med det menar jag att spela i sig är kul och det kan vara gott nog för vissa av oss – att spela till en låt vi gillar just nu osv. Vad musik betyder för oss och hur den motiverar oss är helt individuellt. Vissa får ambitionen att bli yrkesmusiker medan andra är nöjda med att spela lite ibland.
          </p>
          <p>
            Jag brukar skilja på <em>spelande</em> och <em>övande</em> – övandet är fokuserat på utveckling och förbättring, spelandet är när vi skördar frukten av allt vi hittills har lärt oss och spelar – för oss själva, med andra eller inför andra.
          </p>
          <p>
            Har du funderat över hur du oftast föredrar att öva/lära? Gillar du att leka och växla ofta mellan olika övningar och fritt spelande, eller att nöta strukturerat och tidsbestämt? Gör dig själv medveten om vad som funkar bäst för dig.
          </p>
          <p>
            Var kreativ och hitta på nya övningar av de du har lärt dig, lek med dem! Övningar i såväl Trumboken som i andra böcker/på nätet. Sprid dina nya övningar till alla oss andra sedan också!
          </p>
          <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-100 mt-2">
            <span className="font-bold text-neutral-800 block mb-2 text-base">Exempel:</span>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Spela övningarna/duetterna omvänt med händerna (alternerat), baklänges, fram och tillbaka, med dubbelslag, med olika paradiddlar, med andra rudiments (flams osv.), med fötterna (och hitta en stabil balans på trumstolen), hitta på texter eller melodier till dem, utlagda på trumsetet i olika kombinationer, improvisera utifrån dem. Testa om de kan bli häftiga nya trumkomp/fills! Är ni flera spelare kan ni dela upp och komponera, bestäm vem som spelar vad och när osv.
            </p>
          </div>
        </div>
      ),
      image: "/src/assets/images/drummer_live_concert_show_1781468702406.jpg"
    },
    {
      id: "digital",
      title: "Digital-trumset?",
      icon: Volume2,
      content: "Många väljer idag ett digitalt trumset för att kunna öva hemma utan att störa grannar eller familj. De har blivit fantastiskt bra och har numera tysta trumskinn (mesh heads/nätfällar) som ger en realistisk studs. Det finns dock viktiga skillnader i spelkänsla, dynamik och ljudåtergivning jämfört med akustiska trummor. Här går vi igenom vad du bör hålla utkik efter inför köpet, så som stabila pedaler, nättrummor med bra dämpning, inbyggda play-along-spår och trummodulens anslutningsmöjligheter.",
      image: "/src/assets/images/electronic_drum_kit_1781457500210.jpg"
    },
    {
      id: "noter",
      title: "Behöver jag kunna noter?",
      icon: Music2,
      content: "Det korta svaret är nej, inte för att börja ha superkul! Men notläsning är ett ovärderligt verktyg för att snabbare lära dig nya låtar, hålla ordning på komplexa fills och spara tid. Trumnoter är faktiskt mycket enklare än traditionella melodinoter, eftersom varje del av trumsetet (virvel, bastrumma, cymbaler) har en fast och logisk plats på notlinjerna. I Trumboken lär vi oss notläsning naturligt och steg-för-steg genom bilder, ramsor och korta videoflikar.",
      image: "/src/assets/images/sheet_music_drums_1781457516361.jpg"
    }
  ];

  const externalLinks = [
    { name: "Drummerworld", url: "https://www.drummerworld.com", desc: "Världens största databas med trummisar, biografier och legendariska videor." },
    { name: "Drumeo Youtube", url: "https://www.youtube.com/user/freedrumlessons", desc: "Hundratals gratis videolektioner, artistbesök och pedagogiska utmaningar." },
    { name: "Vic Firth Education", url: "https://vicfirth.zildjian.com/education", desc: "Genomtänkt material för teknikövning, rudiment och spelstilar för alla nivåer." }
  ];

  return (
    <div className="pt-32 pb-24 px-4 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-widest mb-6"
          >
            <Lightbulb size={16} /> TRUMTIPS & GUIDER
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase text-neutral-900 mb-6 tracking-tight"
          >
            TRUMTIPS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed"
          >
            Här har vi samlat pedagogiska råd, guider och djupgående inspiration för dig som spelar eller vill börja spela trummor.
          </motion.p>
        </header>

        {/* Section Cards */}
        <div className="space-y-16">
          {sections.map((section, i) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-md border border-neutral-100 overflow-hidden"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center`}>
                
                {/* Text Content Column */}
                <div className={`lg:col-span-7 flex flex-col justify-center space-y-6 ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand/10 text-brand rounded-2xl flex items-center justify-center shrink-0">
                      <section.icon size={24} />
                    </div>
                    <span className="text-sm font-black italic uppercase tracking-widest text-brand">Tips 0{i+1}</span>
                  </div>

                  <h2 className="text-3xl font-black italic uppercase text-neutral-900 tracking-wide">
                    {section.title}
                  </h2>
                  
                  <div className="text-neutral-600 leading-relaxed text-lg">
                    {section.content}
                  </div>
                  
                  {section.link && (
                    <div className="pt-2">
                      <Link 
                        to={section.link}
                        className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-black italic uppercase tracking-wider hover:bg-brand-dark transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand/20"
                      >
                        {section.linkText} <ArrowRight size={20} />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Cover/Image Column */}
                <div className="lg:col-span-5 relative">
                  <div className="absolute -inset-4 bg-brand/5 rounded-[2.5rem] blur-2xl -z-10" />
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-auto object-cover rounded-[2rem] shadow-xl border-4 border-white aspect-[4/3]" 
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>
            </motion.section>
          ))}

          {/* Links Section Card */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-md border border-neutral-100"
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="w-12 h-12 bg-neutral-100 text-neutral-900 rounded-2xl flex items-center justify-center shrink-0">
                  <Share2 size={24} />
                </div>
                <div>
                  <span className="text-xs font-black italic uppercase tracking-widest text-neutral-400 block">Inspiration</span>
                  <h2 className="text-3xl font-black italic uppercase text-neutral-900 tracking-wide">
                    Roliga länkar - Trumset
                  </h2>
                </div>
              </div>

              <p className="text-neutral-600 text-center text-lg leading-relaxed mb-12">
                Internet är fullt av truminspiration! Här har vi samlat några av våra absoluta favoritställen för att titta på legendariska trummisar, ladda ner material och hitta nya spännande grooves att foga till din arsenal.
              </p>

              <div className="space-y-4">
                {externalLinks.map((link, j) => (
                  <motion.a
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-all border border-neutral-100 hover:border-neutral-200 group gap-4 shadow-sm"
                  >
                    <div className="space-y-1">
                      <span className="font-black italic uppercase tracking-wider text-neutral-900 group-hover:text-brand transition-colors text-lg">
                        {link.name}
                      </span>
                      <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                        {link.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-brand font-bold self-start sm:self-center shrink-0 group-hover:gap-3 transition-all">
                      <span className="text-sm italic uppercase tracking-wider">Besök</span>
                      <ExternalLink size={18} className="text-brand" />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Informative message for user to attach photos */}
              <div className="bg-brand-darker p-8 rounded-[2rem] text-white mt-12 text-center shadow-lg">
                <h3 className="font-black italic uppercase tracking-wider text-xl mb-3">Vill du byta ut bilderna?</h3>
                <p className="text-sm text-neutral-200 leading-relaxed font-medium max-w-xl mx-auto">
                  Vi har skapat och lagt in helt nytagna, högupplösta illustrationer som passar trumbokens varma stil perfekt. Om du vill ha exakt de gamla bilderna från din WordPress-sida kan du helt enkelt ladda upp dem här i chatten så lägger vi genast in dem!
                </p>
              </div>

            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

