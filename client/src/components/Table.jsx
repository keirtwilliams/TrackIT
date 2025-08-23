import Row from "./components/Row";
function Table({ roles }) {
  return (
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
        {roles.map((role, index) => (
          <Row
            key={index}
            company={role.company}
            position={role.position}
            status={role.status}
          />
        ))}
      </tbody>
    </table>
  );
}
export default Table;