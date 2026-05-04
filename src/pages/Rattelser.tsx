import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, AlertCircle, CheckCircle2, Info } from "lucide-react";
import { Link } from "react-router-dom";

const corrections = [
  {
    title: "TRUMBOKEN DEL 1 (upplaga 1)",
    items: [
      "Fel låtar angivna i låtlistan på sid 6 – låtarna för Komp1:e ”Tack förlåt” och ”Free Your Mind” saknas. Låtarna för Komp1:f ska vara ”All I Have To Do Is Dream” och ”Let There Be Drums”.",
      "Startreprisen på fjärde raden saknas på sid 39."
    ]
  },
  {
    title: "TRUMBOKEN DEL 1 (upplaga 2)",
    items: [
      "Sid 6: Låtlistan uppdaterad med saknade låtar (Tack förlåt, Free Your Mind, All I Have To Do Is Dream och Let There Be Drums) samt ytterligare låtförslag.",
      "Uppdaterade låtförslag för Komp 1:c, d, Komp 2:a, d, e, f, g och Komp 3:d, f.",
      "Sid. 21: Notpekare ”hihat-pedalen”.",
      "Sid. 25: Uppd. videolektion med två förklaringssätt.",
      "Sid 27, 28: Utmaningen!",
      "Sid. 29: Låtförslag Wrecking Ball.",
      "Sid 39: saknat repristecken åtgärdat (startreprisen på fjärde notraden).",
      "Fler roliga åldersneutrala grafiska element i boken.",
      "Videolektioner finns nu till duetterna."
    ]
  },
  {
    title: "TRUMBOKEN DEL 1 (upplaga 3, slutlig)",
    items: [
      "Färglägg bilder",
      "Level ups",
      "Trumpodden-länkar",
      "Knep & knåp 1 & 2 uppdaterade.",
      "Sid 17: Fill ins 1:d-e har bytt plats.",
      "Sid 19: Bonuslåt 1",
      "Sid 24: Sextondelskomp ”balladkomp”",
      "Sid 24: Bonuslåt 2",
      "Sid 30: Crashcymbaler tillagda i Trumsolo 4",
      "Sid 30: Kantslag",
      "Sid 54: Min övning"
    ]
  },
  {
    title: "TRUMBOKEN DEL 2 (Upplaga 1, andra tryckningen, 2023)",
    isMinor: true,
    items: [
      "Sid 13 Koordination 4 – uppdaterad",
      "Rytmramsor 4 flyttad från sid 28 till 18",
      "Sid 19 Improvisation flyttad från sid 29 till 19",
      "Sid 20 Komp 7 flyttad från sid 18 till 20"
    ]
  }
];

const Rattelser = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/lararsida" 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-brand font-bold transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Tillbaka till Lärarsidan
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
              <AlertCircle size={28} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight italic uppercase">
              Rättelser <span className="text-brand">& Updgates</span>
            </h1>
          </div>
          <p className="text-xl text-neutral-600 font-medium">
            Här listar vi kända felaktigheter och större uppdateringar mellan olika upplagor av Trumboken.
          </p>
        </header>

        <div className="space-y-8">
          {corrections.map((section, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                {section.isMinor ? (
                  <Info className="text-blue-500 shrink-0" size={24} />
                ) : (
                  <CheckCircle2 className="text-brand shrink-0" size={24} />
                )}
                <h2 className="text-2xl font-black text-neutral-900 italic uppercase">
                  {section.title}
                </h2>
              </div>
              
              {section.isMinor && (
                <p className="text-sm font-bold text-blue-600 mb-4 bg-blue-50 inline-block px-3 py-1 rounded-full uppercase tracking-wider">
                  Små revideringar
                </p>
              )}

              <ul className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-3 text-neutral-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 mt-2.5 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>

        <div className="mt-16 bg-brand/5 rounded-3xl p-8 border border-brand/20 text-center">
          <p className="text-neutral-700 font-bold mb-4 italic uppercase">
            Hittat något annat fel?
          </p>
          <p className="text-neutral-600 font-medium mb-6">
            Vi jobbar ständigt med att förbättra böckerna. Om du hittar något som verkar tokigt får du gärna höra av dig på Facebook eller mail.
          </p>
          <a
            href="mailto:info@trumboken.se"
            className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-brand text-white font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand/25 uppercase italic"
          >
            Kontakta oss
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rattelser;
