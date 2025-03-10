import { Open_Sans, Roboto_Mono, Source_Code_Pro} from 'next/font/google'
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-sourcesanspro',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata = {
  title: "Abbey Lin",
  description: "Welcome to my personal portfolio website.",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg' },
    ]}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${sourceCodePro.variable} ${robotoMono.variable}  font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
