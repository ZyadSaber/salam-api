import { ForbiddenException, Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { newCustomer, editCustomer, deleteCustomer, customerParam } from '../types';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaModuleService) {}

  async getCustomersMainTable(param?: customerParam) {
    const { customer_name, phone, address } = param;
    const customers = await this.prisma.customers_data.findMany({
      where: {
        customer_name: {
          contains: customer_name || undefined,
        },
        phone: {
          contains: phone || undefined,
        },
        address: {
          contains: address || undefined,
        },
      },
    });
    const computedCustomers = customers.map((customer) => {
      const obj = {
        ...customer,
        updated_at: format(customer.updated_at, 'yyyy-MM-dd hh:mm aa'),
        created_at: format(customer.created_at, 'yyyy-MM-dd hh:mm aa'),
        query_status: 'q',
      };
      return obj;
    });
    return {
      data: computedCustomers,
    };
  }

  async getCustomersList() {
    const customers = await this.prisma.customers_data.findMany();
    const customersList = customers.map((customer) => {
      const customerValue = {
        label: customer.customer_name,
        value: customer.customer_id,
      };
      return customerValue;
    });
    return customersList;
  }

  async newCustomer(dto: newCustomer) {
      try {
        const newCustomer = await this.prisma.customers_data.create({
          data: {
            customer_name: dto.customer_name,
            phone: dto.phone,
            address: dto.address,
          },
        });
        return {
          response: 'success',
          message: `Created Customer ${newCustomer.customer_name}`,
        };
      } catch (error) {
        throw new ForbiddenException({
          response: 'error',
          message: error,
        });
      }
  }

  async putCustomer(dto: editCustomer) {
    try{
      await this.prisma.customers_data.update({
        where: {
          customer_id: +dto.customer_id,
        },
        data: {
          customer_name: dto.customer_name,
          phone: dto.phone,
          address: dto.address,
        },
      });
      return { response: 'success' };
    }catch(error){
      throw new ForbiddenException({
        response: 'error',
        message: error,
      });
    }
  }

  async deleteCustomer(dto: deleteCustomer) {
    try {
      await this.prisma.customers_data.delete({
        where: {
          customer_id: +dto.customer_id,
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
