export type ProductProps = {
    productData: {
        id: number;
        name: string;
        description: string;
        url: string;
    };
};

export type OrderCreateDto = {
    productId: number;
    outletId: number;
    userId: number;
    product_Order_Qty: number;
    totalAmount: number;
};
