
import React from 'react';
import { OrderStatus } from './types';

interface StatusBadgeProps {
  status: OrderStatus;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  switch (status) {
    case "new":
      return <span className="status-badge status-new">New Order</span>;
    case "received":
      return <span className="status-badge status-received">Order Received</span>;
    case "in-progress":
      return <span className="status-badge status-in-progress">In Progress</span>;
    case "ready-for-collect":
      return <span className="status-badge status-ready">Ready for collection</span>;
    case "delivered":
      return <span className="status-badge status-delivered">Order Delivered</span>;
    case "collected":
      return <span className="status-badge status-collected">Order collected</span>;
    case "cancelled":
      return <span className="status-badge status-cancelled">Order cancelled</span>;
    default:
      return null;
  }
};

export default StatusBadge;
