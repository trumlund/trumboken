import { motion } from "motion/react";
import { Lightbulb, Info, Share2, Music2, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Trumtips() {
  const sections = [
    {
      id: "nyborjare",
      title: "Nybörjarguide",
      icon: Info,
      content: "Är du nyfiken på att börja spela trummor? Vår nybörjarguide är den perfekta startpunkten för dig som aldrig hållit i ett par trumpinnar tidigare. Vi går igenom allt från grunderna till vad du behöver köpa.",
      link: "/nyborjarguide",
      linkText: "Läs nybörjarguiden"
    },
    {
      id: "digital",
      title: "Digital-trumset?",
      icon: Lightbulb,
      content: "Många väljer idag ett digitalt trumset för att kunna öva hemma utan att störa grannarna. De har blivit fantastiskt bra, men det finns skillnader i spelkänsla jämfört med akustiska trummor. Här går vi igenom vad du bör tänka på innan köp.",
      linkText: "Läs mer om digitaltrummor"
    },
    {
      id: "noter",
      title: "Behöver jag kunna noter?",
      icon: Music2,
      content: "Det korta svaret är nej, inte för att börja ha kul! Men notläsning är ett fantastiskt verktyg för att lära sig nya låtar och tekniker mer effektivt. I Trumboken lär vi oss trumnoter steg-för-steg på ett enkelt sätt.",
    },
    {
      id: "lankar",
      title: "Roliga länkar - Trumset",
      icon: Share2,
      content: "Internet är fullt av inspiration! Vi har samlat några av våra favoritställen för att titta på grymma trumslagare och lära sig nya coola grooves.",
      links: [
        { name: "Drummerworld", url: "https://www.drummerworld.com" },
        { name: "Drumeo Youtube", url: "https://www.youtube.com/user/freedrumlessons" },
        { name: "Vic Firth Education", url: "https://vicfirth.zildjian.com/education" }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-neutral-900"
          >
            Trumtips
          </motion.h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Här har vi samlat råd, guider och inspiration för dig som spelar eller vill börja spela trummor.
          </p>
        </header>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-neutral-100"
            >
              <div className="flex items-start gap-6">
                <div className="hidden md:flex w-16 h-16 bg-brand/10 text-brand rounded-2xl items-center justify-center shrink-0">
                  <section.icon size={32} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-neutral-900">
                    <section.icon size={24} className="md:hidden text-brand" />
                    {section.title}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-6 text-lg">
                    {section.content}
                  </p>
                  
                  {section.link && (
                    <Link 
                      to={section.link}
                      className="inline-flex items-center gap-2 text-brand font-bold hover:gap-3 transition-all"
                    >
                      {section.linkText} <ArrowRight size={20} />
                    </Link>
                  )}
                  
                  {section.links && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      {section.links.map((link, j) => (
                        <a
                          key={j}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-100 group"
                        >
                          <span className="font-medium text-neutral-900">{link.name}</span>
                          <ExternalLink size={16} className="text-neutral-400 group-hover:text-brand transition-colors" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <section className="mt-20 p-12 rounded-[3rem] bg-brand text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Har du fler frågor?</h2>
          <p className="text-brand-light text-lg mb-8 opacity-90">
            Vi svarar gärna på dina funderingar kring trumspel och läromedel.
          </p>
          <Link 
            to="/kontakt"
            className="inline-block bg-white text-brand px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all"
          >
            KONTAKT
          </Link>
        </section>
      </div>
    </div>
  );
}
