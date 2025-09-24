import BuyDgImg from '../assets/img/buy-comics-digital-comics.png'
import MerchImg from '../assets/img/buy-comics-merchandise.png'
import SubImg from '../assets/img/buy-comics-subscriptions.png'
import locatorImg from '../assets/img/buy-comics-shop-locator.png'
import PowerVisaImg from '../assets/img/buy-dc-power-visa.svg'

export default function AppBluBar() {
    return (

        <nav style="display: flex">

            <div className="BluBarItem">
                <img src={BuyDgImg} alt="Buy DG Img" />
                <a href=""> digital comics</a>
            </div>
            <div className="BluBarItem">
                <img src={MerchImg} alt="Buy DG Img" />
                <a href=""> dc merchandise</a>
            </div>
            <div className="BluBarItem">
                <img src={SubImg} alt="Buy DG Img" />
                <a href=""> subscription</a>
            </div>
            <div className="BluBarItem">
                <img src={locatorImg} alt="Buy DG Img" />
                <a href=""> comic shop locator</a>
            </div>
            <div className="BluBarItem">
                <img src={locatorImg} alt="Buy DG Img" />
                <a href=""> comic shop locator</a>
            </div>

        </nav>

    )
}