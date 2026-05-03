import { motion } from "motion/react";
import { Play, BookOpen, Star, ChevronRight, Drum, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { BOOKS } from "../constants/books";
import PDFViewer from "../components/PDFViewer";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-50 px-4 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-6">
              <Drum size={14} /> Sveriges enda multimodala trumbokserie
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1]">
              Lär dig spela <span className="text-brand">trumset.</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8 max-w-lg leading-relaxed">
              Trumboken är en metodisk och stimulerande serie spelböcker som tar dig 
              hela vägen från de första slagen till avancerat spel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/bocker"
                className="bg-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-all shadow-xl shadow-brand/20 flex items-center gap-2"
              >
                Se alla böcker <ChevronRight size={20} />
              </Link>
              <a
                href="#video"
                className="bg-white text-neutral-900 border border-neutral-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-100 transition-all flex items-center gap-2"
              >
                <Play size={20} className="text-brand fill-brand" /> Se introduktion
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="video"
            className="bg-white p-4 rounded-3xl shadow-2xl shadow-neutral-200"
          >
            <div className="video-container rounded-2xl overflow-hidden shadow-inner bg-neutral-900">
              <iframe
                src="https://www.youtube.com/embed/wX-y0M_fLzg"
                title="Trumboken Introduktion"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 -right-64 w-128 h-128 bg-brand/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Stats/Benefits */}
      <section className="py-24 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Böcker i serien", value: "5+" },
            { label: "År av erfarenhet", value: "25+" },
            { label: "Nöjda elever", value: "10k+" },
            { label: "Nivåer", value: "Allt" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-display font-bold text-brand mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-500 uppercase tracking-widest font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-24 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Utforska bokserien</h2>
              <p className="text-neutral-600 max-w-xl">
                Varje bok är noggrant utformad för att ge dig rätt verktyg vid rätt tillfälle. 
                Från de första takterna till avancerade polyrytmer.
              </p>
            </div>
            <Link to="/bocker" className="text-brand font-bold hover:underline flex items-center gap-1">
              Visa alla <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BOOKS.map((book, i) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-neutral-100"
              >
                <div className="aspect-[3/4] overflow-hidden bg-neutral-200">
                  <img 
                    src={book.imageUrl} 
                    alt={book.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-brand text-xs font-bold mb-2 uppercase">{book.subtitle}</div>
                  <h3 className="text-xl font-bold mb-3">{book.title}</h3>
                  <p className="text-sm text-neutral-500 mb-6 line-clamp-2">
                    {book.description}
                  </p>
                  <Link 
                    to={`/bocker/${book.id}`}
                    className="w-full inline-flex justify-center items-center gap-2 py-3 bg-neutral-50 text-neutral-900 font-bold rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                    Läs mer
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Vad säger användarna?</h2>
            <div className="flex justify-center gap-1 text-brand">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Bästa trumskolan jag använt. Pedagogisk och rolig!",
                author: "Mikael, trumlärare"
              },
              {
                text: "Trumboken 1 gjorde att jag lärde mig grunderna på nolltid.",
                author: "Sara, elev"
              },
              {
                text: "Perfekt struktur för både självstudier och undervisning.",
                author: "Anders, frilansmusiker"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-neutral-50 relative">
                <div className="text-neutral-600 italic mb-6">"{t.text}"</div>
                <div className="font-bold text-neutral-900">— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF / DFlip Preview replacement section */}
      <section className="py-24 px-4 bg-neutral-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/20 text-brand text-xs font-bold uppercase tracking-wider mb-6">
                Prova på gratis
              </div>
              <h2 className="text-4xl font-bold mb-6">Bläddra i Trumboken</h2>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Här kan du titta närmare på några exempelsidor ur Trumboken 1. 
                Se själv hur pedagogiskt upplagd serien är.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Se notexempel och illustrationer",
                  "Få en känsla för metodiken",
                  "Ingen nedladdning krävs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => document.getElementById('pdf-viewer')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-dark transition-all flex items-center gap-2"
              >
                <BookOpen size={20} /> Öppna interaktiv preview
              </button>
            </div>
            
            <div id="pdf-viewer" className="relative h-[500px]">
              <PDFViewer />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center">
        <h2 className="text-5xl font-bold mb-8">Redo att börja din resa?</h2>
        <Link
          to="/bocker"
          className="inline-flex items-center gap-2 bg-brand text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-dark transition-all shadow-2xl shadow-brand/40"
        >
          Se alla spelböcker <ChevronRight size={24} />
        </Link>
      </section>
    </div>
  );
}
