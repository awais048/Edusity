import React, { useState } from "react";
import "./Testimonials.css";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
  };

  const testimonials = [
    {
      name: "William Jackson 1",
      company: "Edusity, USA",
      image: user_1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sunt praesentium quis ullam impedit quos aliquid obcaecati natus, rem ab minus delectus nemo saepe quibusdam. Atque obcaecati vel ipsum quam?",
    },
    {
      name: "William Jackson 2",
      company: "Edusity, USA",
      image: user_2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sunt praesentium quis ullam impedit quos aliquid obcaecati natus, rem ab minus delectus nemo saepe quibusdam. Atque obcaecati vel ipsum quam?",
    },
    {
      name: "William Jackson 3",
      company: "Edusity, USA",
      image: user_3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sunt praesentium quis ullam impedit quos aliquid obcaecati natus, rem ab minus delectus nemo saepe quibusdam. Atque obcaecati vel ipsum quam?",
    },
    {
      name: "William Jackson 4",
      company: "Edusity, USA",
      image: user_4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sunt praesentium quis ullam impedit quos aliquid obcaecati natus, rem ab minus delectus nemo saepe quibusdam. Atque obcaecati vel ipsum quam?",
    },
  ];

  return (
    <div className="testimonials">
      <div className="bt">
        <button className="prev" onClick={prevSlide}>
            <img src={back_icon} alt="Previous" />
          </button>
          <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div className="slide" key={index}>
              <div className="slide-content">
                <div className="user-info">
                  <img src={testimonial.image} alt="" />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
                <p>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
          <button className="next" onClick={nextSlide}>
            <img src={next_icon} alt="Next" />
          </button>
      </div>
     
    </div>
  );
};

export default Testimonials;
