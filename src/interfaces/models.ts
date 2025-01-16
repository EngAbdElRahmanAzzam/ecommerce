export interface IProduct{
    id:number;
    name:string;
    category:string;
    discription:string;
    price:number;
    stock:number;
    thumbnail?: {url:string}
}