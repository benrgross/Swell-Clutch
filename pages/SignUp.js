import { useRef } from "react";

function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const signUp = async (e) => {
    e.preventDefault;

    const creds = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(creds);

    const validate = await fetch(`/api/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    console.log("hello");
    console.log(validate.status);
  };

  return (
    <div>
      <form>
        <h1>Sign Up</h1>
        <div className="col-12">
          <label className="form-label">name</label>
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Your Name"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-12">
          <button onClick={signUp} type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
