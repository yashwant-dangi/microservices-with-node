import { useEffect, useState } from "react";
import buildClient from "../../api/build-client";

const OrderShow = ({ order }) => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const findTimeLeft = () => {
            const msLeft = new Date(order.expiresAt) - new Date();
            setTimeLeft(Math.round(msLeft / 1000));
        }
        findTimeLeft();
        const timerId = setInterval(findTimeLeft, 1000);
        return () => {
            clearInterval(timerId);
        }
    }, [order])

    return <div>Time left to pay: {timeLeft} seconds</div>;
}

export async function getStaticProps(context) {
    const { orderId } = context.query;
    const { data } = await buildClient.get(`/api/orders/${orderId}`);

    return {
        props: {
            order: data
        }
    }
}

export default OrderShow;