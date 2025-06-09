import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const base = process.env.PUBLIC_URL;

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    instagram: "",
    sex: "",
    coachingCategory: [],
    usingPerformanceEnhancements: "",
    financiallyInvest: "",
    additionalInfo: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const newCoachingCategory = checked
          ? [...prevData.coachingCategory, value]
          : prevData.coachingCategory.filter((item) => item !== value);

        return {
          ...prevData,
          [name]: newCoachingCategory,
        };
      });
    } else if (type === "radio") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      fullName,
      phoneNumber,
      email,
      instagram,
      sex,
      coachingCategory,
      usingPerformanceEnhancements,
      financiallyInvest,
      additionalInfo,
    } = formData;

    if (
      !fullName.trim() ||
      !phoneNumber.trim() ||
      !email.trim() ||
      !instagram.trim() ||
      !sex ||
      coachingCategory.length === 0 ||
      !usingPerformanceEnhancements ||
      !financiallyInvest ||
      !additionalInfo.trim()
    ) {
      alert("Please fill all the fields before submitting.");
      return;
    }

    const message = `
New Coaching Inquiry:
Name: ${fullName}
Phone: ${phoneNumber}
Email: ${email}
Instagram: ${instagram}
Sex: ${sex}
Category: ${coachingCategory.join(", ")}
Using Enhancements: ${usingPerformanceEnhancements}
Willing to Invest: ${financiallyInvest}
Additional Info: ${additionalInfo}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "919605228158"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      instagram: "",
      sex: "",
      coachingCategory: [],
      usingPerformanceEnhancements: "",
      financiallyInvest: "",
      additionalInfo: ""
    });
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${base}/background.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Instagram</label>
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Sex</label>
          &nbsp;
          <label>
            <input
              type="radio"
              name="sex"
              value="male"
              checked={formData.sex === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          &nbsp;
          <label>
            <input
              type="radio"
              name="sex"
              value="female"
              checked={formData.sex === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <div>
          <label>What category of coaching would you like to discuss?</label>
          <br />
          <label>
            <input
              type="checkbox"
              name="coachingCategory"
              value="transforming"
              checked={formData.coachingCategory.includes("transforming")}
              onChange={handleChange}
            />
            Transforming
          </label>
          &nbsp;
          <label>
            <input
              type="checkbox"
              name="coachingCategory"
              value="competition"
              checked={formData.coachingCategory.includes("competition")}
              onChange={handleChange}
            />
            Competition
          </label>
        </div>

        <div className="radio-group">
          <label>Are you using performance enhancements?</label>
          <label>
            <input
              type="radio"
              name="usingPerformanceEnhancements"
              value="yes"
              checked={formData.usingPerformanceEnhancements === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="usingPerformanceEnhancements"
              value="no"
              checked={formData.usingPerformanceEnhancements === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <div>
          <label>Are you prepared to financially invest in your goals?</label>
          &nbsp;
          <label>
            <input
              type="radio"
              name="financiallyInvest"
              value="yes"
              checked={formData.financiallyInvest === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          &nbsp;
          <label>
            <input
              type="radio"
              name="financiallyInvest"
              value="no"
              checked={formData.financiallyInvest === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <div>
          <label>What would you like me to know about you before we chat?</label>
          <textarea
            name="additionalInfo"
            placeholder="This is to help me prepare for our discussion"
            value={formData.additionalInfo}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
