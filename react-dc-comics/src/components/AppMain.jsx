
import mainBgImg from '../assets/img/jumbotron.jpg'
import AppBannerBlu from './appBannerBlu'
import AppCard from './AppCard'
import buyDig from "../assets/img/buy-comics-digital-comics.png"
import merch from "../assets/img/buy-comics-merchandise.png"
import subs from "../assets/img/buy-comics-subscriptions.png"
import locator from "../assets/img/buy-comics-shop-locator.png"
import powVis from "../assets/img/buy-dc-power-visa.svg"



export default function Main() {
    return (
        <main>

            <section>
                <div className="container">
                    <div className='row'>
                        <div className='col'>
                            <AppCard title={"Action Comics #1000: The Deluxe Edition"} img={"https://imgs.search.brave.com/aUNyvZBXUulb963JH7KnQm9AMr8bcBoLsiHREOqayIU/rs:fit:612:612:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOWZm/ZWYzMDMtMGZhYy00/OGRkLTg3ODctYzUy/NTk0MDk2ODAwXzEu/MTc1ZDk1Mjg2NzY0/OGEwOTczMTY2NGMy/MTE1NjNlYWIuanBl/Zz9vZG5XaWR0aD02/MTImb2RuSGVpZ2h0/PTYxMiZvZG5CZz1m/ZmZmZmY"} />
                        </div>
                        <div className='col'>
                            <AppCard title={"American Vampire 1976 #1"} img={"https://imgs.search.brave.com/OU2E3_3vA7flyv-SJ3TcFW1d99KDlp5ZfmW9ylLLFDo/rs:fit:1012:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnN1/cGVycG91dm9pci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDcvQW1lcmlj/YW4tVmFtcGlyZS0x/OTc2LTAxLWNvdi1B/bGJ1cXVlcnF1ZS0y/MDIwLmpwZz9yZXNp/emU9MTAxMiUyQzE1/NTYmc3NsPTE"} />
                        </div>
                        <div className='col'>
                            <AppCard title={"Aquaman Vol. 4: Underworld"} img={"https://imgs.search.brave.com/gAZQuZyt6WjcUWF6aXCIBaiJqtOJAK-X4nxS9Vbvwno/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4y/LnBlbmd1aW4uY29t/LmF1L2NvdmVycy9v/cmlnaW5hbC85Nzgx/NDAxMjc1NDI2Lmpw/Zw"} />
                        </div>
                        <div className='col'>
                            <AppCard title={"Batgirl #1"} img={"https://imgs.search.brave.com/YET9wY29Aa29TyHqlbieS9qsz3HWyNYQx-WkRqdBRX4/rs:fit:640:984:1/g:ce/aHR0cDovL2dldHlv/dXJjb21pY29uLmNv/LnVrL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE2LzA4L2JhdGdp/cmwtcmViaXJ0aC0x/LWNvdmVyLmpwZw"} />
                        </div>
                        <div className='col'>
                            <AppCard title={"Batman #56"} img={"https://imgs.search.brave.com/YET9wY29Aa29TyHqlbieS9qsz3HWyNYQx-WkRqdBRX4/rs:fit:640:984:1/g:ce/aHR0cDovL2dldHlv/dXJjb21pY29uLmNv/LnVrL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE2LzA4L2JhdGdp/cmwtcmViaXJ0aC0x/LWNvdmVyLmpwZw"} />
                        </div>
                        <div className='col'>
                            <AppCard title={"Batman Beyond #1"} img={"https://imgs.search.brave.com/jgxYlrx442aozemzjqdmCsd9DkIkRollJp1T8sG8TfE/rs:fit:720:1106:1/g:ce/aHR0cHM6Ly9veXN0/ZXIuaWduaW1ncy5j/b20vd29yZHByZXNz/L3N0Zy5pZ24uY29t/LzIwMTgvMTAvU1RM/MDk3MDk1LTcyMHgx/MTA2LmpwZw"} />
                        </div>
                    </div>

                </div>
                <div className="banner">

                    <AppBannerBlu img={buyDig} name={"Digital Comics"} />

                    <AppBannerBlu img={merch} name={"DC Merchandise"} />

                    <AppBannerBlu img={subs} name={"Subscription"} />

                    <AppBannerBlu img={locator} name={"Comic shop locator"} />

                    <AppBannerBlu img={powVis} name={"DC Power visa"} />
                </div>

            </section>


        </main >
    )
}