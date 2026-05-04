import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Music, Headphones, Award, FileWarning, ExternalLink, Mail, Layout, 
  Lightbulb, Waves, Compass, Youtube, CheckCircle2, ChevronRight, PlayCircle
} from "lucide-react";

export default function Lararsida() {
  const sections = [
    {
      id: "spellistor",
      title: "SPELLISTOR",
      description: "Här hittar du alla spellistor till böckerna. Både Spotify och YouTube!",
      icon: Music,
      items: [
        { 
          name: "Alla Spotify-listor i böckerna!", 
          url: "https://open.spotify.com/artist/7nMJpFV1wiUXFjevtrXECB?si=UgoyWYpuTxeSvAzh5WNrQg&nd=1&dlsi=85908dfc813645d0",
          iconImg: "https://trumboken.se/wp-content/uploads/2023/05/Sociala-ikoner-05.png"
        },
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
      image: "https://trumboken.se/wp-content/uploads/2023/12/Bandcamp-logo-768x432.png",
      items: [
        { 
          name: "Trumboken på Bandcamp.com", 
          url: "https://trumboken.bandcamp.com/",
          iconImg: "https://trumboken.se/wp-content/uploads/2023/05/Sociala-ikoner-07.png"
        }
      ]
    },
    {
      id: "diplom",
      title: "DIPLOM",
      description: "Här kan du ladda ner diplom till dina elever när de är klara med böckerna!\n\nKlicka på bilderna för nedladdning.",
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
    },
    {
      id: "pedagogiska-ideer",
      title: "PEDAGOGISKA IDÉER",
      description: "Här nedanför har jag samlat tips och idéer för trumundervisningen. De flesta av dem har jag fått från andra lärare eller internet och syftet med den här lärarsidan är att ha allt detta listat på ett lättillgängligt ställe.\n\nMaila mig hemskt gärna om du har fler tips så lägger jag upp dem här!",
      icon: Lightbulb,
      isFullWidth: true,
      subsections: [
        {
          title: "TIPS DEL 1:",
          items: [
            "Uppvämning 1 – Låtförslag: Bonanza, Fahrrad fahr’n, Spectre, Jump in the Line.",
            "Uppvärmning 3, 5 – Låtförslag: They Don’t Care About Us.",
            "Rytmramsor 1 – Spela olika notvärden per hand eller med händer/bastr./hi-hat samtidigt. T.ex. 8delar med V 4delar med H.",
            "Future Moment – 1. Vilka instrument hör du? (Trumset, darbouka, bas, piano, synth, perc-loopar, vibrafon…) ",
            "2. Lägg till och rita in crash i starten av A-delarna. Använd noterna för det de är: låtkartor/guider och gör egna tillägg/ändringar.",
            "3. Spela valfritt komp 2:b-g i B-delen istället. Låt eleven rita in.",
            "Gör liknande på de andra övningslåtarna. Låt elever välja vilka komp de vill spela och be dem rita in.",
            "Rita in crash i takt 5 och 9 i Heavy Blues osv."
          ]
        },
        {
          title: "TIPS DEL 2:",
          items: [
            "Uppvärmn 7: Trumnastik – för elever som kan tillgodogöra sig det: Introducera ”piskan” – Muellertekniken, använd den speltekniken i uppvärmningen (med olika accentueringar).",
            "Koordination 4 – öva enkom dubbelslag med händerna, allt snabbare, om ni inte redan har börjat med det tidigare.",
            "Accenter – Spela även övningarna som fills, lägg ut accenterna på bl.a. pukor.",
            "Tavelnoterna (se längre ner) – låt en elev en i taget få blanda runt tavelnoterna på en whiteboardtavla, för att spela dem i olika ordning (för att spela olika rytmer). "
          ]
        },
        {
          title: "ALLMÄNT",
          items: [
            "Låt eleverna lyssna på musik! Aktivt lyssnande – gör det kort på lektionerna och ge det i hemläxa att lyssna på en viss låt. Det är väl det enda sättet att ta del av alla subtila parametrar som spelar sin roll i musik – timing, frasering, konstnärligt uttryck osv.",
            "BÖRJA MED NOTER DIREKT? Vi arbetar så klart alla lite olika som lärare i vår metod och vissa av oss anser att det viktigaste är att elever kommer igång att spela (på gehör) så snabbt som möjligt. Bokens disposition är därför inte tänkt att följas slaviskt som en bladvändare.",
            "Vissa av oss lärare föredrar ändå att tidigt koppla musik till noter. Det skapar ju ett ytterligare sätt att ta till sig musik och rytmer på – att vi kan se musiken, inte bara höra den. ",
            "Låt eleverna rita/kalkera noter själva! På tavlan eller på lösblad.",
            "Förstora upp noter på A3 eller via projektor om möjligt, det underlättar för alla och kan underlätta mycket för elever med dyslexi.",
            "Läxor kan skrivas in på sidorna Min övning längst bak i böckerna eller insidan av omslaget.",
            "Arbeta med flipped classroom-metodiken att be eleverna kolla en video eller knepa ut ett komp själva inför nästa lektion.",
            "Låt eleverna göra Knep&knåp i läxa och följ upp.",
            "Locka/ge eleverna i uppdrag att leta själva i boken. T.ex vad något betyder/innebär som ni ännu inte har gått igenom (fermat osv.).",
            "Låt eleverna kolla upp som läxa vilka band/artister en viss trummis spelar med.",
            "Fråga/låt eleverna gissa vilken musikstil/årtionde en låt tillhör."
          ]
        }
      ]
    },
    {
      id: "trumnyckel",
      title: "TRUMNYCKEL",
      description: "En trumnyckel i A3 att ladda ner. Skriv ut och sätt upp på väggen!",
      icon: Layout,
      image: "https://trumboken.se/wp-content/uploads/2020/04/Trumsetet_som_noter_A3.jpg",
      items: [
        { name: "Ladda ner Trumnyckel (A3)", url: "https://trumboken.se/wp-content/uploads/2022/10/Trumnyckel-A3.pdf" }
      ]
    },
    {
      id: "rytmik",
      title: "RYTMIK",
      description: "Något som verkligen har kompletterat min undervisning är kurser i rytmik. De ökade mitt intresse i att söka och dela ny metodik (aktiviteter) kring hur vi kan utforska musiklära/musikens olika element (puls, tempo, tonhöjd, osv.) på mer lekfulla sätt bl.a genom att vi gestaltar det vi hör och upplever i musiken.\n\nSärskilt lekar där vi jobbar mer grovmotoriskt verkar underlätta för många yngre att uppfatta det abstrakta med musik.\n\nEtt annat tips är också att pryda väggarna i lektionssalen med musiklära, lekar och inspiration som lockar till elevernas egna engagemang, fantasi, fridans, fokuserad lyssning…",
      icon: Waves,
      isFullWidth: true,
      items: [
        { name: "Ladda ned Tavelnoter för whiteboard (med rytmramsor)", url: "https://trumboken.se/wp-content/uploads/2023/12/Tavelnoter-m-ramsor.pdf" },
        { name: "Ladda ned Tavelnoter utan ramsor", url: "https://trumboken.se/wp-content/uploads/2023/12/Tavelnoter-utan-ramsor.pdf" },
        { name: "Ladda ned Rytmbingo (fritt att använda)", url: "https://trumboken.se/wp-content/uploads/2022/10/Rytmbingo.pdf" }
      ],
      subsections: [
        {
          title: "I ARBETET MED \"MUSIKENS ELEMENT\"",
          items: []
        },
        {
          title: "HITTA PULSEN",
          items: [
            "Vi ”stampar takten” till en låt, vad har vi hittat i foten?",
            "Skicka klappen – vi låter en klapp skickas runt i cirkel i ett bestämt tempo eller till en låt. Extraregel: vi får fritt skicka klappen tydligt åt andra hållet för att byta riktning när som.",
            "Klappa pulsen löst på elevens rygg eller axel (i en låt).",
            "”Sambatåg” – Gå runt i led till pulsstark musik i normalt gångtempo, alla klappar pulsen på axlarna på personen framför. Vi uppfattar då pulsen starkare genom känseln. Låtexempel: Pappas samba II.",
            "Gå/jogga/smyg – Vanlig gång fritt i rummet till musik, när jag/någon ropar jogga så skuttar vi i dubbeltempo (två skutt per pulsslag), när jag/någon ropar smyg smyger vi i halvtempo (varannat pulsslag)."
          ]
        },
        {
          title: "PULS OCH RYTM",
          description: "Hitta på egna ramsor eller välj sånger som tydliggör skillnaden mellan puls och en spelad rytm. T.ex. Pippi Långstrump. På Youtube finns en del rytmiklärare som delar sådant."
        },
        {
          title: "NOTVÄRDEN",
          items: [
            "Använd tavelnoterna för att bygga takter! Säg förslagsvis rytmramsorna först, sedan säg+spela, sedan spela.",
            "Spela notvärdena på olika ställen på kroppen så att varje notvärde blir väldigt tydligt. Gör lekar utifrån dessa.",
            "Låt eleverna rita noterna stort på tavlan själva.",
            "Låt eleverna hittar på en egen text utifrån ett temaord (t.ex favoritmat), en mening istället för rytmramsorna. ”Trum-rap”",
            "Fråga eleverna vad de åt till lunch idag, sätt ihop olika maträtter eller gör en mening av det. Spela den samtidigt som ni säger den.",
            "Spela rytmramsor på trumsetet som uppvärmning osv.",
            "Lek klapp-memory där eleverna går runt i rummet och klappar sitt notvärde/rytmfras på kroppen för varandra.",
            "Hitta liknande rytmikövningar och lekar för att jobba med de övriga elementen – taktart, tempo, tonhöjd, melodi, ackord, klang, tonart, dynamik, form…"
          ]
        }
      ]
    },
    {
      id: "inspiration",
      title: "INSPIRATION - ETT LIV SOM MUSIKANT",
      description: "Långt ifrån alla elever har som vi vet planer på eller målet att bli musiker och musik har säkert lite olika betydelse för oss i våra liv. Men som lärare brinner vi ju många för att vilja ge alla elever inspiration och vetskap om olika framtida möjligheter inom musik – vem vet vilket frö som kan sås i en elev? 🙂",
      icon: Compass,
      isFullWidth: true,
      content: [
        {
          subtitle: "Tips 1: Förebildstavla",
          text: "Gör en förebildstavla med stilbildande/inspirerande trummisar (eller slagverkare) till lektionssalen som kan locka till frågor om vilka de är osv. Ge elever i hemläxa att välja ut ett Youtube-klipp/trumsolo som de gillar med en viss trummis."
        },
        {
          subtitle: "Tips 2: Elevförebilder",
          text: "Samla på bilder/tavlor i lektionssalen på elever som har följt sina drömmar och har satsat inom musiken – t.ex spelar i band, har studerat på folkisar/högskolor, har varit musiksoldat."
        },
        {
          subtitle: "Tips 3: Yrken inom musik",
          text: "Lista olika yrken inom musik/slagverk (t.ex som en video, lista på tavlan ihop med eleverna), även yrken som inte är utövande men som är relaterade till musik, t.ex STIM, Polar prize, återförsäljare/agent.",
          items: [
            { name: "Se video: Yrken inom musik (YouTube)", url: "https://www.youtube.com/watch?v=FqS_I0z2-Rk" }
          ]
        }
      ]
    },
    {
      id: "youtube-lankar",
      title: "YOUTUBE-LÄNKAR",
      description: "Lite blandad historia och inspiration.",
      icon: Youtube,
      isFullWidth: true,
      items: [
        { name: "Litofoner av stenar", url: "https://www.youtube.com/watch?v=1F_4S7G8T0U" },
        { name: "Världens 10 äldsta kända instrument", url: "https://www.youtube.com/watch?v=F07lToH7Kms" },
        { name: "No movement without rhythm – afrikansk by i Guinea", url: "https://www.youtube.com/watch?v=Gqy6X8P7_7E" },
        { name: "Nyabinghi (Burru) trumspel (stor influens till ska/reggae)", url: "https://www.youtube.com/watch?v=mHnFQUQY8K4" },
        { name: "The History of Jazz Drums", url: "https://www.youtube.com/watch?v=68_9v0q50pI" },
        { name: "Early Jazz Drumming History", url: "https://www.youtube.com/watch?v=9_pY4oVvG-Y" },
        { name: "Evolution of the Drumset (i Modern Drummer)", url: "https://www.youtube.com/watch?v=UqN9N2W7S6c" },
        { name: "Buddy Rich dokumentär", url: "https://www.youtube.com/watch?v=9E4SIsZ7y9w" },
        { name: "John Bonham Documentary", url: "https://www.youtube.com/watch?v=6O_I922Z7M0" },
        { name: "When British rock drumming ruled", url: "https://www.youtube.com/watch?v=7X9B8_tXpU8" },
        { name: "Most Used Drum Breaks", url: "https://www.youtube.com/watch?v=5Sa6f6Q8sF8" },
        { name: "The World’s Most Sampled Drummer", url: "https://www.youtube.com/watch?v=ZIKv92c733M" }
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
            Välkommen till din resursbank! Här har vi samlat allt från spellistor och övningslåtar till 
            pedagogiska idéer, rytmikövningar och inspiration för din trumundervisning. 
            Ladda ner diplom, trumnycklar och tavelnoter direkt till dina lektioner.
          </p>
        </header>

        <div className="space-y-12 mb-20">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-2xl hover:shadow-brand/5 transition-all group"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-brand group-hover:bg-brand group-hover:text-white transition-all shrink-0">
                  <section.icon size={32} />
                </div>
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-black italic mb-6 uppercase tracking-tight">{section.title}</h2>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed font-medium whitespace-pre-line">
                    {section.description}
                  </p>
                  
                  {/* Single Featured Image */}
                  {(section as any).image && section.id !== 'utan-klick' && (
                    <div className="mb-8 max-w-sm rounded-2xl overflow-hidden border border-neutral-100 bg-white p-2">
                      <img 
                        src={(section as any).image} 
                        alt={section.title} 
                        className="w-full h-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {/* Standard Grid for items OR custom layout for Utan Klick */}
                  {section.items && section.items.length > 0 && !(section as any).subsections && (
                    <div className={section.id === 'utan-klick' ? "grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8" : "grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"}>
                      <div className={section.id === 'utan-klick' ? "space-y-4" : "contents"}>
                        {section.items.map((item: any, idx: number) => (
                          item.isInternal ? (
                            <Link
                              key={idx}
                              to={item.url}
                              className="flex flex-col p-5 rounded-2xl bg-white border border-neutral-200 text-neutral-900 hover:border-brand hover:text-brand transition-all group/item shadow-sm"
                            >
                              <div className="flex items-center justify-between font-bold">
                                {item.name}
                                <ExternalLink size={18} className="opacity-30 group-hover/item:opacity-100 shrink-0" />
                              </div>
                              {item.description && (
                                <div className="text-sm font-medium text-neutral-500 mt-1">
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
                              className="flex flex-col p-5 rounded-2xl bg-white border border-neutral-200 text-neutral-900 hover:border-brand hover:text-brand transition-all group/item shadow-sm"
                            >
                              <div className="flex items-center justify-between font-bold">
                                <div className="flex items-center gap-3">
                                  {item.iconImg && (
                                    <img 
                                      src={item.iconImg} 
                                      alt="" 
                                      className="w-6 h-6 object-contain"
                                      referrerPolicy="no-referrer"
                                    />
                                  )}
                                  {item.name}
                                </div>
                                {item.url.includes("youtube.com") ? <Youtube size={18} className="text-red-600" /> : <ExternalLink size={18} className="opacity-30 group-hover/item:opacity-100 shrink-0" />}
                              </div>
                              {item.description && (
                                <div className="text-sm font-medium text-neutral-500 mt-1">
                                  {item.description}
                                </div>
                              )}
                            </a>
                          )
                        ))}
                      </div>

                      {section.id === 'utan-klick' && (section as any).image && (
                        <div className="max-w-[150px]">
                          <div className="rounded-2xl overflow-hidden border border-neutral-100 bg-white p-2 shadow-sm">
                            <img 
                              src={(section as any).image} 
                              alt={section.title} 
                              className="w-full h-auto object-contain"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Image Grid */}
                  {(section as any).images && (
                    <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {(section as any).images.map((imgData: any, idx: number) => (
                        <a 
                          key={idx} 
                          href={typeof imgData === 'string' ? '#' : imgData.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-xl hover:border-brand hover:scale-[1.05] transition-all cursor-pointer relative group/img"
                        >
                          <img 
                            src={typeof imgData === 'string' ? imgData : imgData.img} 
                            alt={`${section.title} ${idx + 1}`} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                            <Layout className="text-white" size={32} />
                          </div>
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Subsections with lists */}
                  {(section as any).subsections && (
                    <div className="space-y-10">
                      {(section as any).subsections.map((sub: any, idx: number) => (
                        <div key={idx} className="bg-white/50 rounded-3xl p-8 border border-neutral-100">
                          <h3 className="text-xl font-black italic mb-6 text-neutral-900 uppercase flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand rounded-full" />
                            {sub.title}
                          </h3>
                          {sub.description && (
                            <p className="text-neutral-600 mb-6 font-medium leading-relaxed italic">{sub.description}</p>
                          )}
                          {sub.items && sub.items.length > 0 && (
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {sub.items.map((listItem: string, listIdx: number) => (
                                <li key={listIdx} className="flex gap-3 text-neutral-700">
                                  <ChevronRight className="text-brand shrink-0 mt-1" size={18} />
                                  <span className="font-medium leading-relaxed">{listItem}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                      {/* Special links for sections with subsets AND general items */}
                      {section.items && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                          {section.items.map((item: any, idx: number) => (
                            <a 
                              key={idx} 
                              href={item.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-4 rounded-xl bg-brand/5 border border-brand/10 text-brand font-bold hover:bg-brand hover:text-white transition-all shadow-sm"
                            >
                              <Layout size={20} />
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Inspiration tips content */}
                  {(section as any).content && (
                    <div className="space-y-10">
                      {(section as any).content.map((tip: any, idx: number) => (
                        <div key={idx} className="bg-white/50 rounded-3xl p-8 border border-neutral-100">
                          <h3 className="text-xl font-black italic mb-4 text-neutral-900 uppercase">{tip.subtitle}</h3>
                          <p className="text-neutral-600 font-medium leading-relaxed mb-6">{tip.text || tip.description}</p>
                          <div className="space-y-4">
                            {tip.items?.map((item: any, i: number) => (
                              <a 
                                key={i} 
                                href={item.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-4 rounded-xl bg-brand/5 border border-brand/10 text-brand font-bold hover:bg-brand hover:text-white transition-all shadow-sm w-fit"
                              >
                                <PlayCircle size={20} />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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
              href="mailto:info@chreator.se"
              className="inline-flex bg-brand text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-dark transition-all hover:scale-105"
            >
              KONTAKT
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
