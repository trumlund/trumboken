import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PDFViewerProps {
  pdfUrl?: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Placeholder

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return (
    <div className="bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl border border-neutral-700 flex flex-col h-full">
      {/* Toolbar */}
      <div className="bg-neutral-900 px-4 py-3 flex justify-between items-center border-b border-neutral-700">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <button 
              onClick={prevPage}
              disabled={currentPage === 1}
              className="p-1 hover:bg-neutral-700 rounded disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <span className="text-xs text-neutral-400 font-mono">
              {currentPage} / {totalPages}
            </span>
            <button 
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="p-1 hover:bg-neutral-700 rounded disabled:opacity-30 transition-colors"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-1.5 hover:bg-neutral-700 rounded text-neutral-400 hover:text-white transition-colors">
            <Maximize2 size={18} />
          </button>
          <button className="p-1.5 hover:bg-neutral-700 rounded text-neutral-400 hover:text-white transition-colors">
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Pages Container */}
      <div className="flex-grow p-4 md:p-8 flex items-center justify-center relative overflow-hidden bg-neutral-850">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, rotateY: 45, x: 50 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            exit={{ opacity: 0, rotateY: -45, x: -50 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            className="w-full max-w-sm aspect-[3/4] bg-white rounded shadow-2xl relative preserve-3d"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Mock Page Content */}
            <div className="p-8 h-full flex flex-col">
              <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mb-6">
                <Drum className="text-brand" size={24} />
              </div>
              <div className="space-y-4">
                <div className="h-6 bg-neutral-100 rounded w-3/4" />
                <div className="h-4 bg-neutral-50 rounded w-full" />
                <div className="h-4 bg-neutral-50 rounded w-5/6" />
                <div className="h-4 bg-neutral-50 rounded w-4/6" />
              </div>
              
              <div className="mt-12 space-y-2">
                <div className="h-1 bg-neutral-200 rounded w-full" />
                <div className="h-1 bg-neutral-200 rounded w-full" />
                <div className="h-1 bg-neutral-100 rounded w-1/2" />
              </div>

              {/* Music notation placeholders */}
              <div className="mt-auto grid grid-cols-4 gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-8 bg-neutral-100 rounded" />
                ))}
              </div>
              
              <div className="absolute bottom-4 right-4 text-[10px] text-neutral-300 font-mono">
                TRUMBOKEN PG. {currentPage}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Shadow Overlay */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
      </div>
      
      <div className="p-4 bg-neutral-900/50 text-[10px] text-center text-neutral-500 uppercase tracking-widest font-bold">
        Interaktiv Förhandstitt
      </div>
    </div>
  );
}

function Drum(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path d="m2 2 20 20"/><path d="m22 2-20 20"/><circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>
    </svg>
  );
}
