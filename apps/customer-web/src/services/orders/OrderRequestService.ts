export const getFormDataOfAdviceRequest = (payload: NhapThuocPayload.Orders.AdviceRequest): FormData => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload)) {
    if (key === 'images') {
      for (let i = 0; i < payload[key].length; i++) {
        formData.append(`images`, payload[key][i]);
      }
    } else if (key === 'drugData') {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  }

  return formData;
};
