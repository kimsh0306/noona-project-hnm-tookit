function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/kimsh0306/noona-project-hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let dataList = await response.json();
    console.log("dataList: ", dataList);
    dispatch({ type: "GET_PRODUCT_LIST_SUCCESS", payload: { dataList } });
  };
};

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/kimsh0306/noona-project-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data: ", data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
};

//여러 개의 함수를 객체에 담아서 리턴한다.
export const productAction = { getProducts, getProductDetail };