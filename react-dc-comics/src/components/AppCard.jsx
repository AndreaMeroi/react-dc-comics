export default function AppCard(promps) {
    return (
        <div className='card'>
            <img src={promps.img} alt="" />
            <h3> {promps.title} </h3>
        </div>
    )
}