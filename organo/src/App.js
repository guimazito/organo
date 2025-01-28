import { useState } from 'react';
import Form from './components/Form/index.js';
import Banner from './components/Banner/Banner.js';
import Test from './components/Test/index.js';
import Team from './components/Team/index.js';

function App() {

  const [employees, setEmployees] = useState([])

  const toNewEmployeeRegistered = (employee) => {
    console.log(employee)
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form toEmployeeRegistered={employee => toNewEmployeeRegistered(employee)}/>
      {/* <Test /> */}
      <Team name="Programação"/>
      <Team name="Front-End"/>
      <Team name="Data Science"/>
      <Team name="Devops"/>
    </div>
  );
}

export default App;

const times = [
  '',
  'Programação',
  'Front-End',
  'Data Science',
  'Devops',
  'UX e Design',
  'Mobile',
  'Inovação e Gestão'
]