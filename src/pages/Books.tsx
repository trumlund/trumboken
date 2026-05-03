import { motion } from "motion/react";
import { BOOKS } from "../constants/books";
import { Link } from "react-router-dom";
import { ShoppingCart, ExternalLink } from "lucide-react";

export default function Books() {
  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Våra Spelböcker
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Här hittar du hela serien av Trumboken. Oavsett om du är nybörjare eller 
            en erfaren trummis som vill fördjupa dina kunskaper så har vi boken för dig.
          </motion.p>
        </header>

        <div className="space-y-24">
          {BOOKS.map((book, i) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-brand/5 rounded-[2rem] blur-2xl group-hover:bg-brand/10 transition-colors" />
                  <img 
                    src={book.imageUrl} 
                    alt={book.title} 
                    className="relative w-full aspect-[4/5] object-cover rounded-[2rem] shadow-2xl transition-transform hover:scale-[1.02] duration-500"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider">
                  {book.subtitle}
                </div>
                <h2 className="text-4xl font-bold">{book.title}</h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {book.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {book.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-neutral-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-wrap gap-4 items-center">
                  <div className="text-3xl font-display font-bold text-neutral-900 mr-4">
                    {book.price}
                  </div>
                  <Link
                    to="/#aterforsaljare"
                    className="bg-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-dark transition-all flex items-center gap-2 shadow-lg shadow-brand/20"
                  >
                    <ShoppingCart size={20} /> Köp här
                  </Link>
                  <Link
                    to={`/bocker/${book.id}`}
                    className="text-neutral-600 font-bold hover:text-brand transition-colors flex items-center gap-1 ml-2"
                  >
                    Detaljer <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
