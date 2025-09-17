import './globals.css'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BK Fashion',
  description: 'A fashion store app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}  
      </body>
    </html>
  );
}
