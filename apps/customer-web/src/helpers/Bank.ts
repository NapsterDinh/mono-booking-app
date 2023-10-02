import crc from 'crc/crc16ccitt';

// document: https://vietqr.net/portal-service/download/documents/QR_Format_T&C_v1.0_VN_092021.pdf
// bankBIN list: https://www.indovinabank.com.vn/sites/default/files/0%20MARKETING_p1/EBANKING%20forms/Ds%20t%E1%BB%95ng%20NH%20tham%20gia%20napas%20(VN)%2026.10.2020%20m%E1%BB%9Bi%20nh%E1%BA%A5t.pdf
export const generateQRCode = (info: { bankBIN: string; accountNumber: string; amount: number; content: string }) => {
  if (!info?.bankBIN || !info?.accountNumber || !info?.content) {
    return '';
  }

  const bankInfoStringCode = `00${info.bankBIN.length.toString().padStart(2, '0')}${info.bankBIN}01${
    info.accountNumber.length
  }${info.accountNumber}`;

  const customerAccountInformation = `0010A00000072701${bankInfoStringCode.length}${bankInfoStringCode}0208QRIBFTTA`;
  const customerAccountInformationFormattedString = `38${customerAccountInformation.length}${customerAccountInformation}`;
  const amountInformationFormattedString = `54${info.amount.toString().length.toString().padStart(2, '0')}${
    info.amount
  }`;
  const contentString = `08${info.content.length.toString().padStart(2, '0')}${info.content}`;
  const contentFormattedString = `62${contentString.length.toString().padStart(2, '0')}${contentString}`;
  const crcContent = `000201010212${customerAccountInformationFormattedString}5303704${amountInformationFormattedString}5802VN${contentFormattedString}6304`;
  const crcCode = crc(crcContent).toString(16).toUpperCase();

  return `${crcContent}${crcCode}`;
};
