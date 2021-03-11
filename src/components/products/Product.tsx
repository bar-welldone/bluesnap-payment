import './product.scss'
import { Button } from 'antd'
import React from 'react'

interface Props {
  title: string
  description: string
  onPurchase(): void
}

const Product = ({title, description, onPurchase}: Readonly<Props>) => {
  return (
    <div className="product">
      <h2 className="title"> {title} </h2>
      <p className="description"> {description} </p>
      <Button type='primary' onClick={onPurchase}> Purchase </Button>
    </div>
  )
}

export default Product
