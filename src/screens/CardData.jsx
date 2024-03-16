import React from "react";
import "./CardStyle.css";
export default function Card() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card col-3 m-4" id="card-container">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
              className="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="price" ><b className="text-align-center">Price: 150Rs</b></div>
              <div className="row justify-content-center col-14">
                <button className="Add-to-cart-btn col-4 left">Buy</button>
                <select name="Quantity" id="" className="col-4">
                    {
                        Array.from(Array(6) ,(e,i)=>{
                            return(
                                <option value={i+1} key={i+1}>{i+1}</option>
                            )
                        })
                    }
                    
                </select>
              </div>
              <p className="card-text">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
