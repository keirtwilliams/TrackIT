import AppRow from "../components/AppRow";


function AppTable({ roles }){
     const newRoles = [
        { id: 1, company: "JCorp", position: "Front-End Developer"},
        { id: 2, company: "ECorp", position: "Back-End Developer"},
        { id: 3, company: "GCorp", position: "FullStack Developer"},
     ];

    return (
        <div>
            <table>
           {roles.map((newRoles) => {
             <AppRow 
              key={newRoles.id}
              company={newRoles.company}
              position={newRoles.position}
             />

           })}
           </table>
        </div>
        
    )
};
export default AppTable;