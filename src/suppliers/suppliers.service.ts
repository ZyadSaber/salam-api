import { ForbiddenException, Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { newSupplier, editSupplier, deleteSupplier, supplierParam } from '../types';

@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaModuleService) {}

  async getSuppliersMainTable(params?: supplierParam) {
    const { supplier_name, phone, address } = params;
    const suppliers = await this.prisma.suppliers_data.findMany({
      where: {
        supplier_name: {
          contains: supplier_name || undefined,
        },
        phone: {
          contains: phone || undefined,
        },
        address: {
          contains: address || undefined,
        },
      },
    });
    const computedSuppliers = suppliers.map((supplier) => {
      const obj = {
        ...supplier,
        created_at: format(supplier.created_at, 'yyyy-MM-dd hh:mm aa'),
        updated_at: format(supplier.updated_at, 'yyyy-MM-dd hh:mm aa'),
        query_status: 'q',
      };
      return obj;
    });
    return {
      data: computedSuppliers,
    };
  }

  async getSuppliersList() {
    const suppliers = await this.prisma.suppliers_data.findMany();
    const suppliersList = suppliers.map((supplier) => {
      const supplierValue = {
        label: supplier.supplier_name,
        value: supplier.supplier_id,
      };
      return supplierValue;
    });
    return suppliersList;
  }

  async newSupplier(dto: newSupplier) {
    try {
      const newSupplier = await this.prisma.suppliers_data.create({
        data: {
          supplier_name: dto.supplier_name,
          phone: dto.phone,
          address: dto.address,
        },
      });
      return {
        response: 'success',
        message: `Created Supplier ${newSupplier.supplier_name}`,
      };
    } catch (error) {
      throw new ForbiddenException({
        response: 'error',
        message: error,
      });
    }
  }

  async putSupplier(dto: editSupplier) {
    try {
      await this.prisma.suppliers_data.update({
        where: {
          supplier_id: +dto.supplier_id,
        },
        data: {
          supplier_name: dto.supplier_name,
          phone: dto.phone,
          address: dto.address,
        },
      });
      return { response: 'success' };
    } catch (error) {
      throw new ForbiddenException({
        response: 'error',
        message: error,
      });
    }
  }

  async deleteSupplier(dto: deleteSupplier) {
    try {
      await this.prisma.suppliers_data.delete({
        where: {
          supplier_id: +dto.supplier_id,
        },
      });
      return { response: 'success' };
    } catch (error) {
      throw new ForbiddenException({
        response: 'error',
        message: `${error}`,
      });
    }
  }
}
