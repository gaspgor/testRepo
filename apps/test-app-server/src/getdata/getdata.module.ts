import { Module } from "@nestjs/common";
import { GetDataService } from "./getdata.service";
import { GetDataController } from "./getdata.controller";
import { GetDataResolver } from "./getdata.resolver";

@Module({
  controllers: [GetDataController],
  providers: [GetDataService, GetDataResolver],
  exports: [GetDataService],
})
export class GetDataModule {}
