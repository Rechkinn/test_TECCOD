export type TService = {
  name: string;
  price: number;
  id: number;
};
export type TServiceWithCount = {
  count: number;
} & TService;

export type TStyleTypeButton = "add" | "order";

export type TOrder = { number: number };
