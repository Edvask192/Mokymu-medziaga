import { Container, Row, Col, Button } from "react-bootstrap"
import './Header.scss'

const Header = ({title, subtitle, button}) => {
    return (
        <header className="header-fullscreen">
            <Container className="h-200">
                <Row className="align-items-center justify-content-center text-center">
                    <Col lg={8}>
                        <h1 className="display-4 fw-bold mb-3">{title}</h1>
                        <p className="lead mb-4">{subtitle}</p>
                        <Button variant="primary" size="lg">{button}</Button>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header