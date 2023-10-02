declare namespace NhapThuocPayload {
  declare namespace Carts {
    interface BaseCart {
      sessionId: string;
      customerId?: string;
      phoneNumber?: string;
    }

    interface GetCart extends BaseCart {
      channelCode: number;
      shopCode?: string;
      shipmentPrice: number;
    }

    interface AddCart extends BaseCart {
      isCustomerToCart: boolean;
      cartItem: CartItem;
    }

    interface AdjustCart extends BaseCart {
      cartItem: CartItem;
    }

    interface RemoveItem extends BaseCart {
      Ids: string[];
    }

    interface UnSelectItem extends BaseCart {
      ids: string[];
    }

    interface AddListItem extends BaseCart {
      isCustomerToCart: true; // Always to for avoid duplicate "listCart" & "listCartCustomer"
      listCartItemsInput: ListCartItemsInput[];
    }

    interface SelectedPromotion extends Omit<BaseCart, 'shipmentPrice' | 'shopCode'> {
      cartId: string;
      productPromotions: PromotionSelectItem[];
      cartPromotions: PromotionSelectItem[];
    }

    interface PromotionSelectItem {
      promotionCode: string;
      statusCode: string;
    }

    interface ListCartItemsInput {
      itemCart: string;
      quantity: number;
      unitCode: number;
    }

    interface SyncCart {
      sessionId: string;
      customerId: string;
      isCustomerToCart: boolean;
      channelCode: number;
    }

    type MergeCart = GetCart;

    interface GenSession {
      shopCode?: string;
    }

    interface CartItem {
      itemCart: string;
      quantity: number;
      unitCode: number;
      inventory?: number;
    }

    interface ShipmentPlanning {
      planningId: string;
    }

    interface Loyalty {
      totalPoint: number;
    }

    interface PaymentMethod {
      id: string;
      vendor: string;
    }

    export interface Submit {
      orderChannel: number;
      customer: Customer;
      receiver: Receiver;
      cart: Cart;
      shipment?: Shipment;
      delivery?: {
        method: number;
      };
      payment: Payment;
      typePaymentMethod: number;
      isPrintOrderInvoice?: boolean;
      isExportVAT?: boolean;
    }

    export interface Customer {
      id: string;
      fullName: string;
      phoneNumber: string;
      gender: number;
      email?: string;
    }

    export interface Receiver {
      fullName: string;
      phoneNumber: string;
      address: Address | undefined;
      gender: number;
    }

    export interface Address {
      id: string;
      provinceCode: string;
      provinceName: string;
      districtCode: string;
      districtName: string;
      wardCode: string;
      wardName: string;
      address: string;
      fullAddress: string;
    }

    export interface Cart {
      sessionId: string;
      note: string;
    }

    export interface Shipment {
      method: number;
      fee: number;
    }

    export interface Shop {
      shopCode: string;
      shopName: string;
      address: string;
      timeOpen: string;
      timeClose: string;
    }

    export interface Payment {
      method: number;
    }

    export interface Token {
      signature: string;
      encrypt: string;
    }

    export interface TokenWithCardLink {
      signature: string;
      isCardLink: boolean;
      buyerInfo: BuyerInfo;
    }

    export interface BuyerInfo {
      signature: string;
      encrypt: string;
    }

    export interface Pricing {
      total: number;
      totalBill: number;
      totalDiscount: number;
      totalVoucherPrice: number;
    }
  }
}
