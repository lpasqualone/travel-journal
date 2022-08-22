import Header from './components/Header'
import Card from './components/Card'
import cardData from "./cardData"
// import data from "./data"

export default function App() {
  const cards = cardData.map(card => {
    return (
      <Card
        key={card.id}
        item={card}
        />
    )
  }

  )

  return (
    <div className="container">
      <Header />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

