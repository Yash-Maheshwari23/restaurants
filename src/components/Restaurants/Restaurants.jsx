import React,{useState, useEffect} from 'react'
import Card from '../card/card';
const Restaurants = () => {
    const [Restaurants, setRestaurants] = useState([]);
    const [restDetails, setrestDetails] = useState();

    const getRestData = async() => {
        try{
            const apiurl = `https://foodbukka.herokuapp.com/api/v1/restaurant`;
            const response = await fetch(apiurl);
            const data = await response.json();
            setRestaurants(data);
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }
    const getrestDetails = async(id) => {
        const apiUrl = `https://foodbukka.herokuapp.com/api/v1/restaurant/${id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setrestDetails(data);
    }
    const detailsBtnHandler = (id) => {
        getrestDetails(id);
    }

    useEffect(()=>{
        getRestData();
    })
  return (
      <React.Fragment>
    <div className="side-header">
        <h1>
            {`Total Restaurants: ${Restaurants.Result.length}`}
        </h1>
        </div>
        <div className="user-container">
            {Restaurants.map((Restaurant)=>(
                <Card key={Restaurant.id} Restaurant={Restaurant} detailsBtnHandler={detailsBtnHandler}/>
            ))}
        </div>
    </React.Fragment>
  )
}

export default Restaurants