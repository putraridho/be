import { Controller, Inject } from "@tsed/di";
import { BodyParams, PathParams } from "@tsed/platform-params";
import { UserModel, UsersRepository } from "../../../prisma/generated/tsed";
import { Delete, Get, Post, Put, Returns, Summary } from "@tsed/schema";
import { CreateUserReq, UpdateUserReq } from "src/models";
import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();

@Controller("/users")
export class UsersController {
  @Inject()
  protected service: UsersRepository;

  @Post("/")
  @Summary("Add a new user")
  @Returns(201, UserModel).Description("Created")
  async signupUser(@BodyParams() user: CreateUserReq): Promise<UserModel> {
    return this.service.create({ data: user });
  }

  @Put("/:id")
  @Summary("Update a specific user")
  @Returns(200, UserModel).Description("Updated")
  async updateUser(
    @PathParams("id") id: string,
    @BodyParams()
    user: UpdateUserReq
  ): Promise<UserModel | null> {
    return this.service.update({
      where: { id },
      data: user,
    });
  }

  @Delete("/:id")
  @Summary("Delete a specific user")
  @Returns(200, Boolean)
  async deleteUser(@PathParams("id") id: string): Promise<boolean> {
    await prisma.$transaction([
      prisma.post.deleteMany({
        where: {
          authorId: id,
        },
      }),
      prisma.user.delete({
        where: {
          id,
        },
      }),
    ]);

    return true;
  }

  @Get("/")
  @Summary("Get list of user")
  @Returns(200, Array).Of(UserModel).Description("Return list of User")
  async getAll(): Promise<Array<UserModel>> {
    return this.service.findMany();
  }

  @Get("/:id")
  @Summary("Get a specific user")
  @Returns(200, UserModel).Description("Return User by id")
  async getById(@PathParams("id") id: string): Promise<UserModel | null> {
    return this.service.findFirst({
      where: {
        id: id,
      },
    });
  }
}
