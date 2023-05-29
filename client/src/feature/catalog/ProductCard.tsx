import React from 'react'
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

import { Product } from '../../app/layout/models/product'

interface Props {
    product: Product;
}

const ProductCard = ({product}: Props) => {
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
          N{(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
       
  )
}

export default ProductCard