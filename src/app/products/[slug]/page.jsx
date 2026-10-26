import { notFound } from "next/navigation";
import Product from "./Product";
import { products } from "../../../../data/data";

export default async function ProductPage({ params }) {
    const { slug } = await params;

    const product = products.find(
        (item) => item.slug === slug
    );

    if (!product) {
        notFound();
    }

    return <Product product={product} />;
}