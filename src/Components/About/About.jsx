import React from 'react'
import "./About.css";
import aboutImg from "../../assets/img/about-img.png";


const About = () => {
  return (
    <section className="about container">
      <div>
        <h3 className='h3'>About Our Shop</h3>
        <h2 className='h2'>Coffee distribution </h2>
        <p className='p'>
          has a more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English. Many
          desktop publishing packages and web page editorhas a more-or-less normal
          distribution of letters, as oppos
        </p>
        <button className='read-btn'>Read More</button>
      </div>
      <div>
        <img src={aboutImg} alt="preetylady" />
      </div>
    </section>
  );
}

export default About