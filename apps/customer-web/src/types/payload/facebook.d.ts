declare namespace NhapThuocPayload {
  declare namespace FacebookPixel {
    interface BaseContent {
      content_ids: string;
      content_name: string;
      content_category: string | null;
      content_category_2: string | null;
      content_category_3: string | null;
    }
    interface BaseAction {
      content_type: 'product' | 'Shopping Cart' | 'Transaction';
      Contents: BaseContent[];
      value: string; // giá trị đơn hàng = giá sp - khuyến mãi
      currency: 'VND';
    }

    interface Content extends BaseContent {
      price?: string;
      quantity?: string;
    }

    interface AddToCart extends BaseContent, Pick<BaseAction, 'currency'> {
      content_type: 'product';
    }

    interface InitiateCheckout extends Omit<BaseAction, 'value'> {}

    interface Purchase extends BaseAction {
      Transaction_id: string;
    }
  }
}
