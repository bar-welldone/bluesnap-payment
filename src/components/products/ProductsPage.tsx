import './products-page.scss'
import React, { useEffect, useMemo, useState } from 'react'
import ProductView from './Product'
import allProducts from '../../data/productsConfig'
import Product from '../../data/Product'
import { Button } from 'antd'
import qs from 'query-string'
import PaymentModal from './PaymentModal'
import { Link } from 'react-router-dom'


const urlExtraParams = qs.stringify({
  shopperinfovisible: 'N'
})

const ProductsPage = () => {

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('called');
  //     setProdcutPaymentUrl('http://localhost:3000/completed-buy')
  //   }, 10000)
  // }, [])
  
  const [prodcutPaymentUrl, setProdcutPaymentUrl] = useState<string>()
  const [productTitle, setProdcutTitle] = useState<string>()
  const [hasSubscription, setHasSubscription] = useState(false)

  const availableProducts = useMemo(() => {
    return hasSubscription ? 
      allProducts.filter(p => p.access !== 'non-subscribers') :
      allProducts.filter(p => p.access !== 'subscribers')
  }, [hasSubscription])


  function onProductSubsrcibe({paymentUrl, title}: Product) {
    setProdcutPaymentUrl(`${paymentUrl}&${urlExtraParams}`)
    setProdcutTitle(title)
  }
  
  const toggleHasSubscription = () => setHasSubscription(!hasSubscription)

  return (
    <div className="products-page">
      <h1>Available products</h1>
      <div className="products-container">
        {
          availableProducts.map(p => (
            <ProductView key={p.id} {...p} onPurchase={() => onProductSubsrcibe(p)}/>
          ))
        }
      </div>

      <Button className="subscription-button" onClick={toggleHasSubscription}>
        {hasSubscription ? 'User has subscription' : "User doesn't have subscription" }
      </Button>

      <Link to="/hosted"> Check out hosted fields </Link>

        
      {/* <PaymentModal srcUrl={prodcutPaymentUrl} onCancel={() => setProdcutPaymentUrl(undefined)}
        title={productTitle}/> */}

      <PaymentModal srcUrl={prodcutPaymentUrl} onCancel={() => setProdcutPaymentUrl(undefined)}
        title={productTitle}/>

      {/* <button onClick={() => setProdcutPaymentUrl('http://localhost:3000/test')}> test redirect modal </button> */}
      {/* <a href="https://sandbox.bluesnap.com/buynow/checkout?sku2690665=1&storeid=271191&shopperinfovisible=N"> go to prod </a> */}

    </div>
  )
}

export default ProductsPage