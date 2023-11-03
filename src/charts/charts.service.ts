import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { InvoiceSearchService } from '../invoice_search/invoice_search.service';

@Injectable()
export class ChartsService {
  constructor(private prisma: PrismaModuleService) {}

  async getInvoicesChartData() {
    const dateOfToday = new Date();
    dateOfToday.setHours(0, 0, 0, 0);

    const customersData = await this.prisma.customer_invoices.findMany({
      where: {
        customer_invoice_date: {
          gte: dateOfToday,
        },
      },
    });
    // console.log(customersData);
    const supplierData = await this.prisma.supplier_invoices.findMany({
      where: {
        supplier_invoice_date: {
          gte: dateOfToday,
        },
      },
    });
    // .$queryRaw`SELECT * FROM customers_data`;
    const chart = {
      labels: ['Suppliers', 'Customers'],
      datasets: [
        {
          label: 'Invoices',
          data: [supplierData.length, customersData.length],
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            // 'rgba(255, 206, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    return chart;
  }

  async getVaultChartData() {
    const dateOfToday = new Date();
    dateOfToday.setHours(0, 0, 0, 0);

    const cashPaymentVoucher = await this.prisma.cash_payment_voucher.findMany({
      where: {
        voucher_date: {
          gte: dateOfToday,
        },
      },
    });
    const cashReceiptVoucher = await this.prisma.cash_receipt_voucher.findMany({
      where: {
        voucher_date: {
          gte: dateOfToday,
        },
      },
    });
    const paidCustomers = await this.prisma.customer_invoices.findMany({
      where:{
        customer_invoice_date: {
          gte: dateOfToday,
        },
        customer_invoice_paid:{
          not: 0
        }
      }
    })
    const paidSuppliers= await this.prisma.supplier_invoices.findMany({
      where:{
        supplier_invoice_date: {
          gte: dateOfToday,
        },
        supplier_invoice_paid:{
          not: 0
        }
      }
    })
    const chart = {
      labels: ['Incomes', 'Outcomes', 'suppliers', 'customers'],
      datasets: [
        {
          label: 'Invoices',
          data: [cashPaymentVoucher.length, cashReceiptVoucher.length, paidSuppliers.length, paidCustomers.length],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    return chart;
  }
}
