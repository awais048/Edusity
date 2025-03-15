import React from "react";
import "./Contact.css";
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

    formData.append("access_key", "17d03165-4a12-4e44-a9b1-c53b869cbe09");

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
      <div className="contact-col c1">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          incidunt saepe quia excepturi ea sapiente iste. Esse ab ullam,
          laboriosam possimus inventore molestiae, dolor deleniti ad voluptates
          obcaecati temporibus?
        </p>
        <div className="ul-tag">
            <li><img src={mail_icon} alt="" />awi.engr@gmail.com</li>
            <li><img src={phone_icon} alt="" />0303-301206</li>
            <li><img src={location_icon} alt="" />village gahi khan shaikh</li>
        </div>
      </div>
      <div className="contact-col">
        <form action="POST" onSubmit={onSubmit}>
            <label htmlFor="">Your name</label>
            <input type="text" name="name" required/>
            <label htmlFor="">Phone Number</label>
            <input type="tel" name="phone" required/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows={6} placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
