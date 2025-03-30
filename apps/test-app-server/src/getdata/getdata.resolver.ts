import * as graphql from "@nestjs/graphql";
import { People } from "../getData/People";
import { Test } from "../getData/Test";
import { GetDataService } from "./getdata.service";

export class GetDataResolver {
  constructor(protected readonly service: GetDataService) {}

  @graphql.Query(() => Test)
  async Add(
    @graphql.Args()
    args: People
  ): Promise<> {
    return this.service.Add(args);
  }

  @graphql.Query(() => [People])
  async People(
    @graphql.Args()
    args: 
  ): Promise<People[]> {
    return this.service.People(args);
  }
}
