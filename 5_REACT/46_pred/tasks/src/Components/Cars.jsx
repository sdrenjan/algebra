import React from "react";
export default class Lists extends React.Component {

    state = {
        cars: [
            {id: 1, brand: 'Ford'},
            {id: 2, brand: 'BMW'},
            {id: 3, brand: 'Audi'}
        ],
    };

    list = this.state.cars.map(car => <li key={car.id}>{car.brand}</li>)
    
    render() {
        return (
            <div>
                <ul>
                    {this.list}
                </ul>
            </div>
        )
    }
}
