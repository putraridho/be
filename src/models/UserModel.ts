import { Email, Nullable, Property, Required } from "@tsed/schema";

export class UpdateUserReq {
  @Nullable(String)
  name?: string | null;
}

export class CreateUserReq {
  @Property(String)
  @Required()
  @Email()
  email: string;

  @Nullable(String)
  name?: string | null;
}
