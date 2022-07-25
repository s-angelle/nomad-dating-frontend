import { useState } from "react";
import { signUp } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import SignUpPhoto from "../../images/Who-We-Are.png";
import "./SignUp.css";

const SignUp = ({ setUser }) => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    image: "",
    phone: "",
    age: 0,
    email: "",
    password: "",
    repassword: "",
    about: "",
    active: true,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signUp(newUser);
      setUser(user);
      if (user) navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section id="sign-up" className="h-90">
      <div className="container py-4 h-50">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col h-40">
            <div className="card card-registration">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    id="sign-up-photo"
                    src={SignUpPhoto}
                    alt="group of friends in van"
                    className="img-fluid"
                  />
                </div>
                <form className="col-xl-6" onSubmit={handleSubmit}>
                  <div id="signup-card" className="card-body p-md-3 text-black">
                    <h3 className="mb-5 mt-2 text-uppercase text-center">
                      Join Us
                    </h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            className="form-control form-control-lg"
                            name="firstName"
                            value={newUser.firstName}
                            onChange={handleChange}
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1m"
                          >
                            First name:
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1n"
                            className="form-control form-control-lg"
                            name="lastName"
                            value={newUser.lastName}
                            onChange={handleChange}
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1n"
                          >
                            Last name:
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-2 mb-4">
                        <div className="form-outline">
                          <input
                            type="number"
                            id="form3Example1m1"
                            className="form-control form-control-lg"
                            name="age"
                            value={newUser.age}
                            onChange={handleChange}
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1m1"
                          >
                            Age:
                          </label>
                        </div>
                      </div>
                      <div className="col-md-5 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="phone"
                            value={newUser.phone}
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1n1"
                          >
                            Phone Number:
                          </label>
                        </div>
                      </div>

                      <div className="col-md-5 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="picture"
                            value={newUser.image}
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1n1"
                          >
                            Profile Photo:
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        value={newUser.email}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example8">
                        Email:
                      </label>

                      <input
                        type="password"
                        className="form-control form-control-lg"
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example9">
                        Password:
                      </label>

                      <input
                        type="password"
                        className="form-control form-control-lg"
                        name="repassword"
                        value={newUser.repassword}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example9">
                        Re-type Password:
                      </label>

                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="about"
                        value={newUser.about}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example9">
                        A few of your interests:
                        <input
                          type="about"
                          className="form-control form-control-lg"
                          required
                        />
                      </label>
                    </div>
                    <button className="btn btn-primary mb-4" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
