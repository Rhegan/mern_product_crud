import { useState } from "react"


const ProductForm = () => {
    const [image, setImage] = useState("");
    const [barcode, setBarcode] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const [sourceName, setSourceName] = useState("");
    const [sourceUrl, setSourceUrl] = useState("");
    const [sourceStock, setSourceStock] = useState("");
    const [sourceImage, setSourceImage] = useState("");

    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [dimensions, setDimensions] = useState("");
    const [weight, setWeight] = useState("");

    const [scraperUrl, setScraperUrl] = useState("");
    const [scraperImageTag, setScraperImageTag] = useState("");
    const [scraperPriceTag, setScraperPriceTag] = useState("");

    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            image,
            barcode,
            name,
            price,
            source: [{
                name: sourceName, url: sourceUrl, stock: sourceStock, image: sourceImage
            }],
            details: [{
                description: description, category: category, dimensions: dimensions, weight: weight
            }],
            scraper: [{
                url: scraperUrl, image_tag: scraperImageTag, price_tag: scraperPriceTag
            }]
        };

        const response = await fetch("/api/products/", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();
        
        if (!response.ok) {
            setError(json.error);
        } else {
            setImage("");
            setBarcode("");
            setName("");
            setPrice("");

            setSourceName("");
            setSourceUrl("");
            setSourceStock("");
            setSourceImage("");

            setDescription("");
            setCategory("");
            setDimensions("");
            setWeight("");

            setScraperUrl("");
            setScraperImageTag("");
            setScraperPriceTag("");

            setError(null);
            console.log("New product added", json);
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3> Add a new product</h3>

            {/* Product Information */}
            <label> Product Image: </label>
            <input type="text" onChange={(e) => setImage(e.target.value)} value={image} />
            <label> Product Barcode: </label>
            <input type="text" onChange={(e) => setBarcode(e.target.value)} value={barcode} />
            <label> Product Name: </label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <label> Product Price: </label>
            <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} />

            {/* Product Source */}
            <label> Product Source Name: </label>
            <input type="text" onChange={(e) => setSourceName(e.target.value)} value={sourceName} />
            <label> Product Source URL: </label>
            <input type="text" onChange={(e) => setSourceUrl(e.target.value)} value={sourceUrl} />
            <label> Product Source Stock: </label>
            <input type="text" onChange={(e) => setSourceStock(e.target.value)} value={sourceStock} />
            <label> Product Source Image: </label>
            <input type="text" onChange={(e) => setSourceImage(e.target.value)} value={sourceImage} />

            {/* Product Details */}
            <label> Product Description: </label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            <label> Product Category: </label>
            <input type="text" onChange={(e) => setCategory(e.target.value)} value={category} />
            <label> Product Dimension: </label>
            <input type="text" onChange={(e) => setDimensions(e.target.value)} value={dimensions} />
            <label> Product Weight: </label>
            <input type="text" onChange={(e) => setWeight(e.target.value)} value={weight} />

            {/* Product Scraper */}
            <label> Product Scraper URL: </label>
            <input type="text" onChange={(e) => setScraperUrl(e.target.value)} value={scraperUrl} />
            <label> Product Scraper Image Tag: </label>
            <input type="text" onChange={(e) => setScraperImageTag(e.target.value)} value={scraperImageTag} />
            <label> Product Scraper Price Tag: </label>
            <input type="text" onChange={(e) => setScraperPriceTag(e.target.value)} value={scraperPriceTag} />


            <button> Add Product </button>
            {error && <div className="error"> {error} </div>}
        </form>
    )
}

export default ProductForm