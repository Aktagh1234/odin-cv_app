import React, { Component } from "react";

class GeneralInfo extends Component {
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
    const { name, email, phone } = this.state.form;

    return (
      <div className="card">
        <h2>General Info</h2>
        {this.state.editMode ? (
          <>
            <input
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
            />
            <input
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
            <input
              name="phone"
              placeholder="Phone"
              value={phone}
              onChange={this.handleChange}
            />
            <button onClick={this.saveData}>Save</button>
          </>
        ) : (
          <>
            <p><b>Name:</b> {name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
            <button onClick={() => this.setState({ editMode: true })}>
              Edit
            </button>
          </>
        )}
      </div>
    );
  }
}

export default GeneralInfo;