import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  // 기존에 있던 useState를 지우고 useSelector를 통해서 state를 가지고 온다.
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    // let url = `https://my-json-server.typicode.com/kimsh0306/noona-project-hnm/products?q=${searchQuery}`;
    // let response = await fetch(url);
    // let data = await response.json();
    // setProductList(data);
    //
    // 위 코드를 productAction.getProducts 함수 안으로 이동한 후
    // 여기에서 productAction.getProducts 함수를 불러줘야 한다.
    // dispatch()에 액션을 파라미터로 넣어서 호출하면 바로 store로 가버리기 때문에
    // 미들웨어를 거치도록 해준다.
    dispatch(productAction.getProducts(searchQuery));
  };

  useEffect(() => {
    // console.log("query: ", query)
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item, idx) => (
              <Col xs={12} md={4} lg={3} key={idx}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  )
}

export default ProductAll
