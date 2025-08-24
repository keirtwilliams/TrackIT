import StatusBadge from "../components/StatusBadge";

function Row({ company, position, status, onEdit, onDelete }) {
  return (
    <tr>
      <td>{company}</td>
      <td>{position}</td>
      <td><StatusBadge status={status} /></td>
      <td>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default Row;
