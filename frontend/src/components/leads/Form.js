/*jshint esversion: 6 */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  }

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-10">

            <div className="card">
              <header className="card-header is-primary">
                <div className="card-header-title">Add A Lead</div>
              </header>
              <div className="card-content">

                <form onSubmit={this.onSubmit}>

                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                          <input className="input is-rounded" type="text" name="name" onChange={this.onChange} value={name} />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                          <input className="input is-rounded" type="email" name="email" onChange={this.onChange} value={email} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        type="text"
                        name="message"
                        onChange={this.onChange}
                        value={message}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <button className="button" type="submit">Submit</button>
                    </div>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default connect(null, { addLead })(Form);
