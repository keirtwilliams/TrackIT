import { useState } from "react";

function StatusBadge() {
    
  const [newStatus, setNewStatus] = useState("");

  let bgClass = "";

  if (newStatus === "Pending") {
    bgClass = "bg-yellow-200 text-yellow-800";
  } else if (newStatus === "Interview") {
    bgClass = "bg-blue-200 text-blue-800";
  } else if (newStatus === "Reject") {
    bgClass = "bg-red-200 text-red-800";
  } else if (newStatus === "Offer") {
    bgClass = "bg-green-200 text-green-800";
  }

  return (
    <div className="flex items-center gap-4">
      {/* Badge */}
      <span className={`px-3 py-1 rounded-lg font-medium ${bgClass}`}>
        {newStatus}
      </span>

      {/* Dropdown */}
      <select
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
        className="border rounded px-2 py-1"
      >  
        <option value="">---Select---</option>
        <option value="Pending">Pending</option>
        <option value="Interview">Interview</option>
        <option value="Reject">Reject</option>
        <option value="Offer">Offer</option>
      </select>
    </div>
  );
}

export default StatusBadge;
