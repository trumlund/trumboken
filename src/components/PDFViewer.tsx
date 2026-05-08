import { useState, useRef, forwardRef } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import HTMLFlipBook from "react-pageflip";

interface PageProps {
  image: string;
  number: number;
}

const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden h-full" ref={ref}>
      <img 
        src={props.image} 
        alt={`Sida ${props.number}`} 
        className="w-full h-full object-contain bg-white"
        loading="lazy"
      />
    </div>
  );
});

export default function PDFViewer() {
  const [currentPage, setCurrentPage] = useState(0);
  const bookRef = useRef<any>(null);
  const totalPages = 20;

  const images = Array.from({ length: totalPages }, (_, i) => {
    const num = i + 1;
    const ext = num === 1 ? 'png' : 'jpg';
    return `https://trumboken.se/wp-content/uploads/2026/05/${num}.${ext}`;
  });

  const onPage = (e: any) => {
    setCurrentPage(e.data);
  };

  return (
    <div className="bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl border border-neutral-700 flex flex-col h-[700px] w-full max-w-5xl mx-auto">
      {/* Toolbar */}
      <div className="bg-neutral-900 px-6 py-4 flex justify-between items-center border-b border-neutral-700 z-20">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => bookRef.current.pageFlip().flipPrev()}
              disabled={currentPage === 0}
              className="p-2 hover:bg-neutral-700 rounded-lg disabled:opacity-30 transition-all text-white border border-neutral-700"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm text-neutral-400 font-mono min-w-[60px] text-center">
              Sida {currentPage + 1} / {totalPages}
            </span>
            <button 
              onClick={() => bookRef.current.pageFlip().flipNext()}
              disabled={currentPage >= totalPages - 1}
              className="p-2 hover:bg-neutral-700 rounded-lg disabled:opacity-30 transition-all text-white border border-neutral-700"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="hidden sm:flex items-center gap-3">
          <button className="p-2 hover:bg-neutral-700 rounded-lg text-neutral-400 hover:text-white transition-colors border border-neutral-700">
            <Maximize2 size={18} />
          </button>
        </div>
      </div>

      {/* Pages Container */}
      <div className="flex-grow flex items-center justify-center bg-neutral-900 p-4 md:p-8 overflow-hidden">
        <div className="flipbook-wrapper scale-90 sm:scale-100 transition-transform origin-center">
          {/* @ts-ignore */}
          <HTMLFlipBook 
            width={450} 
            height={636}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onPage}
            ref={bookRef}
            className="shadow-2xl"
            style={{ margin: '0 auto' }}
            startPage={0}
            drawShadow={true}
            flippingTime={1000}
            usePortrait={false}
            startZIndex={0}
            autoSize={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            {images.map((img, i) => (
              <Page key={i} image={img} number={i + 1} />
            ))}
          </HTMLFlipBook>
        </div>
      </div>
      
      <div className="p-4 bg-neutral-950 text-[10px] text-center text-neutral-500 uppercase tracking-[0.2em] font-black italic">
        Klicka i hörnen eller dra för att bläddra
      </div>
    </div>
  );
}

