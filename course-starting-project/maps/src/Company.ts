import faker from faker;

export class Company {
    companyName: string;
    catchPharse: string;
    location: {
        lat: number;
        lng: number;
    }
}