import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import Preview from './components/Preview'
import './App.css'

export default function App() {
  const [genral, setGeneral] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [education, setEducation] = useState({
    school: '',
    degree: '',
    year: ''
  })
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    duration: ''
  })

  return (
    <div className="container">
      <h1>CV Application</h1>

      <div className="forms">
        <GeneralInfo data={general} setData={setGeneral} />
        <Education data={education} setData={setEducation} />
        <Experience data={experience} setData={setExperience} />
      </div>

      <Preview general={general} education={education} experience={experience} />
    </div>
  )
}
