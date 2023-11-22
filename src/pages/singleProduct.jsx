import {useParams} from "react-router-dom";
import ProductService from "../models/services/productService.js";
import ProductPreview from "../components/productPreview.jsx";

function SingleProduct() {

    const {id} = useParams();

    const product = ProductService.getProducts().find((e) => e.id === id);

    return <div>
        <h1>Single Product Page</h1>
        <ProductPreview product={product} seeMore={true}></ProductPreview>
    </div>
}

export default SingleProduct;