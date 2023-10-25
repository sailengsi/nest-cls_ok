import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClsModule } from "nestjs-cls";

@Module({
  imports: [
    ClsModule.forRoot({
      global: true,
      middleware: {
        generateId: true,
        mount: true
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
