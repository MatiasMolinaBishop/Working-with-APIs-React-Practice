import { useState } from "react";
import axios from "axios";
 
function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);
  
  return (
    <div>
      <h3>List of apartments</h3>
    </div>
  );
}
 
export default ApartmentsPage;