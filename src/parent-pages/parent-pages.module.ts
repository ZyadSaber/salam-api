import { Module } from '@nestjs/common';
import { ParentPagesController } from './parent-pages.controller';
import { ParentPagesService } from './parent-pages.service';

@Module({
    controllers: [ParentPagesController],
    providers: [ParentPagesService]
})
export class ParentPagesModule {}
