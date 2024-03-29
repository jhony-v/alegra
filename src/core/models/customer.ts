export interface Customer {
  id: number;
  email: string;
  name: string;
  phonePrimary: string;
  identification?: string;
  mobile: string;
  fax: string;
  phoneSecondary?: string;
  observations?: string;
  address: {
    address: string;
    city: string;
  };
}
