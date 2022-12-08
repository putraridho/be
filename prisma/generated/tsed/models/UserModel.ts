import { User } from "../client";
import { Required, Property, Email, Allow, Format, CollectionOf, Ignore } from "@tsed/schema";
import { PostModel } from "./PostModel";

export class UserModel implements User {
  @Property(String)
  @Required()
  id: string;

  @Property(String)
  @Required()
  @Email()
  email: string;

  @Property(String)
  @Allow(null)
  name: string | null;

  @Property(Date)
  @Format("date-time")
  @Required()
  createdAt: Date;

  @Property(Date)
  @Format("date-time")
  @Required()
  updatedAt: Date;

  @CollectionOf(() => PostModel)
  @Required()
  @Ignore()
  posts: PostModel[];
}

