import { Profile } from '../interface/profile';

export const Profiles: Profile[] = [
    {
        name: 'Erin',
        lastName: 'Bolton',
        twitter: '@ErinBolton',
        facebook: 'Erin Bolton',
        website: 'http://erinbolton.com',
        img: './assets/female.jpg',
        bornDate: new Date(new Date().setMonth(-267)),
        gender: 'female',
        mail: 'ErinBolton@teleworm.us'
    },
    {
        name: 'Dominic',
        lastName: 'Connolly',
        twitter: '@DomConn',
        facebook: 'Dominic Connolly',
        website: 'http://dominicconnolly.com',
        img: './assets/male.jpg',
        bornDate: new Date(new Date().setMonth(-474)),
        gender: 'male',
        mail: 'dominic.connolly@teleworm.us'
    }
];
