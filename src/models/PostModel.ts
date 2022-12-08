import { Nullable, Property, Required } from "@tsed/schema";

export class UpdatePostReq {
  @Property(String)
  title?: string;

  @Nullable(String)
  content?: string | null;

  @Property(Boolean)
  published?: boolean;

  @Nullable(String)
  authorId?: string | null;
}

export class CreatePostReq {
  @Property(String)
  @Required()
  title: string;

  @Nullable(String)
  content?: string | null;

  @Property(Boolean)
  published?: boolean;

  @Nullable(String)
  authorId?: string | null;
}
