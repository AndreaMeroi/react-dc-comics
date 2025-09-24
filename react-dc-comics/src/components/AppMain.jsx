import mainBgImg from '../assets/img/jumbotron.jpg'

import AppBluBar from '../components/'

export default function Main() {
    return (
        <main>

            <div className="container-flex">

                <img src={mainBgImg} className='bgImg' alt="bg Img " />

                <button className='btn'> current series </button>

                <AppBluBottomBar />




            </div>








        </main >
    )
}