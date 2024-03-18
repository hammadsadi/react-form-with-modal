import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!isChecked) {
      return alert("Sorry You Cannot Agree Our Terms");
    }
    console.log({ name, email, password });
    setModal(true);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-stone-900">
      <div className="text-white p-6 rounded-xl bg-stone-800">
        <h2 className="text-center text-3xl py-4"> Signup Form</h2>
        <form className="space-y-3" onSubmit={(e) => handleSubmitForm(e)}>
          <div className="space-y-2">
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              placeholder="Name"
              className="w-full py-2 px-7 focus:outline-none text-white rounded-md text-base bg-stone-900"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name">Email</label> <br />
            <input
              type="email"
              placeholder="Email"
              className="w-full py-2 px-7 focus:outline-none text-white rounded-md text-base bg-stone-900"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name">Password</label> <br />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 px-7 focus:outline-none text-white rounded-md text-base bg-stone-900"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={(e) => setIsChecked(e.target.checked)}
          />{" "}
          Are You Agree With Our Terms & Condition?
          <div className="text-right">
            <button
              className="py-2 px-6 rounded-md bg-stone-900 mt-2"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      {modal && (
        <div className="bg-stone-800 w-full h-screen fixed top-0 flex justify-center items-center text-white">
          <div className="h-1/2 w-1/3 bg-slate-800 p-3 text-center rounded-lg">
            <h2>Your Form Submited Successfully</h2>

            <button onClick={() => setModal(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
