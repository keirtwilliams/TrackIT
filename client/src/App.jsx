import './index.css'
import Table from './components/Table'

function App() {
  const roles = [
    { company: "Google", position: "Frontend Developer", status: "Interview" },
    { company: "Meta", position: "Backend Developer", status: "Pending" },
    { company: "Amazon", position: "Full Stack Developer", status: "Rejected" }
  ];

  return (
    <>
      <Table roles={roles} />   
    </>
  );
}

export default App;
