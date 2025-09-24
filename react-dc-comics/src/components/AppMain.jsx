import mainBgImg from '../assets/img/jumbotron.jpg'

import AppBluBar from '../components/AppBluBar'

export default function Main() {
    return (
        <main>

            <div className="container">

                <img src={mainBgImg} className='bgImg' alt="bg Img " />

                <button className='btn'> current series </button>

                <AppBluBar />




            </div>








        </main >
    )
}