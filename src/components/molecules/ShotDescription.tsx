import React, { useState } from "react";

interface ShotDescriptionProps {
  username: string;
  description: string;
}

const ShotDescription: React.FC<ShotDescriptionProps> = ({
  username,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldShowMore = description.length > 100;

  return (
    <div>
      <p>
        <span className="font-semibold">{username}</span>{" "}
        {isExpanded ? description : `${description.slice(0, 100)}...`}
      </p>
      {shouldShowMore && (
        <button
          className="text-gray-500 text-sm mt-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </div>
  );
};

export default ShotDescription;
