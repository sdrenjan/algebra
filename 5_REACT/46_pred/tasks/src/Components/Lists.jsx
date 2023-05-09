export default function Lists() {
    const fruits = ['apple', 'banana', 'orange'];
    const list = fruits.map(fruit => <li>{fruit}</li>)

    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ]

    return (
        <div>
            <ul>
                {list}
            </ul>
            <ul>
                {cars.map(car => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </div>
    )
}

function Car(props) {
    return <li>I am a {props.brand}</li>
}