/*jshint esversion: 6 */
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../actions/leads";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLeads();
  };

  render() {
    return (
      <Fragment>
        <section className="section">
          <h2 className="title is-2">Leads List</h2>

          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { this.props.leads.map(lead => (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button onClick={this.props.deleteLead.bind(this, lead.id)} className="button is-danger is-small">
                      Delete
                    </button>
                  </td>
                </tr>
              )) }
            </tbody>
          </table>
        </section>

      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  // state.<reducer>.<component>
  leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
