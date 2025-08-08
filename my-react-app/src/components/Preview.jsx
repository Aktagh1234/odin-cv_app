import React, { Component } from "react";

class Preview extends Component {
  render() {
    const { general, education, experience } = this.props;

    return (
      <div className="preview">
        <h2>CV Preview</h2>
        <hr />
        <h3>General Info</h3>
        <p>{general.name} | {general.email} | {general.phone}</p>

        <h3>Education</h3>
        <p>{education.degree} - {education.school} ({education.year})</p>

        <h3>Experience</h3>
        <p>{experience.role} at {experience.company} ({experience.years} years)</p>
      </div>
    );
  }
}

export default Preview;