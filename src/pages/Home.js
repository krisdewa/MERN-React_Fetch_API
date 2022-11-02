//import component Bootstrap React
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function Home() {
    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                            <h1>React JS</h1>
                            <p class="lead">
                                React JS Fetching API Express JS{" "}
                                <strong></strong>
                            </p>
                            <Button
                                href="http://krisproject.my.id"
                                target="_blank"
                                variant="primary"
                                size="lg"
                            >
                                SELENGKAPNYA
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
