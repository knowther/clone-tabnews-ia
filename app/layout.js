import "./globals.css";

export const metadata = {
  title: "JOHNNY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
