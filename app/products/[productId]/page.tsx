import { promises } from "dns";
import { Metadata } from "next";
import { resolve } from "path";

type Props = {
    params: {
        ProductId: string;
    };
};

export const  generateMetadata = async ({ 
    params, 
}: Props): Promise<Metadata> => {
    const title = await new Promise ((resolve) => {
        setTimeout (() => {
            resolve ('iPhone ${params.productId}');
        }, 100);
    });
    return {
        title: 'Product ${title}',
    };
};

export default function ProductDetails({
    params,
}:{
    params: {productId: string};
}) {
    return <h1>Details about product {params.productId} </h1>;
  }