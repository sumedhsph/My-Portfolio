import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import contactImg from "../assets/contact_img.svg";
import contactBg from "../assets/contactBg.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  //Validation for email and name
  const [isBtnDisable, setBtnDisable] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else {
      newErrors.name = "";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    } else {
      newErrors.email = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // console.log(formData);
      try {
        const res = await fetch("https://formspree.io/f/xjvnrkqv", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          console.log("form submitted");
          toast.success("Your message has been sent!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          //resetform();
        } else {
          console.log("form submit failed");
          toast.error("Something went wrong!");
        }
      } catch (error) {
        console.log(error.message);
        toast.error("Oops, something went wrong!");
      }
    } else {
      console.log("Please fill out all fields correctly!");
      toast.error("Please fill out all fields correctly!");
    }
  };

  useEffect(() => {
    if (formData.name !== "" && formData.email !== "") {
      setBtnDisable(false);
    } else if (formData.email === "") {
    } else {
      setBtnDisable(true);
    }
  }, [formData]);
  return (
    <section
      id="contact"
      style={{ backgroundImage: `url(${contactBg})`, backgroundSize: "cover" }}
      className="contact"
    >
      <Container>
        <h2 className="text-5xl font-bold text-center mb-16 text-primary">
          Contact me
        </h2>
        <ToastContainer />
        <div className="grid sm:grid-cols-2 gap-6 content-center	">
          <div className="flex justify-center">
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="*Name"
                  autoComplete="on"
                  onChange={handleChange}
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <div className="text-red-600">{errors.name}</div>
              </div>
              <div className="form-control mb-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="*Email Address"
                  autoComplete="on"
                  onChange={handleChange}
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <div className="text-red-600">{errors.email}</div>
              </div>
              <div className="form-control mb-4">
                <textarea
                  name="message"
                  id="message"
                  className="textarea textarea-primary w-full max-w-xs"
                  placeholder="Message"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-control">
                <button
                  className="btn btn-wide btn-primary"
                  disabled={isBtnDisable}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div>
            <img src={contactImg} alt="Contact" className="max-w-md" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
