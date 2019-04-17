import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, password } = this.state;
    return (
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-10">
            <div className="card">
              <header className="card-header is-primary">
                <div className="card-header-title">Login</div>
              </header>
              <div className="card-content">
                <form onSubmit={this.onSubmit}>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input is-rounded"
                        type="email"
                        name="email"
                        onChange={this.onChange}
                        value={email}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        className="input is-rounded"
                        type="password"
                        name="password"
                        onChange={this.onChange}
                        value={password}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <button className="button" type="submit">
                        Login
                      </button>
                    </div>
                  </div>
                </form>

                <div className="content">
                  <p>
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
