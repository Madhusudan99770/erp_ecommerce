import React from "react";
import img from "../assets/img/loginImg.png";

export default function Login() {
  return (
    <div  className="main">
    <div className="container h-100" >
       {/* background-image: url("bgdesert.jpg"); */}
       
      <div className="loginContainer">
        <div className="d-flex justify-content-center h-100 mt-5">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container mt-4">
                <img src={img} className="brand_logo" alt="Logo" />
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    name=""
                    className="form-control input_user"
                    defaultValue=""
                    placeholder="username"
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key" />
                    </span>
                  </div>
                  <input
                    type="password"
                    name=""
                    className="form-control input_pass"
                    defaultValue=""
                    placeholder="password"
                  />
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlInline"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customControlInline"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="button" name="button" className="btn login_btn">
                    <a href="/ModalFile"> Login</a>
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Don't have an account?{" "}
                <a href="/Signup" className="ml-2">
                  Sign Up
                </a>
              </div>
              <div className="d-flex justify-content-center links">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
