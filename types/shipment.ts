export interface Shipment {
  name: string;
  creation: string;
  modified: string;
  modified_by: string;
  owner: string;
  docstatus: number;
  idx: number;
  sender: string;
  origin_area: string | null;
  origin_city: string;
  sender_phone: string | null;
  sender_name: string;
  origin_country: string;
  sender_address: string | null;
  origin_address_line2: string | null;
  origin_state: string;
  consignee: string;
  destination_area: string | null;
  destination_city: string;
  consignee_phone: string | null;
  consignee_name: string | null;
  destination_address_line_1: string | null;
  destination_country: string;
  consignee_address: string | null;
  destination_address_line_2: string | null;
  destination_state: string;
  origin_zone: string;
  destination_zone: string;
  service: string | null;
  total_weight: number;
  status: string;
  movable_units: any[] | null;
  amended_from: any | null;
  company: string;
  cod: number;
  total_cod: number;
  barcode: string;
  branch: any | null;
  currency: string;
  pieces: number;
  not_available: number;
  percentage: number;
  total_fees: number;
  awb_terms_template: any | null;
  awb_terms_and_conditions: any | null;
  sales_invoice_created: number;
  _user_tags: any | null;
  _comments: any | null;
  _assign: any | null;
  _liked_by: any | null;
  geolocation_evkp: any | null;
  shipping_service: string;
  delivery_time: any | null;
  from_client_side: number;
  destination_branch: any | null;
  origin_branch: any | null;
  delivery_due_date: any | null;
  company_currency: string;
  exchange_rate: number;
  overdue: number;
  posting_date: string;
  posting_time: string;
  is_returned: number;
  custodian: any | null;
  assignee: any | null;
  closed: number;
  custodian_commission: number;
  awb_date: string;
  type: any | null;
  origin_address_line_1: string | null;
  service_type: any | null;
  adjusted_cod: number;
}

export interface ShipmentStatus {
  name: string;
  creation: string;
  modified: string;
  modified_by: string;
  owner: string;
  docstatus: number;
  idx: number;
  status: string;
  color: string;
  _user_tags: any | null;
  _comments: any | null;
  _assign: any | null;
  _liked_by: any | null;
}

export interface ShipmentListRequest {
  fields?: string[];
  filters?: {
    [key: string]: any;
  };
}

export interface ShipmentListResponse {
  message: Shipment[];
}

export interface ShipmentStatusListRequest {
  fields?: string[];
}

export interface ShipmentStatusListResponse {
  message: ShipmentStatus[];
}
