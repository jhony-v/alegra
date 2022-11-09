import { CURRENCY, LOCALE_CURRENCIES } from "../constants";

export interface FormatAmountProps {
  currency?: string;
  amount: number;
}

export default function formatAmount({
  currency = CURRENCY.PEN,
  amount = 0,
}: FormatAmountProps) {
  return new Intl.NumberFormat(LOCALE_CURRENCIES[currency], {
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}
