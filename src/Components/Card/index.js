import './style.css';

const Card = ({item}) => {

    return (
        <article className='art'>
            <div >      
                <h4>{item.title}</h4>
                <p>{item.price}</p> 
            </div>
        </article>
    )
}

export default Card;