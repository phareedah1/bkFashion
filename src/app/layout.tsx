import './globals.css'; 
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';

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
      </body>
    </html>
  );
}
