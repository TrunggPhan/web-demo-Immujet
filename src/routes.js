//Define routers to component
import Home from './components/HomePage'
import Product from './components/products/ProductsPage'
import ProductCart from './components/products/ProductCartPage'
export const routes = [
    {path: '/', name: 'homepage', component: Home },
    {path: '/product/:name', name: 'productpage', component: Product },
    {path: '/product/:name/cart', name: 'cartpage', component: ProductCart}
]