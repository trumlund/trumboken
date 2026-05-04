import { motion } from "motion/react";
import { Mail, Instagram, Facebook, Youtube } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-bold uppercase tracking-wider mb-6">
            Författaren
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-8 uppercase">
            Christer Teglund
          </h1>
        </header>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2 lg:w-2/5 shrink-0"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand/10 border-8 border-white bg-neutral-100 aspect-[4/5] relative">
              <img 
                src="input_file_0.png" 
                alt="Christer Teglund" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-8 py-4"
          >
            <div className="prose prose-neutral prose-xl max-w-none">
              <p className="font-bold text-neutral-900 leading-tight">
                Christer Teglund är legitimerad musiklärare och har undervisat i trummor i över 25 år. 
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Han har arbetat på kulturskolor, gymnasieskolor och musikhögskolor. Christer är författare till den populära serien Trumboken som idag används av tusentals elever runt om i Sverige.
              </p>
              <p className="text-neutral-600 leading-relaxed font-medium italic border-l-4 border-brand pl-6 py-2">
                "Min vision är att göra lärandet lustfyllt och meningsfullt. Att sitta bakom trumsetet ska kännas roligt från första stund."
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Vid sidan om sitt författarskap och läraryrke är Christer aktiv som musiker i olika sammanhang. Trumboken föddes ur en önskan att skapa ett material som är både pedagogiskt genomtänkt och samtidigt modernt och inspirerande för dagens elever.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a href="https://instagram.com/trumboken.se" target="_blank" rel="noopener noreferrer" className="p-5 rounded-2xl bg-neutral-50 text-neutral-600 hover:bg-brand hover:text-white transition-all hover:scale-110">
                <Instagram size={28} />
              </a>
              <a href="https://facebook.com/trumboken" target="_blank" rel="noopener noreferrer" className="p-5 rounded-2xl bg-neutral-50 text-neutral-600 hover:bg-brand hover:text-white transition-all hover:scale-110">
                <Facebook size={28} />
              </a>
              <a href="https://www.youtube.com/channel/UChAgRttWFgVc2UcbJQnd7Cw" target="_blank" rel="noopener noreferrer" className="p-5 rounded-2xl bg-neutral-50 text-neutral-600 hover:bg-brand hover:text-white transition-all hover:scale-110">
                <Youtube size={28} />
              </a>
              <a href="mailto:info@chreator.se" className="p-5 rounded-2xl bg-neutral-50 text-neutral-600 hover:bg-brand hover:text-white transition-all hover:scale-110">
                <Mail size={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

