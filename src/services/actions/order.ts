import type { TOrder, TService } from "../../utils/types";

export const ADD_SERVICE: "ADD_SERVICE" = "ADD_SERVICE";
export const CREATE_ORDER_REQUEST: "CREATE_ORDER_REQUEST" =
  "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_REQUEST_ERROR: "CREATE_ORDER_REQUEST_ERROR" =
  "CREATE_ORDER_REQUEST_ERROR";
export const CREATE_ORDER_REQUEST_SUCCESS: "CREATE_ORDER_REQUEST_SUCCESS" =
  "CREATE_ORDER_REQUEST_SUCCESS";

export interface IAddServiceAction {
  readonly type: typeof ADD_SERVICE;
  readonly service: TService;
}
export interface ICreateOrderRequestAction {
  readonly type: typeof CREATE_ORDER_REQUEST;
}
export interface ICreateOrderRequestErrorAction {
  readonly type: typeof CREATE_ORDER_REQUEST_ERROR;
}
export interface ICreateOrderRequestSuccessAction {
  readonly type: typeof CREATE_ORDER_REQUEST_SUCCESS;
  readonly order: TOrder;
}

export type TOrderActions =
  | IAddServiceAction
  | ICreateOrderRequestAction
  | ICreateOrderRequestErrorAction
  | ICreateOrderRequestSuccessAction;
