export type Tuser = {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
};

export type Tproduct = {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
};

export type Tpurchase = {
    id: string;
    buyer: string;
    totalPrice: number;
    productId: string;
    quantity: number;
};
