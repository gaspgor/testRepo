import * as graphql from "@nestjs/graphql";
import { People } from "../getData/People";
import { GetDataService } from "./getdata.service";

export class GetDataResolver {
  constructor(protected readonly service: GetDataService) {}

  @graphql.Query(() => String)
  async Add(
    @graphql.Args()
    args: People
  ): Promise<string> {
    return this.service.Add(args);
  }

  @graphql.Query(() => [People])
  async People(
    @graphql.Args("args")
    args: string
  ): Promise<People[]> {
    return this.service.People(args);
  }
}
