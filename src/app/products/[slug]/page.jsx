import { notFound } from "next/navigation";
import Product from "./Product";
import Products from "../Products";
import { products } from "../../../../data/data";
import { categorySlugs } from "../../../../data/category-slugs";

export default async function ProductPage({ params }) {
    const { slug } = await params;

    if (Object.values(categorySlugs).includes(slug)) {
        return <Products initialCategorySlug={slug} />;
    }

    const product = products.find(
        (item) => item.slug === slug
    );

    if (!product) {
        notFound();
    }

    return <Product product={product} />;
}