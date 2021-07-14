import {Entity} from "./entity";

export interface Event extends Entity {
  maxParticipants?: number;
  duration?: number;
  purpose?: string;
  tags: string[];
}
