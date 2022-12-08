import { Controller, Inject } from "@tsed/di";
import { PostModel, PostsRepository } from "../../../prisma/generated/tsed";
import { Delete, Get, Post, Put, Returns, Summary } from "@tsed/schema";
import { BodyParams, PathParams } from "@tsed/platform-params";
import { CreatePostReq, UpdatePostReq } from "src/models";

@Controller("/posts")
export class PostsController {
  @Inject()
  protected service: PostsRepository;

  @Post("/")
  @Summary("Create a new post")
  @Returns(201, PostModel)
  async createPost(@BodyParams() post: CreatePostReq): Promise<PostModel> {
    return this.service.create({ data: post });
  }

  @Put("/:id")
  @Summary("Update a specific post")
  @Returns(200, PostModel)
  async updatePost(
    @PathParams("id") id: string,
    @BodyParams() post: UpdatePostReq
  ): Promise<PostModel> {
    return this.service.update({
      where: { id },
      data: post,
    });
  }

  @Delete("/:id")
  @Summary("Delete a specific post")
  @Returns(200, Boolean)
  async deletePost(@PathParams("id") id: string): Promise<boolean> {
    await this.service.delete({
      where: {
        id,
      },
    });

    return true;
  }

  @Get("/")
  @Summary("Get list of post")
  @Returns(200, Array).Of(PostModel).Description("Return list of Post")
  async getAll(): Promise<Array<PostModel>> {
    return this.service.findMany();
  }

  @Get("/:id")
  @Summary("Get a specific post")
  @Returns(200, PostModel).Description("Return Post by id")
  async getById(@PathParams("id") id: string): Promise<PostModel | null> {
    return this.service.findFirst({
      where: {
        id,
      },
    });
  }
}
