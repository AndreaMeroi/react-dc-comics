import style from './AppCard.module.css'

export default function AppCard(promps) {
    return (
        <div className={style.card}>
            <img src={promps.img} alt="" />
            <h3> {promps.title} </h3>
        </div>
    )
}