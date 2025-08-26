function AppRow({ company, position, status }){
    return(
        <div>
          <table>
            <thead>
                <tr>
                    <td>{company}</td>
                    <td>{position}</td>
                    <td>{status}</td>
                    <td>Actions</td>
                </tr>
            </thead>
          </table>
        </div>
    )
};
export default AppRow;