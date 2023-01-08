import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const card = [
    {Title:"Rolex Daytona",Subtitle:"MDATE00",img:"../img/m116506-0002.webp",price:"$12,000"},
    {Title:"Rolex Daytona",Subtitle:"MDATE00",img:"../img/m116506-0002.webp",price:"$12,000"},
    {Title:"Rolex Daytona",Subtitle:"MDATE00",img:"../img/m116506-0002.webp",price:"$12,000"},
    {Title:"Rolex Daytona",Subtitle:"MDATE00",img:"../img/m116506-0002.webp",price:"$12,000"},
    {Title:"Rolex Daytona",Subtitle:"MDATE00",img:"../img/m116506-0002.webp",price:"$12,000"},
    {Title:"Rolex Daytona",Subtitle:"MDATE00",img:"../img/m116506-0002.webp",price:"$12,000"},
    {Title:"Rolex Daytona",Subtitle:"MDATE00",img:"../img/m116506-0002.webp",price:"$12,000"},
    {Title:"Rolex Daytona",Subtitle:"MDATE00",img:"../img/m116506-0002.webp",price:"$12,000"}
]

function StoreCard(){
    return(
        <CardGroup  style={{gap:"30px"  }}>
        {card.map(card => (
            <Card border="light" style={{ width: '18rem' ,background: '#FAFAFA', borderRadius: "0px",width: '245px',
            height: '376px'}}>
            <div style={{padding:'48px 24px'}}>
            <Card.Title style={{fontFamily: 'Playfair Display',fontStyle: 'normal',fontWeight: '700',fontSize: '17px',lineHeight: '26px',color: '#252B42'}}>{card.Title}</Card.Title>
            <Card.Subtitle style={{fontFamily: 'Playfair Display',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '20px',letterSpacing: '0.2px',color: '#737373'}}>{card.Subtitle}</Card.Subtitle>
            <Card.Img variant="top" src={require("../img/m116506-0002.webp")} />
             <Card.Body>
            
            <Card.Text style={{fontFamily: 'Playfair Display',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '20px',textAlign: 'center',letterSpacing: '0.2px',color: '#2DC071'}}>
              {card.price}
            </Card.Text>
            </Card.Body>
            </div>
            </Card>
           ))}
       </CardGroup>
    

    );
}

export default StoreCard;



<Card style={{ width: '18rem' ,background: '#FAFAFA', borderRadius: "0px",width: '245px',
height: '376px'}}>
<div style={{padding:'48px 24px'}}>
<Card.Title style={{fontFamily: 'Playfair Display',fontStyle: 'normal',fontWeight: '700',fontSize: '17px',lineHeight: '26px',color: '#252B42'}}>{card.Title}</Card.Title>
<Card.Subtitle style={{fontFamily: 'Playfair Display',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '20px',letterSpacing: '0.2px',color: '#737373'}}>{card.Subtitle}</Card.Subtitle>
<Card.Img variant="top" src={require("../img/m116506-0002.webp")} />
 <Card.Body>

<Card.Text style={{fontFamily: 'Playfair Display',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '20px',textAlign: 'center',letterSpacing: '0.2px',color: '#2DC071'}}>
  {card.price}
</Card.Text>
</Card.Body>
</div>
</Card>