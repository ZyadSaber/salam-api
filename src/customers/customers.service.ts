import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { newCustomer, editCustomer, deleteCustomer } from '../types';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaModuleService) {}

  async getCustomersMainTable() {
    const customers = await this.prisma.customers_data.findMany();
    customers.map((customer) => {
      //@ts-ignore
      customer.query_status = 'q';
    });
    return {
      data: customers,
    };
  }

  async getCustomersList() {
    const customers = await this.prisma.customers_data.findMany();
    const customersList = [];
    customers.map((customer) => {
      const customerValue = {
        label: customer.customer_name,
        value: customer.customer_id,
      };
      customersList.push(customerValue);
    });
    return customersList;
  }

  async newCustomer(dto: newCustomer) {
    const existCustomer = await this.prisma.customers_data.findMany({
      where: {
        customer_name: dto.customer_name,
      },
    });
    if (existCustomer.length === 0) {
      try {
        const newCustomer = await this.prisma.customers_data.create({
          data: {
            customer_name: dto.customer_name,
            email: dto.email,
            phone: dto.phone,
            address: dto.address,
          },
        });
        return {
          response: 'success',
          message: `Created Customer ${newCustomer.customer_name}`,
        };
      } catch (error) {
        throw error;
      }
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Customer is exist',
      });
    }
  }

  async putCustomer(dto: editCustomer) {
    const existCustomer = await this.prisma.customers_data.findUnique({
      where: {
        customer_id: dto.customer_id,
      },
    });
    if (existCustomer) {
      await this.prisma.customers_data.update({
        where: {
          customer_id: +dto.customer_id,
        },
        data: {
          customer_name: dto.customer_name,
          email: dto.email,
          phone: dto.phone,
          address: dto.address,
        },
      });
      return { response: 'success' };
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Customer does not exist',
      });
    }
  }

  async deleteCustomer(dto: deleteCustomer) {
    try{
      await this.prisma.customers_data.delete({
        where: {
          customer_id: +dto.customer_id,
        },
      });
      return { response: 'success' };
    } catch(error){
      throw new ForbiddenException({
        response: 'error',
        message: `${error}`,
      });
    }
  }
}
