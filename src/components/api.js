// import data from '../data'
import axios from 'axios'


export function getProduct(id) {
  // console.log(`got data of ${id}: `)
  return axios.get('https://dummyjson.com/products/'+id).then(function(response){
    // console.log('api ka response: ',response.data)
    return response.data
  })
}

export function getProductList() {
  // console.log(`here's the product list: `)
  return axios.get('https://dummyjson.com/products').then(function(response){
  return response.data.products
  })

}