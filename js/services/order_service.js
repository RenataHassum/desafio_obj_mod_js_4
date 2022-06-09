import * as shippingService from './shipping_service.js';

export function total(order) {
	const discount = order.discount / 100;
	const shipment = shippingService.shipment(order);
	const total = order.basic - order.basic * discount + shipment;
	return total;
}
