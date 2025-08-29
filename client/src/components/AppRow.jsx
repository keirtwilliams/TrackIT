function AppRow({ company, position, status }) {
  return (
    <tr>
      <td>{company}</td>
      <td>{position}</td>
      <td>{status}</td>
      <td><button>Edit</button></td>
      <td><button>Delete</button></td>

    </tr>
  );
}

export default AppRow;
