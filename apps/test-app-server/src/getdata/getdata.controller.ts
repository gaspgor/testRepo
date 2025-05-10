import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GetDataService } from "./getdata.service";
import { People } from "../getData/People";
import { Test } from "../getData/Test";

@swagger.ApiTags("getData")
@common.Controller("getData")
export class GetDataController {
  constructor(protected readonly service: GetDataService) {}

  @common.Post("/add")
  @swagger.ApiOkResponse({
    type: Test
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Add(
    @common.Body()
    body: People
  ): Promise<> {
        return this.service.Add(body);
      }

  @common.Get("/people")
  @swagger.ApiOkResponse({
    type: People
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async People(
    @common.Body()
    body: 
  ): Promise<People[]> {
        return this.service.People(body);
      }
}
