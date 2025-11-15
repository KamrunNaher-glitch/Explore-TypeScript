type Products = {
    id: number;
    name:string;
    price: string;
    stock: number;
    color ? : string;
}

type ProductSummary = Pick<Products,"id"|"name"| "price">
type ProductWithStock = Omit<Products,"stock">

type ProductWithColor = Required<Products>;

const products : ProductWithColor = {
    id: 222,
    name:"Mouse",
    price: '20',
    stock: 100,
    color:"blue"
}

type OptionProduct = Partial<Products>;
type ProductReadOnly = Readonly<Products>;

const emptyObj : Record<string,unknown> = {}

const product1 = {
    id:222,
    name:"Mouse",
    price: "20"
}
