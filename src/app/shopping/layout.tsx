import CartFooter from "@/components/cart-footer";
import CartNavbar from "@/components/cart-navbar";
import type { Metadata } from 'next';
import React from "react";
export default function CartLayout({ children }: { children: React.ReactNode }) {
    return(
        <div>
            <CartNavbar/>
            {children}
            <CartFooter/>
        </div>
    );
}