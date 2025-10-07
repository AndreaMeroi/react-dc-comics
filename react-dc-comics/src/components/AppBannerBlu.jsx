import style from './AppBanner.module.css'

export default function AppBannerBlu(promps) {
    return (

        <div className={style.BluBanner}>
            <a>
                <img className='' src={promps.img} alt="" />
                <h3> {promps.name} </h3>
            </a>



        </div>

    )
}

