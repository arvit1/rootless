export interface Rootless {
    id: number;
    firstName: string;
    lastName: string;
    profilePhotoUrl: string;
    profession: string;
    quote: string;
    about?: any;
    tagline?: any;
    bringsToTable?: any;
    expertise?: any;
}

export interface HireMessages {
    expertId: number;
    rootlessId: number;
    phone: string;
    email: string;
    prefComm: string;
    reason: string;
    createCate: Date;
    rootless: Rootless;
}