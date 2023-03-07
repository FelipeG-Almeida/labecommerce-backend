export type Tuser = {
    id: string;
    email: string;
    password: string;
};

export type Tproduct = {
    id: string;
    name: string;
    price: number;
    category: CATEGORIA;
};

export type Tpurchase = {
    userId: string;
    productId: string;
    quantity: number;
    totalPrice: number;
};

export enum CATEGORIA {
    MONITORES = 'Monitores',
    PLACAS_DE_VIDEO = 'Placas de Vídeo',
    PERIFERICOS = 'Periféricos',
    JOGOS = 'Jogos',
}
