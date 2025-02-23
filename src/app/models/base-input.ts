import { PostTypes } from "../enums/post-types";

export interface BaseInput {
  title: string,
  type: PostTypes,
}
