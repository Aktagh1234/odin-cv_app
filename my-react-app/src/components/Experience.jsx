import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      form: { ...props.data }
    };
  }

  handleChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value }
    });
  };

  saveData = () => {
    this.props.onUpdate(this.state.form);
    this.setState({ editMode: false });
  };

  render() {
    const { company, role, years } = this.state.form;

    return (
      <div className="card">
        <h2>Experience</h2>
        {this.state.editMode ? (
          <>
            <input
              name="company"
              placeholder="Company"
              value={company}
              onChange={this.handleChange}
            />
            <input
              name="role"
              placeholder="Role"
              value={role}
              onChange={this.handleChange}
            />
            <input
              name="years"
              placeholder="Years Worked"
              value={years}
              onChange={this.handleChange}
            />
            <button onClick={this.saveData}>Save</button>
          </>
        ) : (
          <>
            <p><b>Company:</b> {company}</p>
            <p><b>Role:</b> {role}</p>
            <p><b>Years:</b> {years}</p>
            <button onClick={() => this.setState({ editMode: true })}>
              Edit
            </button>
          </>
        )}
      </div>
    );
  }
}

export default Experience;