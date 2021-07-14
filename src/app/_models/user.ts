import { Tokens } from "./tokens";

export interface Role {
  name: string;
}

export interface User {
  id?: number;
  email?: string;
  password?: string;
  firstName: string;
  lastName: string;
  imgUrl?: string;
  userType?: string;
  userLevel?: string;
  paymentCycle?: string;
  paymentMethodId?: string;
  customerId?: string;
  profilePhotoUrl: string;
  profession?: string;
  quote?: string;
  about?: any;
  tagline?: any;
  bringsToTable?: any;
  expertise?: any;
}

export interface Login {
  user: User;
  tokens: Tokens;
  userRole: string;
}
