export interface WaterfallItem {
  id: string
  width: number
  height: number
  defaultImage: string
  imgUrl: string
  name: string
  tags?: string
  stock: number
  price: number
  showImg?: boolean
  showError?: boolean
}
