export const secondsToMinsAndSeconds = (seconds: number, showZeroMins = false) => {
  const mins = Math.floor(seconds / 60);
  const s = seconds - mins * 60;
  let convert = '';
  if (!showZeroMins && mins === 0) {
    convert = `${s.toString().padStart(2, '0')} giây`;
  } else {
    convert = `${mins.toString().padStart(2, '0')} phút ${s.toString().padStart(2, '0')} giây`;
  }
  return convert;
};

export const secondsToHms = (d: number) => {
  d = Number(d);
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);

  const hDisplay = h > 0 ? h + (h == 1 ? ' giờ ' : ' giờ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' phút ' : ' phút ') : m + ' phút ';
  const sDisplay = s > 0 ? s + (s == 1 ? ' giây' : ' giây') : '';
  return hDisplay + mDisplay + sDisplay;
};

export const setDate = (d: string | number | Date, days: number): Date => {
  const date = new Date(d);
  date.setDate(date.getDate() + days);
  return date;
};
