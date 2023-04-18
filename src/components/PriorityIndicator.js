import { useEffect, useState } from "react";

function PriorityIndicator({ priority, className }) {
  const [priorityType, setPriorityType] = useState("");

  useEffect(() => {
    if (priority) updatePriority(priority);
  }, [priority]);

  const updatePriority = (status) => {
    switch (status) {
      case "very-high":
        setPriorityType("bg-red");
        break;
      case "high":
        setPriorityType("bg-yellow");
        break;
      case "medium":
        setPriorityType("bg-green");
        break;
      case "low":
        setPriorityType("bg-blue");
        break;
      case "very-low":
        setPriorityType("bg-purple");
        break;
      default:
        setPriorityType("");
    }
  };

  return (
    <span
      className={`block w-[10px] h-[10px] rounded-full ${priorityType} ${
        className || ""
      }`}
    />
  );
}

export default PriorityIndicator;
