import { useEffect } from 'react';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useAppDispatch, useAppSelector } from '../../app/layout/store/configureStore';
import { fetchProductsAsync, productSelectors } from './catalogSlice';
import ProductList from './ProductList';



export default function Catalog() {
  // const [products, setProducts] = useState<Product[]>([])
  const products = useAppSelector(productSelectors.selectAll)
  // const [loading, setLoading] = useState(true);
  const {productsLoaded, status} = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync())

    // agent.Catalog.list()
    // .then(data => setProducts(data))
    // .catch(error => console.log(error))
    // .finally(()=>setLoading(false))
  },[productsLoaded, dispatch])

  if (status.includes('pending')) return <LoadingComponent message='Loading products...'/>

  return (
    <>
      <ProductList products={products}/>
    </>
  )
}
