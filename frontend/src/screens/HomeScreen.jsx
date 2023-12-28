import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Product from "../components/Product";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";

const HomeScreen = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({ pageNumber });
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
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
