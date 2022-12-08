import { Post } from "../client";
import { Required, Property, Allow, Format, Ignore } from "@tsed/schema";
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

  @Property(Date)
  @Format("date-time")
  @Required()
  createdAt: Date;

  @Property(Date)
  @Format("date-time")
  @Required()
  updatedAt: Date;

  @Property(Boolean)
  @Allow(null)
  published: boolean | null;

  @Property(() => UserModel)
  @Allow(null)
  @Ignore()
  author: UserModel | null;

  @Property(String)
  @Allow(null)
  authorId: string | null;
}

