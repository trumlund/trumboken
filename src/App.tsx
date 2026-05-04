import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Trumtips from "./pages/Trumtips";
import Nyborguide from "./pages/Nyborguide";
import Lararsida from "./pages/Lararsida";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top or handle hash on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bocker" element={<Books />} />
            <Route path="/bocker/:id" element={<BookDetail />} />
            <Route path="/om-trumboken" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/trumtips" element={<Trumtips />} />
            <Route path="/nyborjarguide" element={<Nyborguide />} />
            <Route path="/lararsida" element={<Lararsida />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
