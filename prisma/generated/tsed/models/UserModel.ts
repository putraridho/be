import { User } from "../client";
import { Required, Property, Groups, Email, Allow, Format, CollectionOf, Ignore } from "@tsed/schema";
import { PostModel } from "./PostModel";

export class UserModel implements User {
  @Property(String)
  @Required()
  @Groups("!creation", "!update")
  id: string;

  @Property(String)
  @Required()
  @Email()
  @Groups("!update")
  email: string;

  @Property(String)
  @Allow(null)
  name: string | null;

  @Property(Date)
  @Format("date-time")
  @Required()
  @Groups("!creation", "!update")
  createdAt: Date;

  @Property(Date)
  @Format("date-time")
  @Required()
  @Groups("!creation", "!update")
  updatedAt: Date;

  @CollectionOf(() => PostModel)
  @Required()
  @Groups("!creation", "!update")
  @Ignore()
  posts: PostModel[];
}

