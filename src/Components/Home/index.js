import './style.css';
import { Data } from '../data';
import { useState } from 'react';
import Card from '../Card';


const List = () => {

    const [list, setList] = useState(Data);
    const removePhone = (id) => {
        setList(list.filter ((item) => item.id !== id))
    }
    return (
        <>
        <div className='div1'>
        <h1 className='h1'>YOUR BAG</h1>
        </div>

        {list.map((item) => {
            return (
                <div className='card'>
                <Card item={item} />
                <button onClick={() => removePhone(item.id)}>Remove</button>  

                </div>
            )
        })}
    
        </>
    )
}


export default List;