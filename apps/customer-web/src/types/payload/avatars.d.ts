declare namespace NhapThuocPayload {
  declare namespace Avatars {
    interface InsertAvatar {
      customerId: string;
      avatar: string;
    }

    interface UpdateAvatar {
      customerId: string;
      avatar: string;
      avatarId: number;
    }
  }
}
