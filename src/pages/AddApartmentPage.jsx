import axios from "axios";
import { useState } from "react";  
import { useNavigate } from "react-router-dom"

function AddApartmentPage() {

    const [headline, setHeadline] = useState('')
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState('')

    //React Router’s useNavigate() hook returns a function that lets you navigate programmatically.
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const body = {title:headline, pricePerDay: price, img:img}

        try{

            await axios.post("https://ironbnb-m3.herokuapp.com/apartments", body)
            setHeadline('')
            setPrice(0)
            setImg('')
            navigate('/');  

        }catch(err){
            console.log(err)
        }
    }

    return (
      <div className="AddApartmentPage">
        <h3>Add New Apartment</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input 
                type='text'
                name='headLine'
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
            />
            <label>Price</label>
            <input 
                type='text'
                name='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <label>Image URL</label>
            <input
                type='text'
                name='img'
                value={img}
                onChange={(e) => setImg(e.target.value)}
            >
            </input>
            <button type='submit'>Create Apartment</button>
        </form>
      </div>
    );
  }
   
  export default AddApartmentPage;