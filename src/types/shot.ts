import { User } from "./user";

export interface Shot {
  id: string;
  theme: string;
  likes: number;
  comments: number;
  impressions: number;
  imageUrl: string;
  description: string;
  createdAt: Date;
  userinfos: User;
}
