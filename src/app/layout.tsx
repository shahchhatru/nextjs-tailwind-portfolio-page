import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
export const metadata: Metadata = {
  title: "Chhatra Bikram Shah | Portfolio",
  description:
    "Introducing Chhatra Bikram Shah, a versatile and passionate full-stack developer. Let's build something amazing together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${poppins.variable}`}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}