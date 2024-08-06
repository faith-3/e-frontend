import React, { useEffect } from 'react'

const SingleProduct = () => {
    const { id } = useParams(); // Get the product ID from the URL params
    const [product, setProduct] = useState({}); // State to store product data
    const { name, company, description, category, stock, stars, reviews } = product;
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const productData = await getSingleProduct(`${API}?id=${id}`);
          setProduct(productData);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
  
      fetchProduct();
    }, [id]);
  
    return (
      <Wrapper>
        <PageNavigation title={name} />
        <div className="product-details container mx-auto p-4">
        <div className="product-header flex justify-between items-center">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-lg text-gray-500">{company}</p>
        </div>
        <div className="product-meta flex justify-between items-center mt-2">
          <p className="text-gray-600">Category: {category}</p>
          <p className={`text-sm ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stock > 0 ? 'In Stock' : 'Out of Stock'}
          </p>
        </div>
        <div className="product-rating mt-4">
          <Rating stars={stars} />
          <p className="text-sm text-gray-500">{reviews} reviews</p>
        </div>
        <div className="product-description mt-6">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>
        <div className="product-reviews mt-8">
          <h2 className="text-xl font-semibold">Reviews</h2>
          <Reviews reviews={reviews} />
        </div>
      </div>
      </Wrapper>
    );
  };

  export default SingleProduct