import { Injectable } from "@nestjs/common";
import { People } from "../getData/People";

@Injectable()
export class GetDataService {
  constructor() {}
  async Add(args: People): Promise<> {
    throw new Error("Not implemented");
  }
  async People(args: ): Promise<People[]> {
    throw new Error("Not implemented");
  }
}
