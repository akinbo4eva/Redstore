import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import { Product } from '../../app/layout/models/product'
import { LoadingButton } from '@mui/lab';
import { currencyFormat } from '../../app/layout/util/util';
import { useAppDispatch, useAppSelector } from '../../app/layout/store/configureStore';
import { addBasketItemAsync } from './basket/basketSlice';

interface Props {
    product: Product;
}

const ProductCard = ({product}: Props) => {
  // const [loading, setLoading] = useState(false);
  const {status} =useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();

  // function handleAddItem(productId: number) {
  //   setLoading(true);
  //   agent.Basket.addItem(productId)
  //   .then(basket => dispatch(setBasket(basket)))
  //   .catch(error => console.log(error))
  //   .finally(()=> setLoading(false));
    
  // }

  return (
    <Card>
        <CardHeader 
            avatar={
                <Avatar sx={{bgcolor: 'orange'}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={product.name}
            titleTypographyProps={{
                sx: {fontWeight: 'bold', color: 'secondary.dark'}
            }}
        />
        
      <CardMedia
        sx={{ height: 140, backgroundSize: "contain", bgcolor: "gray" }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color={{color: "orange"}} variant="h5" >
          {currencyFormat(product.price)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton 
          loading={status === 'pendingAddItem' + product.id} 
          onClick={() => dispatch(addBasketItemAsync({productId: product.id}))} 
          size="small"
        >
          Add to cart
        </LoadingButton>
        <Button 
          component={Link} to={`/catalog/${product.id}`} 
          size="small"
        >
          View
        </Button>
      </CardActions>
    </Card>
       
  )
}

export default ProductCard