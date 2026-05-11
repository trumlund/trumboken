import { motion } from "motion/react";
import { useState } from "react";
import { Play, BookOpen, Star, ChevronRight, Drum, CheckCircle2, Volume2, Plus } from "lucide-react";
import { Link } from "react-router-dom";

import { BOOKS } from "../constants/books";
import PDFViewer from "../components/PDFViewer";

const TESTIMONIALS = [
  {
    text: "Äntligen en trumskola som känns modern, med en tydlig pedagogisk idé, bra progression, gediget innehåll och grymt bra play-alongs. Ser fram emot fler böcker!",
    author: "LUCAS EDMAN",
    title: "Ulricehamns kulturskola"
  },
  {
    text: "Jag rekommenderar varmt dessa böcker med alla musikexempel som ger elever musikalisk kontext och spelglädje! Pedagogiska och tydliga, ett bra underlag för både elev och lärare.",
    author: "SAM LUNDBERG",
    title: "Slagverkslärare"
  },
  {
    text: "Fantastiskt bra och breda böcker! Stor glädje när eleverna självmant vill spela Radetsky March på konsert och en elev blev nyfiken på vispspel i del2 och nu spelar Sonny Rollins!",
    author: "JOHN FERNOLD",
    title: "Mejeriets musikskola, Lund"
  },
  {
    text: "Toppen böcker med bra progression!",
    author: "JOHAN GRUNDTMAN",
    title: "Älvsbyns kulturskola"
  },
  {
    text: "Riktigt trevliga trumböcker med ett bra innehåll och upplägg!",
    author: "JOHAN STRÖMBERG",
    title: "Skellefteå kulturskola"
  },
  {
    text: "Fantastiskt multimodalt undervisningsmaterial och väl uttänkt upplägg! Mina både yngre och äldre elever använder böckerna. Rekommenderar starkt!",
    author: "LOVISA FHINN",
    title: "Forshaga kulturskola"
  },
  {
    text: "Äntligen en modern, rolig bok för alla som vill spela trumset, även de yngsta nybörjarna!",
    author: "SIMON LILJEBLAD",
    title: "Upplands-Bro kulturskola"
  },
  {
    text: "Den bästa svenska trumboken med kreativa sätt att lära sig spela!",
    author: "LINA ANDERBERG",
    title: "Frilanstrummis, Zara Larsson m.fl."
  },
  {
    text: "Vi använder alla böckerna! En favorit är komp-kombo, ett naturligt steg för att utveckla mer avancerat trumspel.",
    author: "MARTIN SALOMONSSON",
    title: "Kulturskolan Göteborg"
  },
  {
    text: "Kommer!",
    author: "STEFAN STURESSON",
    title: "Kulturskolan Vaggeryd"
  },
  {
    text: "Jag använder Trumboken med alla nybörjarelever och kan verkligen rekommendera den på grund av bredden och den långsamma progressionen. Stort plus för videorna som hör till varje moment!",
    author: "MATTIAS PUTTONEN",
    title: "Solna kulturskola"
  },
  {
    text: "Vi använder del 1 med alla nya elever. Tydligt skriven bok med en bra progression och bra förslag på låtar för elever att spela. Inte för lätt och inte för svår!",
    author: "JARL KYNKÄÄNNIEMI",
    title: "Linköpings kulturskola"
  },
  {
    text: "Trumboken är jättebra, roliga låtar och jag gillar knep&knåp!",
    author: "JULIA, 10 ÅR",
    title: "Slagverkselev"
  }
];

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const visibleTestimonials = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 9);
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24 lg:py-40 min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://trumboken.se/wp-content/uploads/2026/05/ChatGPT-Image-8-maj-2026-14_44_29.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-950/45 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/30 border border-brand/50 text-white text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
              <Drum size={14} className="text-brand" /> Sveriges enda multimodala trumbokserie
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-10 leading-[0.9] text-white italic uppercase tracking-tighter">
              Lär dig spela <span className="text-brand">trumset</span>
            </h1>
            <p className="text-xl text-neutral-200 mb-10 max-w-lg leading-relaxed font-medium">
              Trumboken är en metodisk och stimulerande bokserie som tar dig 
              hela vägen från de första slagen till avancerat spel.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#valj-bok"
                className="bg-brand text-white px-10 py-5 rounded-2xl font-black italic uppercase text-lg hover:bg-brand-dark transition-all shadow-2xl shadow-brand/40 flex items-center gap-3 transform hover:-translate-y-1 active:scale-95"
              >
                LÄS MER <ChevronRight size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="video"
            className="bg-white/5 backdrop-blur-sm p-4 rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            <div className="video-container rounded-[2rem] overflow-hidden shadow-inner bg-black relative group">
              <iframe
                src={`https://www.youtube.com/embed/nvU2AWSQ0iI?autoplay=1&mute=${isMuted ? 1 : 0}&controls=1&loop=1&playlist=nvU2AWSQ0iI&rel=0`}
                title="Trumboken Introduktion"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:scale-110 z-20"
              >
                {isMuted ? (
                  <Volume2 size={24} className="opacity-50" />
                ) : (
                  <Volume2 size={24} className="text-brand" />
                )}
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 -right-64 w-128 h-128 bg-brand/5 rounded-full blur-3xl -z-10" />
      </section>


      {/* Alla kan trumma! Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-medium text-neutral-900 mb-6">Alla kan trumma!</h2>
            <p className="text-xl text-neutral-700 leading-relaxed font-medium">
              Med tydliga förklaringar och alla videolektioner kommer du som nybörjare snabbt igång att spela – inga förkunskaper krävs!
            </p>
          </div>
          
          <div className="space-y-8 text-lg text-neutral-600 leading-relaxed">
            <p>
              Med övningslåtarna och massor av förslag på kända hits lär du dig spela olika musikstilar från hela världen. Du utvecklar ditt gehör, musikalitet, lär dig notläsning och förståelsen som musik som språk!
            </p>
            
            <p>
              Här på trumboken.se hittar du också en nybörjarguide, lättlästa noter på vissa låtförslag, praktiska tips och en lärarsida med pedagogiska resurser.
            </p>
            
            <p className="text-2xl font-display font-bold text-brand text-center pt-4">
              Nu spelar vi!
            </p>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section id="valj-bok" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-6 uppercase tracking-tight">Vilken bok passar dig bäst?</h2>
            <p className="text-xl text-neutral-600">
              Hela bokserien har en gradvis proggression!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Del 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl flex flex-col items-center text-center p-8 shadow-md hover:shadow-xl transition-all border border-neutral-100"
            >
              <div className="w-full aspect-[4/3] mb-8 bg-neutral-100/50 rounded-xl overflow-hidden relative flex items-center justify-center p-4">
                <img 
                  src={BOOKS[0].imageUrl} 
                  alt={BOOKS[0].title} 
                  className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase text-neutral-800">{BOOKS[0].title}</h3>
              <p className="text-neutral-600 mb-8 max-w-[250px]">
                För nybörjare i alla åldrar från lågstadieålder, inga förkunskaper krävs.
              </p>
              <div className="mt-auto w-full">
                <Link 
                  to={`/bocker/${BOOKS[0].id}`}
                  className="w-full inline-flex justify-center items-center gap-2 py-3 bg-neutral-50 text-neutral-900 font-bold rounded-xl hover:bg-neutral-100 transition-colors uppercase text-xs tracking-widest"
                >
                  Läs mer
                </Link>
              </div>
            </motion.div>

            {/* Del 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl flex flex-col items-center text-center p-8 shadow-md hover:shadow-xl transition-all border border-neutral-100"
            >
              <div className="w-full aspect-[4/3] mb-8 bg-neutral-100/50 rounded-xl overflow-hidden relative flex items-center justify-center p-4">
                <img 
                  src={BOOKS[1].imageUrl} 
                  alt={BOOKS[1].title} 
                  className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase text-neutral-800">{BOOKS[1].title}</h3>
              <p className="text-neutral-600 mb-8 max-w-[250px]">
                För dig som har kommit en bit med spelandet och vill utvecklas mer.
              </p>
              <div className="mt-auto w-full">
                <Link 
                  to={`/bocker/${BOOKS[1].id}`}
                  className="w-full inline-flex justify-center items-center gap-2 py-3 bg-neutral-50 text-neutral-900 font-bold rounded-xl hover:bg-neutral-100 transition-colors uppercase text-xs tracking-widest"
                >
                  Läs mer
                </Link>
              </div>
            </motion.div>

            {/* Del 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl flex flex-col items-center text-center p-8 shadow-md hover:shadow-xl transition-all border border-neutral-100"
            >
              <div className="w-full aspect-[4/3] mb-8 bg-neutral-100/50 rounded-xl overflow-hidden relative flex items-center justify-center p-4">
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/40 backdrop-blur-[1px]">
                  <div className="bg-white/90 px-6 py-2 shadow-sm border border-neutral-200">
                    <span className="text-neutral-900 font-bold italic uppercase tracking-wider text-sm">Utgivning kommer!</span>
                  </div>
                </div>
                <img 
                  src={BOOKS[2].imageUrl} 
                  alt={BOOKS[2].title} 
                  className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500 opacity-50 grayscale-[0.5]"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase text-neutral-800">{BOOKS[2].title}</h3>
              <p className="text-neutral-600 mb-8 max-w-[250px]">
                För dig som vill utvecklas och fördjupa dig på avancerad nivå.
              </p>
              <div className="mt-auto w-full">
                <Link 
                  to={`/bocker/${BOOKS[2].id}`}
                  className="w-full inline-flex justify-center items-center gap-2 py-3 bg-neutral-50 text-neutral-900 font-bold rounded-xl hover:bg-neutral-100 transition-colors uppercase text-xs tracking-widest"
                >
                  Läs mer
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Vad säger användarna?</h2>
            <p className="text-neutral-500 font-medium uppercase tracking-widest text-sm mb-8">Sagt om Trumboken</p>
            <div className="flex justify-center gap-1 text-brand">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 3) * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 flex flex-col justify-between"
              >
                <div className="text-neutral-700 text-lg leading-relaxed mb-8">
                  "{t.text}"
                </div>
                <div>
                  <div className="font-medium text-neutral-900 uppercase tracking-wide">{t.author}</div>
                  <div className="text-sm text-neutral-500">{t.title}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {!showAll && TESTIMONIALS.length > 9 && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 text-brand font-bold text-lg hover:gap-3 transition-all p-4 px-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-xl group"
              >
                Visa fler <Plus size={20} className="group-hover:rotate-90 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PDF / DFlip Preview replacement section */}
      <section className="py-24 px-4 bg-neutral-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/20 text-brand text-xs font-bold uppercase tracking-wider mb-6">
              Prova på gratis
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 italic uppercase tracking-tighter">Bläddra i Trumboken del 1</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed text-lg">
              Ta en tjuvtitt! Här kan du bläddra direkt i boken och se hur den ser ut inuti.
            </p>
            
            <div className="bg-neutral-800/50 p-6 rounded-xl border border-neutral-700 inline-block">
              <p className="text-sm text-neutral-400 leading-relaxed italic">
                <span className="text-brand font-bold not-italic">OBS!</span> Böckerna har spiralbindning (wire-o) och blir därför enkla att ha på ett notställ!
              </p>
            </div>
          </div>
          
          <div id="pdf-viewer" className="mt-8">
            <PDFViewer />
          </div>
        </div>
      </section>

      {/* Retailers Section */}
      <section id="aterforsaljare" className="py-24 px-4 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Butiker</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Köp Trumboken via dessa återförsäljare, i din lokala musikaffär eller hos bokhandlarna på nätet (Google).
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Notposten", url: "https://notposten.se/search?q=trumboken" },
              { name: "Slagverket", url: "https://slagverket.com" },
              { name: "Trumslagaren", url: "https://trumslagaren.se" },
              { name: "musikskolan.se", url: "https://musikskolan.se" }
            ].map((retailer, i) => (
              <a 
                key={i}
                href={retailer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-2xl bg-[#e6fcfa] border border-cyan-100 flex flex-col items-center justify-center hover:bg-white hover:shadow-xl hover:border-brand/20 transition-all font-sans"
              >
                <div className="text-xl font-bold text-neutral-900 group-hover:text-brand transition-colors mb-2">
                  {retailer.name}
                </div>
                <div className="text-xs text-neutral-400 font-bold uppercase tracking-widest">
                  Besök butik
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 text-center text-sm text-neutral-400 italic">
            * Priserna kan variera mellan olika återförsäljare.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 px-4 text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://trumboken.se/wp-content/uploads/2023/10/DSC00067-2.webp" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-950/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-white drop-shadow-lg">
            Redo att börja din resa?
          </h2>
          <Link
            to="/bocker"
            className="inline-flex items-center gap-2 bg-brand text-white px-12 py-6 rounded-2xl font-black italic uppercase text-xl hover:bg-white hover:text-brand transition-all shadow-2xl shadow-black/40 transform hover:-translate-y-1 active:scale-95"
          >
            LÄS MER <ChevronRight size={28} />
          </Link>
        </div>
      </section>
    </div>
  );
}
