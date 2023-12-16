import { ForbiddenException, Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { newAndEditLabels, DeleteLabel } from '../types';

@Injectable()
export class LabelsPageService {
  constructor(private prisma: PrismaModuleService) {}

  async getLabelMainTable(param?: {arabic_name?: string, english_name?: string}) {
    const {english_name, arabic_name} = param
    const labelData = await this.prisma.language_code.findMany({
      where:{
        english_name: {
          contains:  english_name || undefined
        },
        arabic_name:{
          contains:  arabic_name || undefined
        }
      }
    });
    const computedArray = labelData.map((record) => {
      const obj = {
        ...record,
        updated_at: format(record.updated_at, 'yyyy-MM-dd hh:mm aa'),
        created_at: format(record.created_at, 'yyyy-MM-dd hh:mm aa'),
        query_status: 'q',
      };
      return obj;
    });
    return {
      data: computedArray,
    };
  }

  async newLabel(dto:newAndEditLabels) {
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
          message: `Created Label ${newLabel.language_code} @ ${newLabel.created_at}`,
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

  async editLabel(dto: newAndEditLabels) {
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
        message: `Update Label ${updatedLabel.language_code} @ ${updatedLabel.updated_at}`,
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteLabel(dto: DeleteLabel){
    try{
      const deleteLabel = await this.prisma.language_code.delete({
        where:{
          language_code: dto.language_code
        }
      })
      return {
        response: 'success',
        message: `Deleted Page Name ${deleteLabel.language_code}`,
      };
    }catch(error){
      throw error
    }
  }
}
