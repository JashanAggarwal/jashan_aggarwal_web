import React, { useRef, useState } from 'react';

function ContactusForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const queryRef = useRef(null);

  const [btnClicked, setBtnClicked] = useState(false);

  const handleSubmit = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const query = queryRef.current.value;

    setBtnClicked(true);

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Query:', query);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            ref={nameRef}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor='address'>Address</label>
          <textarea
            id='address'
            ref={addressRef}
          />
        </div>
        <div>
          <label htmlFor='query'>Query</label>
          <select
            id='query'
            ref={queryRef}
          >
            <option value=''>--Select--</option>
            <option value='product'>Product</option>
            <option value='promo'>Promo</option>
            <option value='about'>About</option>
            <option value='contact'>Contact</option>
          </select>
        </div>
        <div>
          <button type='button' onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      <div>
        <h2>Name: {nameRef.current && nameRef.current.value}</h2>
        <h2>Email: {emailRef.current && emailRef.current.value}</h2>
        <h2>Address: {addressRef.current && addressRef.current.value}</h2>
        <h2>Query: {queryRef.current && queryRef.current.value}</h2>
        <h2>Button Clicked: {btnClicked ? "Yes" : "No"}</h2>
      </div>
    </div>
  );
}

export default ContactusForm;
