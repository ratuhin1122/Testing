import './Contact.css'
import React from 'react'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e7706009-fffd-4d8e-825e-09ab56835401");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    
    return (
        <div className="contact">
            <div className="contact-col">
                <h3> Send us a Message <img src={msg_icon} alt="" /> </h3>
                <p>Feel free to reach out through contact form or find our contactinformation below. Your feedback, question, and suggestion are important to us as westrive to provide exceptional service to our university community</p>
                <ul>
                    <li> <img src={mail_icon} alt="" /> Email : ruhulamintuhin715@gmail.com</li>
                    <li> <img src={phone_icon} alt="" /> Phone : +8801322297157</li>
                    <li> <img src={location_icon} alt="" /> Address : Sylhet, Bangladesh</li>
                    
                </ul>

            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label> Your Name</label>
                    <input type="text" name='name' placeholder='Enter your Name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter Phone number' required />
                    <label> Write Your Message Here</label>
                    <textarea name="message" rows="6" placeholder='Enter Your Message Here' required></textarea>
                    <button type='submit' className='btn dark-btn'> Submit <img src={white_arrow} alt="" /></button>
                </form>
                <span> {result}</span>

            </div>
            
        </div>
    );
};

export default Contact;