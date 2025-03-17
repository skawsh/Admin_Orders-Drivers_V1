
// Order status types
export type OrderStatus = 'new' | 'received' | 'in-progress' | 'ready-for-collect' | 'delivered' | 'cancelled';

// Wash type options
export type WashType = 'standard' | 'express' | 'both';

// Order data structure
export interface Order {
  id: string;
  orderDate: string;
  customer: string;
  status: OrderStatus;
  studio: string;
  driver: string;
  total: number;
  deliveryDate: string | null;
  washType: WashType;
  assigned?: boolean;
  rescheduled?: boolean;
  phone?: string;
  customerAddress?: string;
  studioAddress?: string;
}

// Table data interface
export interface OrderTableData {
  id: string;
  orderId: string;
  date: string;
  customer: string;
  phone: string;
  customerAddress: string;
  studioAddress: string;
  studio: string;
  washType: string;
  distance: string;
  status?: string;
  originalStatus?: OrderStatus;
}

// Component props types
export interface OrdersTableProps {
  className?: string;
}
