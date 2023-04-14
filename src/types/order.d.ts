declare namespace Order {
  type OrderResult = {
    id: string
    createTime: Date
    goodNum: number
    totalPrice: number
    status: number
    deliverTime?: Date
    serveTime?: Date
    items?: OrderItemResult[]
  }

  type OrderItemResult = {
    goodName: string
    goodFirstDrawing: string
    goodUnit: string
    num: number
    price: number
  }
}
