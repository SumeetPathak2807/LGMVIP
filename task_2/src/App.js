import React,{useState} from 'react';
import * as ReactBootStrap from "react-bootstrap";

import classes from './App.module.css';
import ProductData from './ProductData';

function App() {

    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const [cross, setcross] = useState(false);

    const getApiData = async () => {
        const url = "https://reqres.in/api/users?page=1";
            fetch(url)
            .then((response) => response.json())
            .then(result  => {
                console.log(result);
                setdata(result.data)
                    setloading(true);
                    setTimeout(() => {
                        setloading(false);
                    }, 1000);
                    setcross(true);
            });
    }

  return (
    <div className="App">
      <header className="App-header">
          <nav className={classes.Topbar}>
          <ul className='d-flex justify-content-between'>
          <li style={{listStyle:"none"}} className={classes.Cname}>WatchStore</li>  
          <li onClick={getApiData} className="get pt-3"><a href="#user2" className="btn btn-outline-success">Get Users </a></li>
          </ul>           
        </nav>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src='https://imgur.com/iOeUBV7.png' alt='Product Preview'/>
        </div>

        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Colored Watch"/>
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Colored Watch"/>
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Colored Watch"/>
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Colored Watch"/>
          </div>

          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
      </div>
      <div>
      {loading ? <div className="circle"><ReactBootStrap.Spinner className="spinner" animation="border" /></div> : ""}
        {loading ? "" : <ul className='card m-2'>
        {cross ?<p onClick={() => setloading(true)} className="close ">X</p> : "" }
        <div className='justify-content-around d-flex ' style={{backgroundColor:"#ffffff",}}>
             
        {data.map((item) => (
          
            <div className="person card" id="user2">   
                <img className="card-image-top" style={{
                  minWidth:"150px", height:"100%", 
                }} src={item.avatar} alt="users" srcset="" />
                <div className="p-2">
                <h1 className="h1">{item.first_name}</h1>
                <p className="p">{item.last_name}</p>
                <p className="p">{item.email}</p>
            </div>
            </div>
        ))}
        </div>
        
    </ul>}
    </div>
    </div>
    
  );
}

export default App;
