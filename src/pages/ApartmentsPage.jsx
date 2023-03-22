import { useEffect, useState } from "react";
import axios from "axios";
 
function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  const APIurl = "https://ironbnb-m3.herokuapp.com/apartments"

  const fetchApartments = async() => {
    try{
        const response  = await axios.get(APIurl)
        console.log(response.data)
        setApartments(response.data)
        console.log('THIS IS THE APARTMENST LIST:', apartments)

    }catch(err){
        console.log(err)
    }
  }

useEffect(() => {
    fetchApartments()
}, [])
  
  return (
    <div>
      <h3>List of apartments</h3>
      {apartments.map((apartment) => (
        <div key={apartment._id} className="card">
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.title}</h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div>
      ))}
    </div>
  );
}
 
export default ApartmentsPage;