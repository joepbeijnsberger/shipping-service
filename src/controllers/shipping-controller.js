// src/controllers/shipping-controller.js
var productService = require('../services/product-service')

class ShippingController {

  constructor() {
    this.REGULAR_PRICE = 0.1
    this.OVERNIGHT_PRICE = 1
	this.OVERPRIZED = 10
  }

async getItemShipping(item) {
  var shippingAmount = await productService.getProductWeight(item.id)
  if (item.type.toLowerCase() === 'overnight') {
    return shippingAmount * this.OVERNIGHT_PRICE
  } else if (item.type.toLowerCase() === 'regular') {
    return shippingAmount * this.REGULAR_PRICE
  } else {
    return shippingAmount * this.OVERPRIZED
  }
}

}

module.exports = ShippingController;