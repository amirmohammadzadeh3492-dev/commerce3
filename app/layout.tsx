import "./globals.css";

export const metadata = {
  title: "Commerce AI",
  description: "Instagram Commerce Platform"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
