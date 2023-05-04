export interface SettingInterface {
    path: string;
    cookies: Cookie[];
}

export interface Cookie {
    domain: string;
    hostOnly: boolean;
    httpOnly: boolean;
    name: string;
    path: string;
    sameSite: string;
    secure: boolean;
    session: boolean;
    storeId: string;
    value: string;
    id: number;
    expirationDate?: number;
}
