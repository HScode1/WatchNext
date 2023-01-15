import MultiCard from './MultiCard';


function Hero(){
    return(
    <>
    
     <div className="mw-100" style={{position : 'absolute'}}>
        <img className="mw-100 h-50" src ={require("../img/pexels-pixabay-364822 (1).jpg")} alt="Rolex"/>
      </div>
      <MultiCard className="mt-100"  style={{position : "absolute"}}/>
      </>
    );
}

export default Hero;
