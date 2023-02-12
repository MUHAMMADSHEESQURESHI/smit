import "../../App.css"
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MediaCards({ data }) {

    const { img, names, price, description } = data;
    
return (
    <>
        <Card className="my-2 shadow m-3 " style={{ width: '25rem', border: "none", overflow: "hidden" }}>
            <Card.Img id='cardImg' variant="top" src={img} />
            <Card.Body className="mt-2">
                <Card.Title className='fw-bold'>{names}</Card.Title>
                <Card.Text>
                    {description}
                    <Row>
                        <Col lg={10} md={10} sm={10}><div className='mt-2 fw-bold'>{price}</div></Col>
                        <Col lg={2} md={2} sm={2}><Button className="px-4"  style={{ borderRadius: "", fontSize: "1.1rem" }}>+</Button></Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
)
}

export default MediaCards;