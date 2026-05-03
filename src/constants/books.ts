export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  imageUrl: string;
  features: string[];
  buyUrl: string;
}

export const BOOKS: Book[] = [
  {
    id: "trumboken-1",
    title: "Trumboken 1",
    subtitle: "För nybörjare",
    description: "En grundläggande spelbok för dig som vill börja spela trummor. Här lär du dig grunderna i teknik, kordination och notläsning genom roliga övningar och låtar.",
    price: "249 kr",
    imageUrl: "https://images.unsplash.com/photo-1543443374-b6fe10a6ab7b?auto=format&fit=crop&q=80&w=800",
    features: [
      "Grundläggande kordination",
      "Notläsning för trummor",
      "Roliga spelövningar",
      "Passar alla åldrar"
    ],
    buyUrl: "https://www.bokus.com/bok/9789197945608/trumboken-1/"
  },
  {
    id: "trumboken-2",
    title: "Trumboken 2",
    subtitle: "Fortsättning",
    description: "Fortsättningsboken som tar dig vidare med mer avancerade komp, fills och olika genrer. Utveckla din spelteknik och musikalitet.",
    price: "269 kr",
    imageUrl: "https://images.unsplash.com/photo-1543443258-92b04ad5ecf1?auto=format&fit=crop&q=80&w=800",
    features: [
      "Avancerade fills",
      "Olika genrer (Rock, Pop, Funk)",
      "Fördjupad teknik",
      "Spelförståelse"
    ],
    buyUrl: "https://www.bokus.com/bok/9789197945615/trumboken-2/"
  },
  {
    id: "trumboken-3",
    title: "Trumboken 3",
    subtitle: "Avancerad nivå",
    description: "För dig som kommit långt och vill bemästra trumsetet. Fokus på polyrytmer, udda taktarter och sofistikerat spel.",
    price: "289 kr",
    imageUrl: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80&w=800",
    features: [
      "Polyrytmer",
      "Udda taktarter",
      "Masterclass-nivå",
      "Komplex kordination"
    ],
    buyUrl: "https://www.bokus.com/bok/9789197945622/trumboken-3/"
  },
  {
    id: "samlade-komp",
    title: "Samlade komp",
    subtitle: "Referensbok",
    description: "En omfattande samling av de viktigaste kompen och grooven inom populärmusiken. En perfekt referens för alla trummisar.",
    price: "229 kr",
    imageUrl: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&q=80&w=800",
    features: [
      "Över 100 olika komp",
      "Genre-guide",
      "Perfekt för lärare",
      "Kompakt format"
    ],
    buyUrl: "https://www.bokus.com/bok/9789163345678/trumboken-samlade-komp/"
  }
];
