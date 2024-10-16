import { Container } from 'react-bootstrap';
export default function Latest() {
    return (
        <Container className="latest">
            <h1>Latest</h1>
            <p>My plan is to include the newest 'blog' articles here.
                Now obviously this is way in the future, because to implement a blogs means I'd need to set up a database and API queries and it'll be a mess
            </p>
        </Container>
    )
}