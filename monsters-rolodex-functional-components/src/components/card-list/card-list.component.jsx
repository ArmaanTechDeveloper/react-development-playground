import './card-list.styles.css'
import Card from '../card/card.component'


const CardList = (props) => {
    const { monsters } = props
    return(
        <div className="card-list" key={`1`}>
            {monsters.map(monster => {
                return(
                    <Card monster ={monster} />
                )
            })}
        </div>
    )
}

export default CardList