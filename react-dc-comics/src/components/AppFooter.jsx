import footerLogo from '../assets/img/dc-logo-bg.png'
export default function Footer() {
    return (

        <footer>

            <div className="container">

                <div className='row'>

                    <div className='col'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos perferendis, omnis officia molestiae quae.</div>
                    <div className='col'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos perferendis, omnis officia molestiae quae.</div>
                    <div className='col'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos perferendis, omnis officia molestiae quae.</div>
                    <div className='col'>  <img src={footerLogo} className='bgImg' alt="Footer logo" /></div>
                </div>

            </div>
        </footer>
    )
}