import buildClient from '../../api/build-client'

const OrderIndex = ({ orders }) => {
    return <ul>
        {orders.map(order => {
            return <li key={order.id}>
                {order.ticket.title} - {order.status}
            </li>
        })}
    </ul>
}

export async function getStaticProps() {
    const { data } = await buildClient.get('/api/orders');

    return {
        props: {
            orders: data
        }
    }
}

export default OrderIndex;