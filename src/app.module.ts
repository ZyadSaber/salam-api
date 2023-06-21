import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { ItemsModule } from './items/items.module';
import { CustomerInvoiceModule } from './customer-invoice/customer-invoice.module';
import { SupplierInvoiceModule } from './supplier-invoice/supplier-invoice.module';
import { PrismaModuleModule } from './prisma-module/prisma-module.module';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { LanguageDataModule } from './language-data/language-data.module';
import { ApplicationLogoModule } from './application_logo/application_logo.module';
import { PrintOptionsModule } from './print_options/print_options.module';
import { ExpensesTypeModule } from './expenses_type/expenses_type.module';
import { InvoiceSearchModule } from './invoice_search/invoice_search.module';
import { EmployeeDataModule } from './employee_data/employee_data.module';
import { ChartsModule } from './charts/charts.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    CustomersModule,
    SuppliersModule,
    ItemsModule,
    CustomerInvoiceModule,
    SupplierInvoiceModule,
    PrismaModuleModule,
    LanguageDataModule,
    ApplicationLogoModule,
    PrintOptionsModule,
    ExpensesTypeModule,
    InvoiceSearchModule,
    EmployeeDataModule,
    ChartsModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}