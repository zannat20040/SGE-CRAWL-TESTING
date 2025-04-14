export interface Office {
  city: string;
  address?: string;
  phone?: string;
  email?: string;
}

export interface OfficeList {
  country: string;
  offices: Office[];
}

export interface Props {
  textColor: string;
}
