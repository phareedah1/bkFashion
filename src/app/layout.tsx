import './globals.css'; 
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'BK Fashion',
  description: 'A fashion store app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/> 
        {children}  
        <Footer/>
      </body>
    </html>
  );
}
