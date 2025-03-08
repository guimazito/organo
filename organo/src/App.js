import { useState } from 'react';
import Form from './components/Form/index.js';
import Banner from './components/Banner/Banner.js';
import Team from './components/Team/index.js';
import Footer from './components/Footer/Footer.js';

function App() {

  const [employees, setEmployees] = useState([])

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    },
  ]

  const toNewEmployeeRegistered = (employee) => {
    console.log(employee)
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} toEmployeeRegistered={employee => toNewEmployeeRegistered(employee)}/>
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        employees={employees.filter(employee => employee.team === team.name)}
      />)}
      <Footer />
    </div>
  );
}

export default App;