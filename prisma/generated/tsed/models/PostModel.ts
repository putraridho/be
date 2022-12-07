import { Post } from "../client";
import { Required, Property, Allow } from "@tsed/schema";
import { UserModel } from "./UserModel";

export class PostModel implements Post {
  @Property(String)
  @Required()
  id: string;

  @Property(String)
  @Required()
  title: string;

  @Property(String)
  @Allow(null)
  content: string | null;

  @Property(Boolean)
  @Allow(null)
  published: boolean | null;

  @Property(() => UserModel)
  @Allow(null)
  author: UserModel | null;

  @Property(String)
  @Allow(null)
  authorId: string | null;
}

