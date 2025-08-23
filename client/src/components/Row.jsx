function Row({ company, position, status }){
    return(
        <>
        <tbody>
            <tr>
                <td>{company}</td>
                <td>{position}</td>
                <td>{status}</td>
               <td></td>
            </tr>
        </tbody>
        </>
    )
};
export default Row;