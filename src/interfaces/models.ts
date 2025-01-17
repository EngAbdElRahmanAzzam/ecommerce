interface ICategory{
    name:string;
    thumbnail:string;
}
interface IBrand{
    name:string;
    icon:string;
}
interface ISpecification{
    key:string;
    value:string;
}
export interface IProduct{
    id:number;
    name:string;
    discription:string;
    price:number;
    stock:number;
    imges:string[]
    thumbnail?: {url:string}
    category?:ICategory;
    brand?:IBrand;
    features?:string[];
    specification?:ISpecification[]
}

