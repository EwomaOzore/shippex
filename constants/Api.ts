export const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const API_SHIPMENT_LIST_DOCTYPE = "AWB";
export const API_SHIPMENT_STATUS_LIST_DOCTYPE = "AWB Status";

export const endpoints = {
  login: "/login",
  logout: "/logout",
  getLoggedInUser: "/frappe.auth.get_logged_user",
  getShipmentList: "/frappe.client.get_list",
};