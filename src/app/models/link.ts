import { BaseInput } from "./base-input";

export interface SingleLink {
  title: string,
  url: string,
}

export interface LinkList extends BaseInput {
  value: SingleLink[],
}
