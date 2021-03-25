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
  },
  {
    id: '3',
    title: 'Test Credit Boost Bundle',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    paymentUrl: 'https://sandbox.bluesnap.com/buynow/checkout?storeId=271191&skinId=97921&sku2690665=1&currency=USD',
    access: 'subscribers'
  },
  {
    id: '4',
    title: 'Test Credit Boost Bundle2',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    paymentUrl: 'https://sandbox.bluesnap.com/buynow/checkout?currency=USD&amount=500&merchantid=907613&skinId=97921',
    access: 'subscribers'
  },
  {
    id: '5',
    title: '30 Credits Monthly 2',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    paymentUrl: 'https://sandbox.bluesnap.com/buynow/checkout?merchantid=907613&skinId=97921&plan2691151',
    access: 'non-subscribers'
  }
]

// 

export default products