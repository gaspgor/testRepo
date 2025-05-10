import { registerEnumType } from "@nestjs/graphql";
export enum Test {}
registerEnumType(Test, {
    name: "Test",
  });