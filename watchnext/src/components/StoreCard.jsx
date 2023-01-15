import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';
import './MultiCard.css'


const card = [
    {Title:"Rolex Daytona",Subtitle:"MDATE00",img:"../img/m116506-0002.webp",price:"$12,000", id:"0"},
    {Title:"Rolex Submariner", Subtitle:"116610LN", img:"../img/2.webp", price:"$8,500", id:"1"},
    {Title:"Audemars Piguet Royal Oak", Subtitle:"15400ST.OO.1220ST.01", img:"../img/3.png", price:"$27,000", id:"2"},
    {Title:"Rolex GMT-Master II", Subtitle:"126710BLRO", img:"../img/4.webp", price:"$35,000", id:"4"},
    {Title:"Rolex Day-Date", Subtitle:"118238", img:"../img/5.webp", price:"$28,000", id:"5"},
    {Title:"Audemars Piguet Jules Audemars", Subtitle:"15170ST.OO.A088CR.01", img:"../img/6.webp", price:"$40,000", id:"6"},
    {Title:"Rolex Yacht-Master", Subtitle:"116622", img:"../img/7.webp", price:"$17,000", id:"7"},
    {Title:"Audemars Piguet Royal Oak Offshore", Subtitle:"26170ST.OO.D101CR.01", img:"../img/8.webp", price:"$25,000", id:"8"},
    {Title:"Rolex Sea-Dweller", Subtitle:"126603", img:"../img/9.png", price:"$12,000", id:"9"},
    {Title:"Audemars Piguet Royal Oak Offshore", Subtitle:"26402ST.OO.1000ST.01", img:"../img/10.webp", price:"$30,000", id:"10"},
    {Title:"Rolex Cosmograph Daytona", Subtitle:"116500LN", img:"../img/11.webp", price:"$30,000",id: "11"}


]

function StoreCard() {
  const [isHovered, setIsHovered] = React.useState(null);

  const handleMouseEnter = (id) => setIsHovered(id);
  const handleMouseLeave = () => setIsHovered(null);

  return (
    <div class="container">
      <div class="row">
        {card.map(card => (
          <div class="col-sm-3">
          <Card
            onMouseEnter={() => handleMouseEnter(card.id)}
            onMouseLeave={handleMouseLeave} 
            key={card.id} 
            className={isHovered === card.id ? "hovered" : ""}
            border="light" 
            style={{ width: '18rem' ,background: '#FAFAFA', borderRadius: "0px",width: '245px', height: '376px'}}
          >
            <div style={{padding:'48px 24px'}}>
              <Card.Title style={{fontFamily: 'Playfair Display',fontStyle: 'normal',fontWeight: '700',fontSize: '17px',lineHeight: '26px',color: '#252B42'}}>{card.Title}</Card.Title>
              <Card.Subtitle style={{fontFamily: 'Playfair Display',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '20px',letterSpacing: '0.2px',color: '#737373'}}>{card.Subtitle}</Card.Subtitle>
              <Card.Img variant="top" src={card.img} />
              <Card.Body>
                <Card.Text style={{fontFamily: 'Playfair Display',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '20px',textAlign: 'center',letterSpacing: '0.2px',color: '#2DC071'}}>
                  {card.price}
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
          </div>
        ))}
        </div>
      </div>
  );
}

export default StoreCard;


