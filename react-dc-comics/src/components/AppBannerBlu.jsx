import style from './AppBanner.module.css'

export default function AppBannerBlu(promps) {
    return (
        <div className={style.BluBanner}>
            <img src={promps.img} alt="" />
            <a> {promps.name} </a>
        </div>

    )
}

