import { Modal } from 'antd'
import './payment-modal.scss'
import { useHistory, useLocation } from 'react-router-dom';

interface Props {
  title?: string
  srcUrl?: string
  onCancel(): void
}

const PaymentModal = ({srcUrl, onCancel, title}: Readonly<Props>) => {
  const location = useLocation()
  const history = useHistory()
  

  return (
    <Modal className="payment-modal dark" visible={!!srcUrl} onCancel={onCancel} maskClosable={false}
      footer={null}
    >
      <iframe id="iframe" title="product-purchase" src={srcUrl} />
    </Modal>
  )
}

export default PaymentModal
