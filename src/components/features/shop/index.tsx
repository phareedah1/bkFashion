import Navbar from "@/components/navbar";
import GreyHeader from "./components/header";
import ShopList from "./components/shopcontents";
import Footer from "@/components/footer";



export default function ShopPage() {
    return(
        <div>
            <Navbar/>
            <GreyHeader/>
            <ShopList/>
            <Footer/>
        </div>
    )
}