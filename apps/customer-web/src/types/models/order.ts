import { PaymentStatus } from '@customer-web/enums/Payment';

interface OrderInformation {
  customerName?: string;
  customerReceiverName?: string;
  customerReceiverPhone?: string;
  eInvoice?: any;
  gender?: number;
  intendTime?: string;
  paymentMethodDefault?: number[];
  paymentMethodLabel?: string;
  paymentStatus?: PaymentStatus;
  receiverAddress?: string;
  receiverFullAddress?: string;
}

interface OrderPrice {
  totalPrice?: number;
  promotion?: number;
  deliveryFee?: number;
  finalPrice?: number;
}

interface OrderProduct {
  sku?: string;
  quantity?: number;
  title?: string;
  total?: number;
  price?: number;
  unit?: number;
  unitLabel?: string;
  discount?: number;
  discountPromotion?: number;
  image?: string;
  url?: string;
}

interface Shipment {
  statusShipment?: string;
  shipmentMethod?: number;
  isShowTimeline?: boolean;
  timeline?: Timeline[];
}

interface Timeline {
  enumStatus: number;
  enumStatusText: string;
  creationTime: string;
  enable: boolean;
  display: boolean;
  isProcessing: boolean;
}

interface Status {
  code: number;
  statusLabel: string;
}

export interface OrderSplit {
  parent?: {
    orderCode?: string;
    orderCodeDisplay?: string;
  };
  children: {
    orderCode?: string;
    orderCodeDisplay?: string;
    childType?: string;
  }[];
}

export interface Order {
  allowReOrder?: boolean;
  dataRaw?: any;
  delivery?: {
    estimatedDeliveryDate?: string;
  };
  isCancel?: boolean;
  canCancel?: boolean;
  canRebuy?: boolean;
  isRepayment?: boolean;
  notes?: string;
  orderCode?: string;
  orderCodeDisplay?: string;
  orderDate?: string;
  orderId?: string;
  orderInformation?: OrderInformation;
  orderName?: string;
  orderPrice?: OrderPrice;
  orderProducts?: OrderProduct[];
  shipment?: Shipment;
  status?: Status;
  totalProduct?: number;
  orderSplit?: OrderSplit;
}
