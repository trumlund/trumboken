import { motion } from "motion/react";
import { Drum, Music, Award, Users } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-brand rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-brand/20"
          >
            <Drum size={40} className="text-white" />
          </motion.div>
          <h1 className="text-5xl font-bold mb-6">Om Trumboken</h1>
          <p className="text-xl text-neutral-600">
            Historien bakom en av Sveriges mest populära serier för trumundervisning.
          </p>
        </header>

        <div className="prose prose-neutral max-w-none space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Resan mot den perfekta trumskolan</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Trumboken föddes ur behovet av ett läromedel som var både pedagogiskt, 
              stimulerande och tydligt. Christer Teglund, som själv arbetat som 
              trumlärare i över 25 år, började utveckla materialet redan i slutet 
              av 90-talet för att möta sina elevers specifika utmaningar.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Sedan den första utgåvan kom har serien vuxit till att omfatta flera 
              böcker som täcker allt från de mest grundläggande stegen till 
              avancerat spel. Idag används Trumboken flitigt i kulturskolor, 
              studieförbund och av privatlärare runt om i hela landet.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            {[
              { 
                icon: Music, 
                title: "Pedagogiskt fokus", 
                description: "Vi tror på att lära sig genom att spela. Teorin introduceras naturligt i takt med praktiken." 
              },
              { 
                icon: Award, 
                title: "Kvalitet & Erfarenhet", 
                description: "Varje övning har testats och finlipats i verklig undervisning med hundratals elever." 
              },
              { 
                icon: Users, 
                title: "För alla åldrar", 
                description: "Sättet boken är upplagd på passar lika bra för barn som för vuxna nybörjare." 
              },
              { 
                icon: Drum, 
                title: "Komplett system", 
                description: "Från grunderna i bok 1 till avancerade tekniker i bok 3 – en röd tråd genom hela lärandet." 
              },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
                <feature.icon className="text-brand mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <section className="bg-neutral-900 text-white p-12 rounded-[2rem] space-y-6 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Christer Teglund</h2>
              <p className="text-neutral-400 text-lg italic">"Min vision är att göra lärandet lustfyllt och meningsfullt. Att sitta bakom trumsetet ska kännas roligt från första stund."</p>
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-brand rounded-full" />
                <div>
                  <div className="font-bold">Christer Teglund</div>
                  <div className="text-sm text-neutral-500">Författare & Trumlärare</div>
                </div>
              </div>
            </div>
            <Drum size={200} className="absolute -bottom-20 -right-20 text-white/5 rotate-12" />
          </section>
        </div>
      </div>
    </div>
  );
}
