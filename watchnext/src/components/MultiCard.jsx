import { CardDeck, Card } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';
import './MultiCard.css'




const card = [
    {icon : "bi:people", title:"Assitance",text:"Get top-quality assistance from our team of experienced professionals. Our assistance team is here to provide expert support. Contact us now to learn more."},
    {icon : "tabler:truck-delivery", title:"Fast Delivery",text:"Get fast, reliable delivery service from our team.Don't waste time running errands. Let us handle the delivery for you Contact us now to schedule your delivery."},
    {icon : "uil:bitcoin", title:"Crypto Currency Payment",text:"Experience the convenience and security of paying with cryptocurrency. Contact us now to learn more about our payment services."}
]






function MutliCard() {
  return (
    <CardGroup style={{margin : '200px', marginTop: "800px"}}>
     {card.map(card => (
            <Card
            style={{ width: '18rem' }}>
                <Card.Body>
                    <div className="d-flex justify-content-center">
                        <Icon style={{ fontSize: '48px' }} icon={card.icon} />
                    </div>
                    <Card.Title className="text-center">{card.title}</Card.Title>
                    <Card.Text>
                    {card.text}
                    </Card.Text>
                </Card.Body>
                </Card>
        ))}
    </CardGroup>
  );
}


export default MutliCard;