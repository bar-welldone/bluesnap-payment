export default interface Product {
  paymentUrl: string
  id: string
  title: string
  description: string
  access: 'subscribers' | 'non-subscribers' | 'all'
}