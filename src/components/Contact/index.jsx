import React from 'react';
import "./style.css";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
  e.preventDefault();

emailjs.sendForm('service_5msbb8q', 'template_6yewgib', e.target, 'user_HeLKYW29Z1ogFyr6fChzg')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
}
  return (
    <div className="contact">
      <h1>
      <a href="#!">
      <span>C</span>
      <span>o</span>
      <span>n</span>
      <span>t</span>
      <span>a</span>
      <span>c</span>
      <span>t</span>
      <a href="#!" className="dist">
      <span>m</span>
      <span>e</span>
      </a>
      </a>
      </h1>
      <p>If you want to reach out for opportunities or want to know more about me. Please go ahead and use the form.
      </p>

      <div class="contact-in">
			  <div class="contact-map">
			  	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.598992317228!2d151.05034205129965!3d-33.95144063069003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b94a075612d3%3A0xd0fa66f2deaa0ac7!2sRiverwood!5e0!3m2!1sen!2sau!4v1620299170143!5m2!1sen!2sau" 
          allowfullscreen="" 
          loading="lazy">
          </iframe>
			  </div>
			  <div class="contact-form">
				  <form onSubmit={ sendEmail }>
					  <input type="text" placeholder="Name" name="name" class="contact-form-txt" required />
					  <input type="email" placeholder="Email" name="email" class="contact-form-txt" required />
            <input type="text" placeholder="Subject" name="subject" class="contact-form-txt" required />
					  <textarea placeholder="Your message" name="message" class="contact-form-textarea" required ></textarea>
            <button className="contact-form-btn">Submit</button>
					  {/* <input type="submit" name="Submit" class="contact-form-btn" /> */}
				  </form>
			  </div>
		  </div>
    </div>
    
  );
};

