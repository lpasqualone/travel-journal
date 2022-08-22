import "../css/index.css"
// import Pin from 'images/pin.png'


function Card(props) {
console.log(props.item)
    return (
            <div className="location-item">
                <div className="card-image">
                    <img src={props.item.imageUrl} alt="location of somewhere cool and remote in the world" />
                </div>
                <div className="card-details">
                   <div className="location-description">
                        <img src="./images/pin.png" /> 
                        <p>{props.item.location}</p>
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div> 
                    <h1>{props.item.title}</h1>
                    <p class="bold">{props.item.startDate} - {props.item.endDate}</p>
                    <p>{props.item.description}</p>
                </div>
            </div>
    )
}

export default Card

      // <section className="experience-cards">
      //   <div className="experience-item">
      //       <img className="card-image" src={props.coverImg} alt="Olympic athlete Katie Zaferes"/>
      //       <p className="experience-text">Sold Out</p>
      //   </div>
      //   <div className="description-below">
      //       <div className="rating">
      //           <img className="star" src={Star} alt="Rating star" width={15}/>
      //           <p>{props.rating}</p><span>({props.reviewCount}) • {props.location}</span>
      //       </div>
      //       <p class="item-description">{props.title}</p>
      //       <p className="item-price"><span className="item-price">From ${props.price}</span> /  person</p>
      //   </div>
      // </section>