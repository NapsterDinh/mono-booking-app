declare namespace NhapThuocResponse {
  declare namespace Landings.PopupEvents {
    interface TetHolidayAttributes {
      title: string;
      createdAt: string;
      updatedAt: string;
      events: Event[];
    }

    interface Event {
      id: number;
      __component: string;
      name: string;
      url: string;
      labelUrl: string;
      title: string;
      imageDesktop: NhapThuocResponse.Landings.DesktopImage;
      imageMobile: NhapThuocResponse.Landings.MobileImage;
      eventVouchers: EventVoucher[];
      contents: FiveElementsContents[];
    }

    interface EventVoucher {
      id: number;
      price: string;
      description: string;
      image: DesktopImage;
    }

    interface FiveElementsContents {
      id: number;
      name: string;
      description: string;
      winText: string;
      winBtnText: string;
      loseBtnText: string;
      loseText: string;
      iconDesktop: NhapThuocResponse.Landings.DesktopImage; // The icon of element
      iconMobile: NhapThuocResponse.Landings.MobileImage; // The icon of element
      imageDesktop: NhapThuocResponse.Landings.DesktopImage; // The banner of element
      imageMobile: NhapThuocResponse.Landings.MobileImage; // The banner of element
    }

    interface DataAttributes {
      id: number;
      attributes: TetHolidayAttributes;
    }
  }
}
