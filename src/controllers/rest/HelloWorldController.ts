import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }

  @Get("/hi")
  getHi() {
    return "hi";
  }
}
