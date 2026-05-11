import { useParams, Link, Navigate } from "react-router-dom";
import { BOOKS } from "../constants/books";
import { motion } from "motion/react";
import { ChevronLeft, ShoppingCart, CheckCircle2, Drum, Music, BookOpen } from "lucide-react";

export default function BookDetail() {
  const { id } = useParams();
  const book = BOOKS.find((b) => b.id === id);

  if (!book) return <Navigate to="/bocker" />;

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/bocker" 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-brand transition-colors mb-12 group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Tillbaka till alla böcker
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md lg:max-w-none mx-auto lg:mx-0 w-full"
          >
            <div className="bg-white rounded-3xl overflow-hidden aspect-[4/5] shadow-sm border border-neutral-100 p-8">
              <img src={book.imageUrl} alt={book.title} className="w-full h-full object-contain" />
            </div>
          </motion.div>

          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-4">
                <Music size={14} /> Pedagogisk Spelbok
              </div>
              <h1 className="text-5xl font-bold mb-4">{book.title}</h1>
              <p className="text-2xl font-display font-medium text-neutral-500">{book.subtitle}</p>
            </div>

            <p className="text-lg text-neutral-600 leading-relaxed">
              {book.description}
            </p>

            <div className="bg-neutral-50 p-8 rounded-2xl space-y-6">
              <h3 className="font-bold flex items-center gap-2">
                <CheckCircle2 size={20} className="text-brand" /> Innehåll i boken:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {book.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-300 flex-shrink-0" />
                    {f}
                  </li>
                ))}
                <li className="flex items-start gap-2 text-sm text-neutral-600">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-300 flex-shrink-0" />
                  Illustrationer & grafer
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-600">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-300 flex-shrink-0" />
                  Anpassad för undervisning
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-4">
              <div className="text-4xl font-display font-bold text-neutral-900 mr-6">
                {book.price}
              </div>
              <Link
                to="/#aterforsaljare"
                className="flex-1 bg-brand text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all flex items-center justify-center gap-2 shadow-2xl shadow-brand/30"
              >
                <ShoppingCart size={24} /> Köp här
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
