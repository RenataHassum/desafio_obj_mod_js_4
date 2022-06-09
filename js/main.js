import Order from './models/order.js';
import * as orderService from './services/order_service.js';

const data = document.getElementById('totalInput').innerHTML.split('\n');

const order = new Order(Number(data[0]), Number(data[1]), Number(data[2]));
const total = orderService.total(order);

console.log(`Pedido código: ${order.code}`);
console.log(`Valor total: ${total.toFixed(2)}`);
