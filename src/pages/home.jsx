import ProductService from "../models/services/productService.js";
import ProductPreview from "../components/productPreview.jsx";

function Home() {

    const productsPreview = ProductService.getProducts().map((e) => {
        return <ProductPreview product={e} seeMore={false}></ProductPreview>
    });

    return <div>
        <h1>Home Page</h1>
        {productsPreview}
    </div>
}

export default Home;