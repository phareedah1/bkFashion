import CartFooter from "@/components/cart-footer";
import CartNavbar from "@/components/cart-navbar";
import AddToCart from "@/components/features/add-to-cart/indext";

export default function Cart() {
    return(
        <>
        <CartNavbar/>
            <AddToCart/>
        <CartFooter/>
        </>
    )
}