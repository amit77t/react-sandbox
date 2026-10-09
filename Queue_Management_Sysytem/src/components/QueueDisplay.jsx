import { useState } from "react";

function QueueDisplay({ queue, onRemove, onUpdateStatus }) {
    const getStatusColor = (status) => {
        switch (status) {
            case "waiting":
                return "var(--warning)";
            case "serving":
                return "var(--success)";
            case "completed":
                return "var(--info)";
            default:
                return "var(--text)";
        }
    };

    return (
        <div className="queue-display" >

            <h2>Current Queue</h2>
            {queue.length === 0 ? (
                <p>No customers in the queue</p>
            ) : (
                <div>
                    {queue.map((customer) => (
                        <div key={customer.id}>
                            <p>{customer.name} - {customer.service}</p>
                            <p>Status: <span style={{ color: getStatusColor(customer.status) }}>{customer.status}</span></p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default QueueDisplay;