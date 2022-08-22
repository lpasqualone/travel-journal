import "../css/index.css"
// import Globe from 'images/globe.png'

function Header() {

    return (
        <section className="header">
            <div className="container">
                <div className="title--logo">
                    <img src="./images/globe.png"/>
                    <h1>my travel journal</h1>
                </div>
            </div>
        </section>
    )
}

export default Header
