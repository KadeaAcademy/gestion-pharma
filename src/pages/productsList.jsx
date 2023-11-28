import ProductPreview from "../components/productPreview.jsx";
import ProductService from "../models/services/productService.js";

function ProductsList() {

    const data = ProductService.getProducts();

    return <div>
        <ul>
            {
                data.map((e) =>
                    <li>
                        <ProductPreview product={e} seeMore={false}></ProductPreview>
                    </li>
                )
            }
        </ul>
    </div>
}

export default ProductsList;