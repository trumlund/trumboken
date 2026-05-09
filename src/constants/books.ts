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
    title: "Del 1",
    subtitle: "För nybörjare",
    description: "En grundläggande spelbok för dig som vill börja spela trummor. Här lär du dig grunderna i teknik, kordination och notläsning genom roliga övningar och låtar.",
    price: "249 kr",
    imageUrl: "https://trumboken.se/wp-content/uploads/2021/09/Trumboken-wire-o-SNEDA-1.jpg",
    features: [
      "Grundläggande kordination",
      "Notläsning för trummor",
      "Roliga spelövningar",
      "Passar alla åldrar"
    ],
    buyUrl: "https://www.notposten.se/sok?freetext=trumboken"
  },
  {
    id: "trumboken-2",
    title: "Del 2",
    subtitle: "Fortsättning",
    description: "Fortsättningsboken som tar dig vidare med mer avancerade komp, fills och olika genrer. Utveckla din spelteknik och musikalitet.",
    price: "269 kr",
    imageUrl: "https://trumboken.se/wp-content/uploads/2021/09/Trumboken-wire-o-SNEDA-2.jpg",
    features: [
      "Avancerade fills",
      "Olika genrer (Rock, Pop, Funk)",
      "Fördjupad teknik",
      "Spelförståelse"
    ],
    buyUrl: "https://www.notposten.se/sok?freetext=trumboken"
  },
  {
    id: "trumboken-3",
    title: "Del 3",
    subtitle: "Avancerad nivå",
    description: "För dig som kommit långt och vill bemästra trumsetet. Fokus på polyrytmer, udda taktarter och sofistikerat spel.",
    price: "289 kr",
    imageUrl: "https://trumboken.se/wp-content/uploads/2021/09/Trumboken-wire-o-SNEDA-3_1.jpg",
    features: [
      "Polyrytmer",
      "Udda taktarter",
      "Masterclass-nivå",
      "Komplex kordination"
    ],
    buyUrl: "https://www.notposten.se/sok?freetext=trumboken"
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
    buyUrl: "https://www.notposten.se/sok?freetext=trumboken"
  }
];
