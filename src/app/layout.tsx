import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};


export const metadata: Metadata = {
  metadataBase: new URL("https://kyy.art"),
  manifest: "/manifest.json",
  appleWebApp: {
    title: "KyyArt",
    statusBarStyle: "default",
    capable: true,
  },
  title: {
    default: "Jasa Sketsa Wajah Manual - KYY ART | Kado Unik & Lukis Wajah",
    template: "%s | KYY ART",
  },

  description: "Pesan jasa sketsa wajah manual & digital art untuk kado unik. KYY ART menghadirkan lukisan wajah berkualitas dari Muhammad Rizky, Ogan Ilir, Palembang.",
  keywords: ["jasa lukis wajah", "custom art", "kado unik", "digital painting", "sketsa wajah manual", "hadiah ulang tahun", "Ogan Ilir", "Palembang"],
  authors: [{ name: "Muhammad Rizky" }],
  creator: "Muhammad Rizky",
  publisher: "KYY ART",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://kyy.art",
    siteName: "KYY ART",
    title: "KYY ART | High-End Portrait Gallery",
    description: "Abadikan wajah tersayang dalam sketsa tangan manual yang abadi dan penuh makna.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KYY ART Portfolio Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KYY ART | High-End Portrait Gallery",
    description: "Jasa sketsa wajah manual premium oleh Muhammad Rizky.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-white text-zinc-950">
        {children}
        <Toaster position="bottom-right" richColors theme="light" />
      </body>
    </html>
  );
}
