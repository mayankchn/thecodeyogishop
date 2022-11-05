// import data from '../data'
import axios from 'axios'


export function getProduct(id) {
  return axios.get('https://myeasykart.codeyogi.io/product/' + id).then(function (response) {
    return response.data
  })
}

export function getProductsByIds(ids) {
  const commaSepeartedIds = ids.join();
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: {
        ids: commaSepeartedIds,
      },
    })
    .then(function (response) {
      return response.data;
    });
}

export function getProductList(sortBy, search, page, sortType) {
  let params = {};
  
  if (sortBy) {
    params.sortBy = sortBy
  }
  if (sortType) {
    params.sortType = sortType
  }
  if (search) {
    params.search = search
  }
  if (page) {
    params.page = page
  }

  return axios.get('https://myeasykart.codeyogi.io/products', {
    params,
  })
    .then(function (response) {
      return response.data;
    })

}