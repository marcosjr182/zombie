export class Survivor {
	location: string;
	name: string;
	age: string;
	gender: string;
	lonlat: string;

	infected: boolean;
	properties : any;
	water: 			 { qty:number, pts:number } = { 'qty':0, 'pts': 4 };
	food:        { qty:number, pts:number } = { 'qty':0, 'pts': 3 };
	medication:  { qty:number, pts:number } = { 'qty':0, 'pts': 2 };
	ammunition:  { qty:number, pts:number } = { 'qty':0, 'pts': 1 };
	id: string;

	lat: number;
	lng: number;

	reported: boolean;


}
