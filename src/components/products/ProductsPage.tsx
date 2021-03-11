import './products-page.scss'
import React, { useMemo, useState } from 'react'
import ProductView from './Product'
import allProducts from '../../data/productsConfig'
import Product from '../../data/Product'
import { Button } from 'antd'
import qs from 'query-string'
import PaymentModal from './PaymentModal'


const urlExtraParams = qs.stringify({
  shopperinfovisible: 'N'
})

const ProductsPage = () => {
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
        
      <PaymentModal srcUrl={prodcutPaymentUrl} onCancel={() => setProdcutPaymentUrl(undefined)}
        title={productTitle}/>
{/*       
      { prodcutPaymentUrl &&
        <iframe id="iframe" title="product-purchase" src={prodcutPaymentUrl} />
      } */}

    </div>
  )
}

export default ProductsPage