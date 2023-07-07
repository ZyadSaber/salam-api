import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';

@Injectable()
export class SystemReportsService {
  constructor(private prisma: PrismaModuleService) {}

  async getCustomersSummary() {
    const customersInvoices = await this.prisma.customer_invoices.findMany({
      where: {
        customer_invoice_credit: {
          notIn: 0,
        },
      },
    });

    const customersReceipt = await this.prisma.cash_receipt_voucher.findMany({
      where: {
        customer_id: {
          notIn: null,
        },
      },
    });

    return {
      customersReceipt,
      customersInvoices,
    };
  }
}
