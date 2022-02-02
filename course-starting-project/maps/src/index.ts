import { User, red } from "./User";
import { Company } from "./Company";
// const user = new User();
// console.log(user);
// const company = new Company();
// console.log(company);

interface Mappable {
    location:{
        lat: number;
        lng:number;
    }
}
import { customMap } from "./customMaps";
const user = new User();
const company = new Company();

const customMaps = new customMap('map');

customMaps.addMarker(user);
customMaps.addMarker(company);


