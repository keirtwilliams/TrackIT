import { useState } from "react";
function StatusBadge({ status }){
    const [newStatus, setNewStatus] = useState("Pending");
      
    const onStatusChange = () => {
        if (status === "Pending"){
        }
    }
    return (
        <>
        <div className="dropdown">
          <button className="">{status}</button>
             <div className="">
              <a onClick={() => onStatusChange(Pending)}>Pending</a>
              <a onClick={() => onStatusChange(Interview)}>Interview</a>
              <a onClick={() => onStatusChange(Rejected)}>Rejected</a>
              <a onClick={() => onStatusChange(Offer)}>Offer</a>
  </div>
</div>
        </>
    )
};

export default StatusBadge;