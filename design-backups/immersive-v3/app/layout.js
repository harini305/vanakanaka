import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

// The site uses exactly two families: Cormorant Garamond for headings and
// DM Sans for everything else (body, navigation, buttons, forms, footer).
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vanakanaka.com"),
  title: "Vana Kanaka Yoga Bali | Yoga Studio in Kutuh, South Bali",
  description:
    "Vana Kanaka Yoga Bali is a yoga shala in Desa Kutuh, Kuta Selatan. See the weekly class schedule, prices and passes, and book your class on WhatsApp.",
  openGraph: {
    title: "Vana Kanaka Yoga Bali",
    description: "A yoga shala in Desa Kutuh, South Bali. Weekly schedule, passes and WhatsApp booking.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  themeColor: "#F3EEE3",
};

// Runs before first paint so reveal animations never flash content that is
// then hidden again. Skipped entirely for reduced-motion users.
const motionScript = `try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion')}}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
