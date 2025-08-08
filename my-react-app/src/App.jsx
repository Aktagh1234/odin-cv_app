import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: { name: "", email: "", phone: "" },
      education: { school: "", degree: "", year: "" },
      experience: { company: "", role: "", years: "" }
    };
  }

  updateSection = (section, newData) => {
    this.setState({ [section]: newData });
  };

  render() {
    return (
      <div className="container">
        <h1>CV Application</h1>
        <div className="forms">
          <GeneralInfo
            data={this.state.general}
            onUpdate={(data) => this.updateSection("general", data)}
          />
          <Education
            data={this.state.education}
            onUpdate={(data) => this.updateSection("education", data)}
          />
          <Experience
            data={this.state.experience}
            onUpdate={(data) => this.updateSection("experience", data)}
          />
        </div>
        <Preview
          general={this.state.general}
          education={this.state.education}
          experience={this.state.experience}
        />
      </div>
    );
  }
}

export default App;