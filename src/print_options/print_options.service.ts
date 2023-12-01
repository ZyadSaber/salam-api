import { ForbiddenException, Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import {
  newPrintOptions,
  editPrintOptions,
  deletePrintOptions,
} from '../types';

@Injectable()
export class PrintOptionsService {
  constructor(private prisma: PrismaModuleService) {}

  async getPrintOptionsMainTable(params?: any) {
    const {print_option_name, print_option_note} = params
    const printOptions = await this.prisma.print_options.findMany({
      where:{
        print_option_name: {
          contains: print_option_name || undefined
        },
        print_option_note: {
          contains: print_option_note || undefined
        }
      }
    });
    const computedPrintOptions = printOptions.map((printOption) => {
      const option = {
        ...printOption,
        created_at: format(printOption.created_at, 'yyyy-MM-dd hh:mm aa'),
        updated_at: format(printOption.updated_at, 'yyyy-MM-dd hh:mm aa'),
        query_status: 'q'
      }
      return option
    });
    return {
      data: computedPrintOptions,
    };
  }

  async getPrintOptionsList(){
    const printOptions = await this.prisma.print_options.findMany();
    const printOptionsList = [];
    printOptions.map((printOption) => {
      const customerValue = {
        label: printOption.print_option_name,
        value: printOption.print_option_id,
      };
      printOptionsList.push(customerValue);
    });
    return printOptionsList;
  }

  async newPrintOptions(dto: newPrintOptions) {
    const existPrintOption = await this.prisma.print_options.findMany({
      where: {
        print_option_name: dto.print_option_name,
      },
    });
    if (existPrintOption.length === 0) {
      try {
        const newPrintOption = await this.prisma.print_options.create({
          data: {
            print_option_name: dto.print_option_name,
            print_option_note: dto.print_option_note,
          },
        });
        return {
          response: 'success',
          message: `Created Item ${newPrintOption.print_option_name}`,
        };
      } catch (error) {
        throw error;
      }
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Item is exist',
      });
    }
  }

  async putPrintOption(dto: editPrintOptions) {
    const existPrintOption = await this.prisma.print_options.findUnique({
      where: {
        print_option_id: dto.print_option_id,
      },
    });
    if (existPrintOption) {
      await this.prisma.print_options.update({
        where: {
          print_option_id: +dto.print_option_id,
        },
        data: {
          print_option_name: dto.print_option_name,
          print_option_note: dto.print_option_note,
        },
      });
      return { response: 'success' };
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Item does not exist',
      });
    }
  }

  async deletePrintOption(dto: deletePrintOptions) {
    const existItem = await this.prisma.print_options.findUnique({
      where: {
        print_option_id: dto.print_option_id,
      },
    });
    if (existItem) {
      await this.prisma.print_options.delete({
        where: {
          print_option_id: +dto.print_option_id,
        },
      });
      return { response: 'success' };
    } else {
    }
    throw new ForbiddenException({
      response: 'error',
      message: 'This Item does not exist',
    });
  }
}
