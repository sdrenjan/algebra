import { useState, useEffect } from 'react';

export default function Potter() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://wizard-world-api.herokuapp.com/Houses')
            .then(res => res.json())
            .then(potterData => setData(potterData));
    }, []);

    console.log(data);

    return (
        <div className='Potter'>
            {data.map(house =>
                <div className='House' key={house.id}>
                    <h2>{house.name}</h2>
                    <p><b>House animal: </b>{house.animal}</p>
                    <p><b>Heads of {house.name}: </b>{house.heads.map(head => `${head.firstName} ${head.lastName}`).join(', ')}</p>
                    <p><b>Traits: </b>{house.traits.map(trait => `${trait.name}`).join(', ')}</p>
                </div>)}
        </div>
    )
}