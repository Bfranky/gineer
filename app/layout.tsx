import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title:
    "Gineer Tasty Grills | Top Notch Sharwama & Grills at UNN Nsukka | Drive-Through & Delivery",
  description:
    'Gineer Tasty Grills — "Top Notch Sharwama compared to none in Nsukka!" 5-star quality grills & sharwama at University of Nigeria. Drive-through & delivery. ₦2,000–₦4,000. Opens 3 PM. Call 0701 930 8377',
  keywords:
    "sharwama Nsukka, UNN food, Gineer Tasty Grills, grills Nsukka, drive-through Nsukka, delivery UNN, student food, top notch sharwama, University of Nigeria restaurant",
  openGraph: {
    title: "Gineer Tasty Grills — Best Sharwama in Nsukka",
    description:
      "Top notch sharwama & grills at UNN. Drive-through & delivery available!",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
