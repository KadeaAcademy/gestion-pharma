import {useParams} from "react-router-dom";
import ProductService from "../models/services/productService.js";
import ProductPreview from "../components/productPreview.jsx";

function SingleProduct() {

    const {id} = useParams();

    const data = ProductService.getProducts();

    const product = data.find((e) => e.id === id);

    return (
        <>
            <ProductPreview product={product} seeMore={true}></ProductPreview>
        </>
    );
}

export default SingleProduct;