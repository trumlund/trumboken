import { motion } from "motion/react";

export default function Kopvillkor() {
  return (
    <div className="pt-32 pb-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-6 uppercase">
              Köpvillkor
            </h1>
            <p className="text-lg text-neutral-600 font-medium italic">
              Senast uppdaterad: Maj 2024
            </p>
          </header>

          <div className="prose prose-neutral max-w-none prose-h2:text-2xl prose-h2:font-black prose-h2:italic prose-h2:uppercase prose-h2:tracking-tight prose-h2:mt-12 prose-p:text-neutral-600 prose-p:leading-relaxed prose-li:text-neutral-600">
            <p>
              Välkommen till Trumboken. Dessa köpvillkor gäller för alla köp som görs via vår webbplats eller i kontakt med oss. 
              Vi säljer pedagogiskt material för trumslagare och musiker.
            </p>

            <h2>1. Allmänt</h2>
            <p>
              Produkterna säljs av Chreator (en del av Christer Teglund Enskild Firma). Genom att genomföra ett köp accepterar du dessa villkor.
            </p>

            <h2>2. Priser och Betalning</h2>
            <p>
              Samtliga priser på webbplatsen anges i svenska kronor (SEK) och inkluderar lagstadgad moms (6% på böcker, 25% på övriga produkter/tjänster). 
              Betalning sker via de alternativ som erbjuds vid köptillfället (t.ex. Faktura, Swish eller Kortbetalning via partners).
            </p>

            <h2>3. Leverans</h2>
            <p>
              Vi skickar normalt dina varor inom 1-3 arbetsdagar. Leverans sker via PostNord eller DHL till din närmaste utlämningsställe eller direkt hem. 
              Fraktkostnad tillkommer och anges tydligt i kassan.
            </p>

            <h2>4. Ångerrätt och Retur</h2>
            <p>
              I enlighet med distansavtalslagen har du som privatperson rätt att ångra ditt köp inom 14 dagar från det att du tagit emot varan. 
              Varan ska returneras i väsentligen oförändrat skick. Kontakta oss alltid på <a href="mailto:info@chreator.se">info@chreator.se</a> innan du returnerar en vara. 
              Returfrakt bekostas av köparen.
            </p>

            <h2>5. Reklamation</h2>
            <p>
              Om en vara är skadad eller felaktig när den anländer har du rätt till reklamation. Kontakta oss omgående med bilder och beskrivning av felet 
              så hjälper vi dig med ett utbyte eller återbetalning.
            </p>

            <h2>6. Integritetspolicy (GDPR)</h2>
            <p>
              Vi hanterar personuppgifter i enlighet med GDPR. Dina uppgifter används endast för att administrera ditt köp och leverera dina varor. 
              Vi lämnar aldrig ut dina uppgifter till tredje part utöver vad som krävs för betalning och leverans.
            </p>

            <h2>7. Kontakt</h2>
            <p>
              Chreator / Christer Teglund<br />
              E-post: <a href="mailto:info@chreator.se">info@chreator.se</a><br />
              Hemsida: <a href="https://trumboken.se">trumboken.se</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
