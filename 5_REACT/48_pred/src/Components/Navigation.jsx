import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/balance'>Balance</Link>
            <Link to='/expenses'>Expenses</Link>
            <Link to='/invoices'>Invoices</Link>
        </div>

    )
}

/* ili kao običan link, ali u tom slučaju refresha stranicu
ovisno o use caseu možemo koristiti i jedno i drugo
link nekad ne resetira odmah stanje jer se ne refresha

        <ul>
            <li><a href='/invoices'>Invoices</a></li>
            <li><a href='/expenses'>Expenses</a></li>
            <li><a href='/balance'>Balance</a></li>
        </ul>

*/