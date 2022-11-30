export interface signUp{
    name:string,
    password:string,
    email:string
}
export interface login{    
    email:string,
    password:string    
}
export interface product{
    name:string,
    price:number,
    color:string,
    category:string,
    description:string,
    image:string,
    id:number,
    quantity:number | undefined
}
export interface cart{
    name:string,
    price:number,
    color:string,
    category:string,
    description:string,
    image:string,
    id:number | undefined,
    quantity:number | undefined,
    userId:number,
    productId:number
}