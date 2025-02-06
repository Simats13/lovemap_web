import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import ActionButton from "../atoms/ActionButton";
import { FC } from "react";

interface ShotActionsProps {
  likes: number;
  comments: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

const ShotActions: FC<ShotActionsProps> = ({
  likes,
  comments,
  onLike,
  onComment,
  onShare,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <ActionButton
        icon={<HeartIcon className="w-7 h-7" />}
        count={likes}
        onClick={onLike}
      />
      <ActionButton
        icon={<ChatBubbleOvalLeftIcon className="w-7 h-7" />}
        count={comments}
        onClick={onComment}
      />
      <ActionButton
        icon={<ShareIcon className="w-7 h-7" />}
        onClick={onShare}
      />
    </div>
  );
};

export default ShotActions;
