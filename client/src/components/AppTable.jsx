import AppRow from "../components/AppRow";

function AppTable({ onEdit, onDelete}) {
  const newRoles = [
    { id: 1, company: "JCorp", position: "Front-End Developer", status: "Pending" },
    { id: 2, company: "ECorp", position: "Back-End Developer", status: "Interview" },
    { id: 3, company: "GCorp", position: "FullStack Developer", status: "Rejected" },
  ];
    
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {newRoles.map((role) => (
            <AppRow
              key={role.id}
              company={role.company}
              position={role.position}
              status={role.status}
              onEdit={(e) => newRoles(e.target.value)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppTable;
