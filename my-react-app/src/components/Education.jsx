import React, { Component } from "react";

class Education extends Component {
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
    const { school, degree, year } = this.state.form;

    return (
      <div className="card">
        <h2>Education</h2>
        {this.state.editMode ? (
          <>
            <input
              name="school"
              placeholder="School"
              value={school}
              onChange={this.handleChange}
            />
            <input
              name="degree"
              placeholder="Degree"
              value={degree}
              onChange={this.handleChange}
            />
            <input
              name="year"
              placeholder="Graduation Year"
              value={year}
              onChange={this.handleChange}
            />
            <button onClick={this.saveData}>Save</button>
          </>
        ) : (
          <>
            <p><b>School:</b> {school}</p>
            <p><b>Degree:</b> {degree}</p>
            <p><b>Year:</b> {year}</p>
            <button onClick={() => this.setState({ editMode: true })}>
              Edit
            </button>
          </>
        )}
      </div>
    );
  }
}

export default Education;