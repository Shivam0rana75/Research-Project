export default function DeliveryStatus({ status }) {
    const statusColors = {
        "On Time": "bg-green-500",
        "Delayed": "bg-yellow-500",
        "At Risk": "bg-red-500",
        "Unknown": "bg-gray-500"
    };