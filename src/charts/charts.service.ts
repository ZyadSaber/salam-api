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
}
