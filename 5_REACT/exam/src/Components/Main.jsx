import { useState } from 'react';
import User from './User';
import Form from './Form'

export default function Main() {
    const [user, setUser] = useState('');
    const [data, setData] = useState('');
    const [repo, setRepo] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setUser(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`https://api.github.com/users/${user}`)
            .then(res => res.json())
            .then(gitData => setData(gitData));

        fetch(`https://api.github.com/users/${user}/repos`)
            .then(res => res.json())
            .then(repoData => setRepo(repoData));

        setSubmitted(true);
    }

    function handleReset() {
        setUser('');
        setData('');
        setSubmitted(false);
    }

    return (
        <div>
            {!submitted ? <Form
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            /> : <User
                avatar_url={data.avatar_url}
                name={data.name}
                location={data.location}
                bio={data.bio}
                repo={repo}
                handleReset={handleReset}
            />}
        </div>
    )
}
