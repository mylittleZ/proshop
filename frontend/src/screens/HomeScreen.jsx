// import { useEffect, useState } from "react";
// import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Product from "../components/Product";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get("/api/products");
  //     setProducts(data);
  //   };
  //   fetchProducts();
  //   // 当依赖数组为空（[]），useEffect 只会在组件挂载时执行一次
  //   // 当没有依赖数组的时候，每次组件渲染后都会执行；
  //   // 当依赖数组中有变量时，代码会在组件挂载以及依赖数组中的变量改变时执行
  // }, []);

  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
        <>
          <h1>products</h1>
          <Row>
            {/* () => ()：隐式返回，在 React 中，这种写法通常用于直接返回 JSX。 */}
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
