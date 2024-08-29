let initialState = {
  productList: [],
  product: {},
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_LIST_SUCCESS":
      return { ...state, productList: payload.dataList };
    case "GET_PRODUCT_SUCCESS":
      return { ...state, product: payload.data };
    default:
      return { ...state };
  }
};

export default productReducer;