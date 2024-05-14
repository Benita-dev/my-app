import { Metadata } from "next";

type Props = {
    params: {
        ProductId: string;
    };
};

export const  generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: "Product ${params.productId}"
    };
};

export default function ProductDetails({params}: props) {
    return <h1>Details about product {params.productId} </h1>;
  }


// export default function ProductDetails({
//     params,
// }:{
//     params: {productId: string};
// }) {
//     return <h1>Details about product {params.productId} </h1>;
//   }