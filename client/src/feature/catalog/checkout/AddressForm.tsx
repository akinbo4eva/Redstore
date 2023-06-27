import {
  Typography,
  Grid,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import AppCheckBox from "../../../app/layout/components/AppCheckBox";
import AppTextInput from "../../../app/layout/components/AppTextInput";


export default function AddressForm() {
  const { control, formState } = useFormContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            {/* text filled is replaced with custom hook */}
            {/* <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          /> */}
            <AppTextInput control={control} name="fullName" label="full name" />
          </Grid>
          <Grid item xs={12}>
            {/* <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          /> */}
            <AppTextInput control={control} name="address1" label="Address 1" />
          </Grid>
          <Grid item xs={12}>
            {/* <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          /> */}
            <AppTextInput control={control} name="address2" label="Address 2" />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          /> */}
            <AppTextInput control={control} name="city" label="City" />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          /> */}
            <AppTextInput control={control} name="state" label="State" />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          /> */}
            <AppTextInput control={control} name="zip" label="Zipcode" />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          /> */}
            <AppTextInput control={control} name="country" label="Country" />
          </Grid>
          <Grid item xs={12}>
            {/* It has been replaced with AppCheckBox reusable component */}
            {/* <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            /> */}
            <AppCheckBox 
            disabled={!formState.isDirty}
            control={control} 
            name="saveAddress" 
            label="Use this address for payment details"/>
          </Grid>
        </Grid>
   
   
    </>
  );
}
