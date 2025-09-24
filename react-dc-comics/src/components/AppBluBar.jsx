import BuyDgImg from '../assets/img/buy-comics-digital-comics.png'

export default function AppBluBar() {
    return (

        <nav>
            <div className="BluBarItem">
                <img src={BuyDgImg} alt="Buy DG Img" />
                <a href=""> digital comics</a>
            </div>
            <div className="BluBarItem">
                <img src={BuyDgImg} alt="Buy DG Img" />
                <a href=""> digital comics</a>
            </div>
            <div className="BluBarItem">
                <img src={BuyDgImg} alt="Buy DG Img" />
                <a href=""> digital comics</a>
            </div>
        </nav>

    )
}