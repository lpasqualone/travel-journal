import "../css/index.css"
import Globe from '/public/images/globe.png'

function Header() {

    return (
        <section className="header">
            <div className="container">
                <div className="title--logo">
                    <img src={Globe} />
                    <h1>my travel journal</h1>
                </div>
            </div>
        </section>
    )
}

export default Header