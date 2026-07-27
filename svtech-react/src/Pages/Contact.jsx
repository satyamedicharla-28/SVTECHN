import "./Contact.css";
import { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";


function Contact() {


  const [form, setForm] = useState({

    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""

  });



  // Handle input changes

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };



  // Submit Contact Form

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("/api/contacts", form);

    alert(response.data.message || "Message sent successfully");

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("Contact Error:", error);

    if (error.response) {
      console.log(error.response.data);
      alert(error.response.data.message);
    } else if (error.request) {
      alert("Cannot connect to backend server.");
    } else {
      alert(error.message);
    }
  }
};


return (
  <Layout>


      {/* HERO */}

      <section className="contact-hero">

        <div className="contact-overlay">

          <h1>Contact Us</h1>

          <p>
            We'd love to hear from you. Whether you have a project,
            a business inquiry, or need engineering support,
            our team is here to help.
          </p>

        </div>

      </section>



      {/* CONTACT */}

      <section className="contact-section">


        <div className="contact-container">


          {/* LEFT CARD */}

          <div className="contact-info">


            <h2>Let's Start a Conversation</h2>


            <p>
              SVTech Networks provides Telecom Design, GIS Solutions,
              CAD Services, Fiber Network Design, Survey and Project
              Management solutions across various industries.
            </p>



            <div className="info-box">

              <Phone />

              <div>

                <h4>Phone</h4>

                <p>+91 9515205087 , </p>

              </div>

            </div>



            <div className="info-box">

              <Mail />

              <div>

                <h4>Email</h4>

                <p>hr@svtechn.com</p>

              </div>

            </div>




            <div className="info-box">

              <MapPin />

              <div>

                <h4>Office</h4>

                <p>
                  SVTech Networks Pvt. Ltd.
                  <br/>
                  Hyderabad, Telangana, India
                </p>

              </div>

            </div>



            <div className="info-box">

              <Clock />

              <div>

                <h4>Working Hours</h4>

                <p>
                  Monday – Saturday
                  <br/>
                  9:00 AM – 6:00 PM
                </p>

              </div>

            </div>


          </div>




          {/* FORM CARD */}


          <div className="contact-form">


            <h2>Send Us a Message</h2>



            <form onSubmit={handleSubmit}>


              <div className="row">


                <div className="input-group">

                  <label>First Name</label>

                  <input

                    type="text"

                    name="firstName"

                    value={form.firstName}

                    onChange={handleChange}

                    placeholder="Enter First Name"

                    required

                  />

                </div>



                <div className="input-group">

                  <label>Last Name</label>

                  <input

                    type="text"

                    name="lastName"

                    value={form.lastName}

                    onChange={handleChange}

                    placeholder="Enter Last Name"

                  />

                </div>


              </div>





              <div className="row">


                <div className="input-group">


                  <label>Email</label>


                  <input

                    type="email"

                    name="email"

                    value={form.email}

                    onChange={handleChange}

                    placeholder="Enter Email"

                    required

                  />


                </div>




                <div className="input-group">


                  <label>Phone</label>


                  <input

                    type="text"

                    name="phone"

                    value={form.phone}

                    onChange={handleChange}

                    placeholder="Enter Phone Number"

                  />


                </div>


              </div>





              <div className="input-group">


                <label>Company</label>


                <input

                  type="text"

                  name="company"

                  value={form.company}

                  onChange={handleChange}

                  placeholder="Company Name"

                />


              </div>






              <div className="input-group">


                <label>Subject</label>


                <input

                  type="text"

                  name="subject"

                  value={form.subject}

                  onChange={handleChange}

                  placeholder="Subject"

                />


              </div>






              <div className="input-group">


                <label>Message</label>


                <textarea

                  rows="6"

                  name="message"

                  value={form.message}

                  onChange={handleChange}

                  placeholder="Write your message..."

                  required

                ></textarea>


              </div>






              <button

                type="submit"

                className="send-btn"

              >

                <Send size={18}/>

                Send Message


              </button>




            </form>


          </div>


        </div>


      </section>





      {/* MAP */}

      <section className="map-section">

        <iframe

          title="Google Map"

          src="https://www.google.com/maps?q=Hyderabad&output=embed"

          loading="lazy"

          allowFullScreen

        ></iframe>


      </section>





      {/* CTA */}


      <section className="contact-bottom">


        <h2>
          Ready to Work With Us?
        </h2>


        <p>

          Let's discuss your Telecom, GIS, CAD or Engineering
          project today.

        </p>


        <button>
          Get In Touch
        </button>


      </section>


  </Layout>
  );
}

export default Contact;
