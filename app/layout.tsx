import { inter } from "./ui/fonts";
import "@/app/ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <footer className="py-10 flex justify-center items-center">
        Elaborado por Arquitectura Empresarial Latam S.A.C.
      </footer>
    </html>
  );
}
