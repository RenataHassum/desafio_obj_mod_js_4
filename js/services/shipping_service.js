export function shipment(order) {
	let shipping;
	if (order.basic < 100.0) {
		shipping = 20.0;
	} else if (order.basic < 200.0) {
		shipping = 12.0;
	} else {
		shipping = 0.0;
	}
	return shipping;
}
