import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { newPageName, editPageName, deletePageName } from '../types';

@Injectable()
export class LabelsPageService {
  constructor(private prisma: PrismaModuleService) {}

  async getLabelMainTable() {
    const labelData = await this.prisma.language_code.findMany();
    labelData.forEach((record) => {
      //@ts-ignore
      record.query_status = 'q';
      return;
    });
    return { data: labelData };
  }

  async newLabel(dto) {
    const existLabel = await this.prisma.language_code.findMany({
      where: {
        language_code: dto.language_code,
      },
    });
    if (existLabel.length === 0) {
      try {
        const newLabel = await this.prisma.language_code.create({
          data: {
            language_code: dto.language_code,
            english_name: dto.english_name,
            arabic_name: dto.arabic_name,
          },
        });
        return {
          response: 'success',
          message: `Created Page Name ${newLabel.language_code} @ ${newLabel.created_at}`,
        };
      } catch (error) {
        throw error;
      }
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Page Label is exist',
      });
    }
  }

  async editLabel(dto) {
    try {
      const updatedLabel = await this.prisma.language_code.update({
        where: {
          language_code: dto.language_code,
        },
        data: {
          english_name: dto.english_name,
          arabic_name: dto.arabic_name,
        },
      });
      return {
        response: 'success',
        message: `Created Page Name ${updatedLabel.language_code} @ ${updatedLabel.updated_at}`,
      };
    } catch (error) {
      throw error;
    }
  }
}
