import React, { useEffect } from 'react'
import { Modal } from 'antd'
import './payment-modal.scss'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import CompletedBuy from '../CompletedBuy';

interface Props {
  title?: string
  srcUrl?: string
  onCancel(): void
}

const PaymentModal = ({srcUrl, onCancel, title}: Readonly<Props>) => {
  const location = useLocation()
  const history = useHistory()
  console.log('called', location);
  // useEffect(() => {
  //   history.push('/completed-buy')
  // }, [])

  return (
    <Modal className="payment-modal" visible={!!srcUrl} onCancel={onCancel} maskClosable={false}
      footer={null} title={title}
    >
      <Switch>
        <Route path="/" exact>
          <iframe id="iframe" title="product-purchase" src={srcUrl} />
        </Route>
        <Route path="/completed-buy">
          <CompletedBuy />
        </Route>
      </Switch>
    </Modal>
  )
}

export default PaymentModal
