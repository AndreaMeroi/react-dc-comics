import headerLogo from '../assets/img/dc-logo.png'

const teachers = [
    {
        id: 1,
        text: 'marco',
        textsurname: 'de luca'

    },
    {
        id: 1,
        text: 'marco',
        textsurname: 'de luca'

    },
    {
        id: 1,
        text: 'marco',
        textsurname: 'de luca'

    }
]

export default function AppHeader() {
    return (

        <header>

            <div className="container">

                <img src={headerLogo} className="logo" alt="logo header" />

                <nav>
                    <a href=''>CHARACTERS</a>
                    <a href=''>COMICS</a>
                    <a href=''>MOVIES</a>
                    <a href=''>TV</a>
                    <a href=''>GAMES</a>
                    <a href=''>COLLECTIBLES</a>
                    <a href=''>VIDEOS</a>
                    <a href=''>FANS</a>
                    <a href=''>NEWS</a>
                    <a href=''>SHOP</a>
                </nav>


            </div>

        </header>
    )
}