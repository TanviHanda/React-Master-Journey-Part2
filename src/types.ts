type Info = {
    id:number;
    name: string;
    email: string;
}

type AdminInformation = Info & {
    role: string;
    lastlogin: Date;
}

export type {Info, AdminInformation}