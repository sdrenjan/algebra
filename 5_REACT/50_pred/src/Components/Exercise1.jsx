export default function Exercise1() {

    const users = [
        { name: 'John Doe', id: 1 },
        { name: 'Jane Doe', id: 2 },
        { name: 'Billy Doe', id: 3 }
    ];

    return (
        <div>
            <h1>Exercise 1</h1>
            <p>Your task is to show users from an array of objects here.</p>
            <div>
                <p>User names</p>
                <ul>{users.map(user => <li>{user.name}</li>)}</ul>
            </div>
        </div>
    )
}