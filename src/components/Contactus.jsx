import React, { useState } from "react";
 

function ContactForm() {
  const initialData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [showPopup, setShowPopup] = useState(false);
  const [formError, setFormError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      setFormError("Please fill out all fields before submitting.");
    } else {
      setShowPopup(true);
      setFormError(null);
    }
  };
  return (
    <>
    <div className="flex justify-center items-center h-screen bg-red-500">
   
   <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
     <h1 className="text-3xl font-semibold text-center mb-6 text-blue-600">
       Contact Us
     </h1>
     {showPopup ? (
       <div className="popup bg-white p-4 rounded-lg shadow-md">
         <h2 className="text-xl font-semibold mb-2">Form Data</h2>
         <p className="mb-2">Name: {formData.name}</p>
         <p className="mb-2">Email: {formData.email}</p>
         <p>Message: {formData.message}</p>
         <button
           onClick={() => setShowPopup(false)}
           className="mt-4 bg-blue-500 hover-bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
         >
           Close
         </button>
       </div>
     ) : (
       <form onSubmit={handleSubmit} className="space-y-4">
         <div>
           <label
             htmlFor="name"
             className="block text-gray-700 font-medium mb-2"
           >
             Name:
           </label>
           <input
             type="text"
             id="name"
             name="name"
             className="w-full px-4 py-2 border rounded-md bg-blue-100 focus:bg-white outline-none"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
           />
         </div>
         <div>
           <label
             htmlFor="email"
             className="block text-gray-700 font-medium mb-2"
           >
             Email:
           </label>
           <input
             type="email"
             id="email"
             name="email"
             className="w-full px-4 py-2 border rounded-md bg-blue-100 focus-bg-white outline-none"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
           />
         </div>
         <div>
           <label
             htmlFor="message"
             className="block text-gray-700 font-medium mb-2"
           >
             Message:
           </label>
           <textarea
             id="message"
             name="message"
             className="w-full px-4 py-2 border rounded-md bg-blue-100 focus:bg-white outline-none"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             rows="4"
           ></textarea>
         </div>
         {formError && <div className="text-red-500">{formError}</div>}
         <div className="text-center">
           <button
             type="submit"
             className="bg-blue-500 hover-bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
           >
             Submit
           </button>
         </div>
       </form>
     )}
   </div>
 </div>
    </>

  );
}
export default ContactForm;
