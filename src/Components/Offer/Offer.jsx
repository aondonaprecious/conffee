import React from 'react'
import assets from '../../assets/assets'
import './Offer.css'
const Offer = () => {
  return (
    <section className="offer">
      <h3>OUR COFFEE OFFER </h3>
      <div className="cards">
        <div className="card">
          <img src={assets.offer1} alt="" />
            {/* <img src={assets.offer1} alt="" /> */}
            <h4>Types of Coffee</h4>
            <p>looking at its layout. The point of</p>
            <button>Read More</button>
            </div>
            
          <div className="card">
            <img src={assets.offer2} alt="" />
            <h4>Types of Coffee</h4>
            <p>looking at its layout. The point of</p>
            <button>Read More</button>
          </div>

          <div className="card">
            <img src={assets.offer3} alt="" />
            <h4>Types of Coffee</h4>
            <p>looking at its layout. The point of</p>
            <button>Read More</button>
          </div>

          <div className="card">
            <img src={assets.offer4} alt="" />
            <h4>Types of Coffee</h4>
            <p>looking at its layout. The point of</p>
            <button>Read More</button>
          </div>

        </div>
    </section>
  );
}

export default Offer