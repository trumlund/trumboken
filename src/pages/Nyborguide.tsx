import { motion } from "motion/react";
import { BookOpen, HelpCircle, CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Nyborguide() {
  const steps = [
    {
      title: "Välj rätt trumset",
      description: "Ska du ha ett akustiskt eller digitalt set? Vi går igenom vad som passar bäst för dina förutsättningar."
    },
    {
      title: "Hitta trumpinnar som passar",
      description: "Vilken storlek är bäst för en nybörjare? 5A, 7A eller något annat?"
    },
    {
      title: "Sitt rätt bakom trummorna",
      description: "Ergonomi är viktigt för att undvika skador och kunna spela avslappnat."
    },
    {
      title: "Dina första slag",
      description: "Lär dig grundläggande grepp och hur du får bäst ljud ur dina trummor."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-flex p-3 rounded-2xl bg-brand/10 text-brand mb-6">
            <BookOpen size={32} />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-neutral-900">Nybörjarguide</h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Välkommen till trummornas värld! Här får du svar på de vanligaste frågorna när du ska börja spela.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 relative group hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="text-brand font-bold mb-2">Steg 0{i + 1}</div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-neutral-600 mb-6">{step.description}</p>
              <div className="absolute top-8 right-8 text-neutral-200 group-hover:text-brand/20 transition-colors">
                <CheckCircle2 size={40} />
              </div>
            </motion.div>
          ))}
        </div>

        <section className="bg-neutral-900 text-white rounded-[2.5rem] p-12 overflow-hidden relative">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-bold mb-6">Börja resan med Trumboken 1</h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              Trumboken 1 är speciellt framtagen för att ge nybörjaren en flygande start. 
              Med pedagogiska videolektioner och roliga övningar kommer du snabbt igång.
            </p>
            <Link 
              to="/bocker/trumboken-1"
              className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-dark transition-all"
            >
              Läs mer om boken <ChevronRight size={20} />
            </Link>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand/10 rounded-full blur-3xl" />
        </section>
      </div>
    </div>
  );
}
