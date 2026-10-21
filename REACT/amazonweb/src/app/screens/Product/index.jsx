import { useEffect, useState } from "react";
import useApp from "../../hooks/useApps";
import useAxios from "../../hooks/useAxios";

function Product() {
  const { member } = useApp();
  const request = useAxios();

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await request({
      method: "GET",
      url: "product",
    });

    if (res?._error) {
      return;
    }

    setProducts(res?.responseData || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = async (product) => {
    const res = await request({
      method: "POST",
      url: "client_order_product",
      data: {
        product_id: product.id,
        qty: 1,
      },
    });

    if (res?._error) {
      return;
    }

    console.log(res?.responseData);
  };

  return (
    <div>
      <h2>Hi {member?.name || "-"}</h2>
      <h3>Welcome to our site</h3>

      {products.map((product) => {
        const img = product?.product_image?.[0]?.image || null;

        return (
          <div key={product.id}>
            {img && <img src={img} alt={product.name} width="150" />}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
