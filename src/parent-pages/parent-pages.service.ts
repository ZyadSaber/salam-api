import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { newPageName, editPageName, deletePageName } from '../types';

@Injectable()
export class ParentPagesService {
    constructor(private prisma: PrismaModuleService) {}

    async getParentPagesList() {
        const pageParentNames = await this.prisma.page_parent.findMany(
          {
            orderBy:{
              page_parent_id: 'asc'
            },
            select:{
              page_parent_id: true,
              page_parent_name:true
          }
        }
        );

        pageParentNames.map((pageName) => {
          //@ts-ignore
          pageName.label = pageName.page_parent_name
          //@ts-ignore
          pageName.value = pageName.page_parent_id
          delete pageName.page_parent_id
          delete pageName.page_parent_name
        });

        return pageParentNames
      }
}
