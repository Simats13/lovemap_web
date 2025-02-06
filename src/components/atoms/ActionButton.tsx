import { ReactNode } from "react";

interface ActionButtonProps {
  icon: ReactNode;
  count?: number;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  count,
  onClick,
}) => {
  return (
    <button className="flex items-center space-x-1" onClick={onClick}>
      {icon}
      {count !== undefined && <span>{count}</span>}
    </button>
  );
};

export default ActionButton;
