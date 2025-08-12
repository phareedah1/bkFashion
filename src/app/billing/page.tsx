import CartFooter from "@/components/cart-footer";
import CartNavbar from "@/components/cart-navbar";
import Billing from "@/components/features/billing";


export default function BillingPage() {
    return(
        <>
            <CartNavbar/>
           <Billing/>
           <CartFooter/>
        </>
    )
}