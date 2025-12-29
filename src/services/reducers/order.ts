import type { TOrder, TServiceWithCount } from "../../utils/types";
import {
  ADD_SERVICE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_REQUEST_ERROR,
  CREATE_ORDER_REQUEST_SUCCESS,
  type TOrderActions,
} from "../actions/order";

type TInitialState = {
  selectedServices: TServiceWithCount[];
  orders: TOrder[];
  createOrderRequest: boolean;
  createOrderRequestError: boolean;
};

const initialState: TInitialState = {
  selectedServices: [],
  orders: [],
  createOrderRequest: false,
  createOrderRequestError: false,
};

export const orderReducer = (state = initialState, action: TOrderActions) => {
  switch (action.type) {
    case ADD_SERVICE:
      let isFirstService = true;
      let newSelectedServices: TServiceWithCount[] = [];
      state.selectedServices.forEach((service) => {
        if (service.id === action.service.id) {
          newSelectedServices.push({ ...service, count: service.count + 1 });
          isFirstService = false;
        } else {
          newSelectedServices.push(service);
        }
      });

      if (isFirstService) {
        newSelectedServices = [
          ...state.selectedServices,
          { ...action.service, count: 1 },
        ];
      }

      return {
        ...state,
        selectedServices: newSelectedServices,
      };
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        createOrderRequest: true,
        createOrderRequestError: false,
      };
    case CREATE_ORDER_REQUEST_ERROR:
      return {
        ...state,
        createOrderRequest: false,
        createOrderRequestError: true,
      };
    case CREATE_ORDER_REQUEST_SUCCESS:
      return {
        ...state,
        orders: [...state.orders, action.order],
        selectedServices: [],
        createOrderRequest: false,
        createOrderRequestError: false,
      };
    default:
      return state;
  }
};
