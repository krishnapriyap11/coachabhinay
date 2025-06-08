import React, { useState } from "react";
import "./Form.css";



const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    instagram: "",
    sex: "",
    coachingCategory: [], // Ensure this is always an array
    usingPerformanceEnhancements: false,
    financiallyInvest: "",
    additionalInfo: "" // New field for additional information
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        // If the checkbox is checked, add the value to the array
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
    } else if (type === "select-multiple") {
      const options = Array.from(e.target.selectedOptions, (option) => option.value);
      setFormData({
        ...formData,
        [name]: options,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwu6D9MB7lye37uqO0FbONEk9wEexxtwuGhrKwIhcctInUK5hGGgHT2-BpCZ2upJMWx1A/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (result.result === "success") {
        alert("Form submitted successfully!");
  
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          instagram: "",
          sex: "",
          coachingCategory: [],
          usingPerformanceEnhancements: false,
          financiallyInvest: "",
          additionalInfo: ""
        });
  
      } else {
        alert("There was an issue submitting the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };
  
  
  

  return (
    <div className="home-container"
    style={{
      backgroundImage: "url('/background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    }}
  >
    <form onSubmit={handleSubmit}>
      {/* Full Name */}
      <div>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      {/* Phone Number */}
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Instagram */}
      <div>
        <label>Instagram</label>
        <input
          type="text"
          name="instagram"
          value={formData.instagram}
          onChange={handleChange}
        />
      </div>

      {/* Sex */}
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

      {/* Coaching Category */}
      <div>
        <label>What category of coaching would you like to discuss?</label>
        <br></br>
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

      {/* Performance Enhancements */}
      {/* Performance Enhancements */}
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


      {/* Financial Investment */}
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

      {/* Additional Information */}
      <div>
        <label>What would you like me to know about you before we chat?</label>
        <textarea
          name="additionalInfo"
          placeholder="This is to help me prepare for our discussion"
          value={formData.additionalInfo}
          onChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );

};

export default Form;
