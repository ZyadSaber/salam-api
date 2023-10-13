import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { newSupplier, editSupplier, deleteSupplier } from '../types';

@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaModuleService) {}

  async getSuppliersMainTable() {
    const suppliers = await this.prisma.suppliers_data.findMany();
    suppliers.map((supplier) => {
      //@ts-ignore
      supplier.query_status = 'q';
    });
    return {
      data: suppliers,
    };
  }

  async getSuppliersList() {
    const suppliers = await this.prisma.suppliers_data.findMany();
    const suppliersList = [];
    suppliers.map((supplier) => {
      const supplierValue = {
        label: supplier.supplier_name,
        value: supplier.supplier_id,
      };
      suppliersList.push(supplierValue);
    });
    return suppliersList;
  }

  async newSupplier(dto: newSupplier) {
    const existSupplier = await this.prisma.suppliers_data.findMany({
      where: {
        supplier_name: dto.supplier_name,
      },
    });
    if (existSupplier.length === 0) {
      try {
        const newSupplier = await this.prisma.suppliers_data.create({
          data: {
            supplier_name: dto.supplier_name,
            email: dto.email,
            phone: dto.phone,
            address: dto.address,
          },
        });
        return {
          response: 'success',
          message: `Created Supplier ${newSupplier.supplier_name}`,
        };
      } catch (error) {
        throw error;
      }
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Supplier is exist',
      });
    }
  }

  async putSupplier(dto: editSupplier) {
    const existSupplier = await this.prisma.suppliers_data.findUnique({
      where: {
        supplier_id: dto.supplier_id,
      },
    });
    if (existSupplier) {
      await this.prisma.suppliers_data.update({
        where: {
          supplier_id: +dto.supplier_id,
        },
        data: {
          supplier_name: dto.supplier_name,
          email: dto.email,
          phone: dto.phone,
          address: dto.address,
        },
      });
      return { response: 'success' };
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Supplier does not exist',
      });
    }
  }

  async deleteSupplier(dto: deleteSupplier) {
    try{
      await this.prisma.suppliers_data.delete({
        where: {
          supplier_id: +dto.supplier_id,
        },
      });
      return { response: 'success' };
    }catch(error){
      throw new ForbiddenException({
        response: 'error',
        message: `${error}`,
      });
    }
    }
}
