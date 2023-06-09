import {
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/layout/store/configureStore";
import BasketSummary from "./BasketSummary";
import BasketTable from "./BasketTable";

const BasketPage = () => {
  const { basket} = useAppSelector(state => state.basket);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [loading, setLoading] = useState(false);
  // const [status, setStatus] = useState({
  //   loading: false,
  //   name: "",
  // });

  // function handleAddItem(productId: number, name: string) {
  //   setStatus({ loading: true, name });
  //   agent.Basket.addItem(productId)
  //     .then((basket) => dispatch(setBasket(basket)))
  //     .catch((error) => console.log(error))
  //     .finally(() => setStatus({ loading: false, name: "" }));
  // }

  // function handleRemoveItem(productId: number, quantity = 1, name: string) {
  //   setStatus({ loading: true, name });
  //   agent.Basket.removeItem(productId, quantity)
  //     .then(() => dispatch(removeItem({productId, quantity})))
  //     .catch((error) => console.log(error))
  //     .finally(() => setStatus({ loading: false, name: "" }));
  // }

  // the items below are now availble in context
  // const [loading, setLoading] = useState(true);
  // const [basket, setBasket] = useState<Basket | null>(null);

  // useEffect(() => {
  //   agent.Basket.get()
  //   .then(basket => setBasket(basket))
  //   .catch(error => console.log(error))
  //   .finally(()=>setLoading(false));
  // }, [])

  // if (loading) return <LoadingComponent message='Loading basket...'/>

  if (!basket)
    return <Typography variant="h3">Your basket is empty</Typography>;

  return (
    <>
     <BasketTable items={basket.items}/>
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary />
          <Button  component={Link} to='/checkout' variant="contained" size='large' fullWidth
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default BasketPage;
