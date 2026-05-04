import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-4 bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">KONTAKT</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Har du frågor om våra böcker, söker du samarbeten eller vill du bara 
            veta mer om Trumboken? Vi hörs gärna!
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 flex items-start gap-4">
              <div className="p-3 bg-brand/10 text-brand rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">E-post</h4>
                <p className="text-neutral-500 text-sm">info@chreator.se</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 flex items-start gap-4">
              <div className="p-3 bg-brand/10 text-brand rounded-xl">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Telefon</h4>
                <p className="text-neutral-500 text-sm">070-000 00 00</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 flex items-start gap-4">
              <div className="p-3 bg-brand/10 text-brand rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Adress</h4>
                <p className="text-neutral-500 text-sm">Musikgatan 12, 123 45 Stockholm</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 md:p-16 rounded-[2rem] shadow-xl shadow-neutral-200/50 border border-neutral-100"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700 ml-1">Namn</label>
                    <input 
                      type="text" 
                      placeholder="Ditt för- och efternamn"
                      className="w-full px-6 py-4 bg-neutral-50 border-none rounded-xl focus:ring-2 focus:ring-brand transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700 ml-1">E-post</label>
                    <input 
                      type="email" 
                      placeholder="din.epost@exempel.se"
                      className="w-full px-6 py-4 bg-neutral-50 border-none rounded-xl focus:ring-2 focus:ring-brand transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 ml-1">Ärende</label>
                  <select className="w-full px-6 py-4 bg-neutral-50 border-none rounded-xl focus:ring-2 focus:ring-brand transition-all outline-none appearance-none">
                    <option>Frågor om böcker</option>
                    <option>Beställningar</option>
                    <option>Sponsring / Samarbeten</option>
                    <option>Övrigt</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 ml-1">Meddelande</label>
                  <textarea 
                    rows={6}
                    placeholder="Vad kan vi hjälpa dig med?"
                    className="w-full px-6 py-4 bg-neutral-50 border-none rounded-xl focus:ring-2 focus:ring-brand transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 bg-brand text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all shadow-xl shadow-brand/20 group"
                >
                  Skicka meddelande <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
