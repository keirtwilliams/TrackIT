import { useState } from "react";
import Row from "../components/Row";

function Table({ onEditRole }) {
  // Initial state: list of job roles with company, position, and status
  const [roles, setRoles] = useState([
    { company: "Google", position: "Frontend Developer", status: "Interview" },
    { company: "Meta", position: "Backend Developer", status: "Pending" },
    { company: "Amazon", position: "Full Stack Developer", status: "Rejected" }
  ]);

  // Function to delete a role by filtering it out from the state
  const onDeleteRole = (index) => {
    const updatedRoles = roles.filter((_, i) => i !== index);
    setRoles(updatedRoles); // Update state with remaining roles
  };

  return (
    <table>
      <thead>
        <tr>
          {/* Table column headers */}
          <th>Company</th>
          <th>Position</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {/* Render each role dynamically using the Row component */}
        {roles.map((role, index) => (
          <Row
            key={index} // React key (unique identifier for each row)
            company={role.company}
            position={role.position}
            status={role.status}
            // Pass edit handler (calls parent function with current index)
            onEdit={() => onEditRole(index)}
            // Pass delete handler (removes row from state)
            onDelete={() => onDeleteRole(index)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
