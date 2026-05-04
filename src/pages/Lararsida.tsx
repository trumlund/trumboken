import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Music, Headphones, Award, FileWarning, ExternalLink, Mail, Layout } from "lucide-react";

export default function Lararsida() {
  const sections = [
    {
      id: "spellistor",
      title: "SPELLISTOR",
      description: "Här hittar du alla spellistor till böckerna. Både Spotify och YouTube!",
      icon: Music,
      items: [
        { name: "Alla Spotify-listor i böckerna!", url: "https://open.spotify.com/artist/7nMJpFV1wiUXFjevtrXECB?si=UgoyWYpuTxeSvAzh5WNrQg&nd=1&dlsi=85908dfc813645d0" },
        { name: "Alla videolektioner del 1 (offentliga) som spellista på Youtube", url: "https://www.youtube.com/playlist?list=PLGrOu3RDYprn_NaEN5Jd2vmymMWjeT-z_" },
        { 
          name: "Min lärarkanal på Youtube", 
          description: "Där finns många playalong-videor på kända låtar och annat. Också användbar för flipped classroom.",
          url: "https://www.youtube.com/channel/UCEu7SHxmAkK2yHrLDVqqJ6g" 
        }
      ]
    },
    {
      id: "utan-klick",
      title: "ÖVNINGSLÅTARNA UTAN KLICK",
      description: "Vill du eller dina elever spela upp övningslåtarna utan klick? Kanske med klick i egna hörlurar men inte ut i PA?",
      icon: Headphones,
      items: [
        { name: "Trumboken på Bandcamp.com", url: "https://trumboken.bandcamp.com/" }
      ]
    },
    {
      id: "diplom",
      title: "DIPLOM",
      description: "Här kan du ladda ner diplom till dina elever när de spelat klart böckerna genom att klicka på bilderna nedan.",
      icon: Award,
      images: [
        { img: "https://trumboken.se/wp-content/uploads/2023/05/Diplom-TB1-thumb-768x1013.jpg", url: "https://trumboken.se/wp-content/uploads/2023/05/Diplom-TB1.pdf" },
        { img: "https://trumboken.se/wp-content/uploads/2023/05/Diplom-TB2-thumb-768x1013.jpg", url: "https://trumboken.se/wp-content/uploads/2023/05/Diplom-TB2.pdf" },
        { img: "https://trumboken.se/wp-content/uploads/2023/05/Diplom-TB3-thumb-768x1013.jpg", url: "https://trumboken.se/wp-content/uploads/2023/05/Diplom-TB3.pdf" }
      ],
      items: []
    },
    {
      id: "rattelser",
      title: "RÄTTELSER I BÖCKERNA",
      description: "I del 1 (upplaga 1 & 2) och del 2 (upplaga 1) har några små fel smugit sig in. Här hittar du rättelserna.",
      icon: FileWarning,
      items: [
        { name: "Läs alla rättelser & uppdateringar", url: "/rattelser", isInternal: true }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-bold uppercase tracking-wider mb-6">
            För pedagoger
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-8 uppercase">
            Lärarsida
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto font-medium">
            Här finns spellistor till alla låtar i böckerna, de flesta av övningslåtarna utan klickspår, diplom till eleverna och rättelser till de olika upplagorna!
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-2xl hover:shadow-brand/5 transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-brand group-hover:bg-brand group-hover:text-white transition-all shrink-0">
                  <section.icon size={32} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-black italic mb-4 uppercase tracking-tight">{section.title}</h2>
                  <p className="text-neutral-600 mb-8 leading-relaxed font-medium">
                    {section.description}
                  </p>
                  
                  {(section as any).image && (
                    <div className="mb-8 rounded-2xl overflow-hidden border border-neutral-200 bg-white p-4">
                      <img 
                        src={(section as any).image} 
                        alt={section.title} 
                        className="w-full h-auto max-h-32 object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {(section as any).images && (
                    <div className="mb-8 grid grid-cols-3 gap-3">
                      {(section as any).images.map((imgData: any, idx: number) => (
                        <a 
                          key={idx} 
                          href={typeof imgData === 'string' ? '#' : imgData.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="aspect-[3/4] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md hover:border-brand hover:scale-[1.02] transition-all cursor-pointer"
                        >
                          <img 
                            src={typeof imgData === 'string' ? imgData : imgData.img} 
                            alt={`Diplom ${idx + 1}`} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      item.isInternal ? (
                        <Link
                          key={idx}
                          to={item.url}
                          className="flex flex-col p-4 rounded-xl bg-white border border-neutral-200 text-neutral-900 hover:border-brand hover:text-brand transition-all group/item"
                        >
                          <div className="flex items-center justify-between font-bold">
                            {item.name}
                            <ExternalLink size={18} className="opacity-30 group-hover/item:opacity-100 shrink-0" />
                          </div>
                          {item.description && (
                            <div className="text-sm font-medium text-neutral-500 mt-1 line-clamp-2">
                              {item.description}
                            </div>
                          )}
                        </Link>
                      ) : (
                        <a
                          key={idx}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col p-4 rounded-xl bg-white border border-neutral-200 text-neutral-900 hover:border-brand hover:text-brand transition-all group/item"
                        >
                          <div className="flex items-center justify-between font-bold">
                            {item.name}
                            <ExternalLink size={18} className="opacity-30 group-hover/item:opacity-100 shrink-0" />
                          </div>
                          {item.description && (
                            <div className="text-sm font-medium text-neutral-500 mt-1 line-clamp-2">
                              {item.description}
                            </div>
                          )}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-[3rem] bg-neutral-900 text-white relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,var(--color-brand),transparent)] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <Mail className="mx-auto mb-6 text-brand" size={48} />
            <h2 className="text-3xl font-black italic mb-6 uppercase">Frågor eller feedback?</h2>
            <p className="text-neutral-400 mb-10 text-lg">
              Har du förslag på material som saknas eller vill du veta mer om hur andra lärare jobbar med serien? Vi vill gärna höra från dig!
            </p>
            <a 
              href="mailto:info@trumboken.se"
              className="inline-flex bg-brand text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-dark transition-all hover:scale-105"
            >
              KONTAKTA OSS
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
