export default function User({ avatar_url, name, location, bio, handleReset, repo }) {

    return (
        <div>
            <img src={avatar_url} alt={name} />
            <p>{name}</p>
            <p>{location}</p>
            <p>{bio}</p>
            <p>Repositories: </p>
            <ul>
                {repo.map(data => <li key={data.id}>{data.name}</li>)}
            </ul>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

