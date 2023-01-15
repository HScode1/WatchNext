

function Contact(){
    return(
        <>  
            <img src={require("../img/2.webp")} alt="" style={{position : 'absolute'}}/>
            <img src={require("../img/4.webp")} alt="" style={{position : 'absolute', marginLeft:'1100px'}}/>
            <div style={{position : 'absolute' ,marginTop: '21.47%',marginLeft:'37.46%'}} >
                <h1 >A Price to suit everyone</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing <br></br>elit. Commodi architecto laboriosam maiores, explicabo laborum repellat,<br></br> obcaecati beatae at vel quae repellendus! Quam autem illum sit.</p>
                <div style={{textAlign : 'center',}}>
                    <h1>$40</h1>
                    <div className="mx-auto my-auto">
                        <button type="button" style={{backgroundColor:"#1565C0"}} className="btn btn-primary">Primary</button>
                    </div>
                </div>
            </div>
            <div>
                <svg width="100%" height="910" viewBox="0 0 1512 910" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M245.16 8.80497C806.119 119.447 1501.43 8.80497 1501.43 8.80497C1501.43 8.80497 1958.57 1065.9 1501.43 911.267C1044.29 756.635 592.378 956.59 245.16 911.267C-102.059 865.944 -315.799 -101.837 245.16 8.80497Z" fill="#E7ECFF"/>
                </svg>
            </div>
        </>

    );

}

export default Contact;

