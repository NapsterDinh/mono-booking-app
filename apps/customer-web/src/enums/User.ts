export enum UserStatus {
  OPEN = 'Open',
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

export const USER_STATUS_LABELS = {
  [UserStatus.OPEN]: 'Mới tạo',
  [UserStatus.PENDING]: 'Chờ duyệt',
  [UserStatus.APPROVED]: 'Đã duyệt',
  [UserStatus.REJECTED]: 'Từ chối',
};

export enum UserRanking {
  BRONZE_LEVEL = 1,
}
