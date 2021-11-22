import { useRef } from "react";
import axios from "axios";
import { server } from "../config";

function LogIn(e) {
  e.preventDefault;
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const logIn = async () => {
    const creds = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(creds);

    // const res = await fetch(`/api/logIn`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(creds),
    // });

    const res = await axios.post(`${server}/api/logIn`, creds);

    console.log(res.status);
  };

  return (
    <div>
      <h1>Log In</h1>
      <form>
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
          <button onClick={logIn} type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
