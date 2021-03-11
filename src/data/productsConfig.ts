import Product from './Product';

const products: Product[] = [
  {
    id: '1',
    title: '30 Credits Monthly',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    paymentUrl: 'https://sandbox.bluesnap.com/buynow/checkout?sku2689611=1&storeid=271191',
    access: 'non-subscribers'
  },
  {
    id: '2',
    title: 'Credit Boost Bundle',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    paymentUrl: 'https://sandbox.bluesnap.com/buynow/checkout?sku2690009=1&storeid=271191',
    access: 'subscribers' 
  }
]

export default products