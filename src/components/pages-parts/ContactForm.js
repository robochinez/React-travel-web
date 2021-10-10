import { React, useState } from "react";

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const submitContact = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={submitContact}>
      <div className="group">
        <h3 className="page__contact__heading">Contact form</h3>
      </div>
      <div className="group">
        <input
          type="text"
          name=""
          className="group__control"
          placeholder="your name"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </div>
      <div className="group">
        <input
          type="email"
          name=""
          className="group__control"
          placeholder="your email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </div>
      <div className="group">
        <textarea
          name=""
          id=""
          cols="12"
          rows="8"
          className="group__textarea"
          placeholder="write your message ... "
          defaultValue={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
        ></textarea>
        <div className="group">
          <input type="submit" value="send email &rarr;" className="btn-dark" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
