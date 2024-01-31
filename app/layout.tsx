import Header from "./components/header/header";
import "./globals.css";

export const metadata = {
  title: "Speed Work",
  description: "Conectando empresas e pessoas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
