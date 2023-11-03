import { Injectable } from '@nestjs/common';
import {createWriteStream, createReadStream } from "fs"
import { join } from 'path';
const PdfPrinter = require('pdfmake');
import { PrismaModuleService } from '../prisma-module/prisma-module.service';

@Injectable()
export class SystemPdfGenerateService {
  constructor(private prisma: PrismaModuleService) {}
    async customer_invoice_pdf(res: any, params:{invoice_id: string}){
      const customerData = await this.prisma.customer_invoices.findMany({
        where:{
          customer_invoice_id: +params.invoice_id
        },
        select: {
          customer_invoice_id: true,
          customer_invoice_date: true,
          invoice_note: true,
          customer_invoices_items_details: {
            include:{
              items_data: true,
              print_options: true
            },
          },
          customers_data: {
            select:{
              customer_name: true
            }
          },
          customer_invoice_total: true,
          customer_invoice_discount: true,
          customer_invoice_after_discount: true,
          customer_invoice_paid: true, 
          customer_invoice_credit: true
        }
      })

      const handleArabicCharacters = (message: string) => {
        let arabic = [];
        let english = [];
        
        var regex = new RegExp(
        "[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]"
        );
        
        arabic = message.split(" ").filter((e) => regex.test(e));
        english = message.split(" ").filter((e) => !regex.test(e));
        return `${english.join(" ")} ${arabic.reverse().join("  ")}`;
        }

      const computedData = {
        items:[],
        totals:[]
      }

      customerData[0].customer_invoices_items_details.forEach((record)=>{
        computedData.items.push([computedData.items.length + 1, `${record.print_options.print_option_name} / ${record.items_data.item_name}`, record.customer_invoice_item_width, record.customer_invoice_item_height, record.customer_invoice_item_size, record.customer_invoice_item_quantity, record.customer_invoice_item_price, record.customer_invoice_item_total, record.customer_invoice_item_notes])
      })

      const fonts = {
        Roboto: {
          normal: 'src/system-pdf-generate/fonts/DejaVuSans.ttf',
          bold: 'src/system-pdf-generate/fonts/DejaVuSansCondensed-Bold.ttf',
        }
      };

      const docDefinition = {
        pageOrientation: 'landscape',
        pageSize: 'A5',
        pageMargins: [ 15, 20, 15, 20 ],
        content: [
          { text: handleArabicCharacters('شركة السلام للدعايا و الاعلان'), fontSize: 30, bold: true, margin: 10},
          { text: `${customerData[0].customer_invoice_id}# ${handleArabicCharacters('فاتورة ')}`, bold: true, margin: 5},
          { text: `${customerData[0].customers_data.customer_name} : ${handleArabicCharacters('اسم العميل ')}`, margin: [0, 5, 0, 5]},
          { text: `${customerData[0].customer_invoice_date.getFullYear()}-${customerData[0].customer_invoice_date.getMonth()}-${customerData[0].customer_invoice_date.getDay()}  ${customerData[0].customer_invoice_date.getHours()}:${customerData[0].customer_invoice_date.getMinutes()}    : ${handleArabicCharacters('التاريخ')}`, margin: [0, 5, 0, 5]},
          `${customerData[0].invoice_note}`,
          {
            style: 'tableExample',
            table: {
              widths: [10, 140, 40, 40, 45, 40, 40, 50, 80],
              body: [
                ['#', 'الصنف', 'العرض', 'الطول', 'المساحة', 'الكمية', 'السعر', 'الاجمالي', 'ملاحظة'],
                ...computedData.items
              ]
            }
          },
          { text: " ", margin: [0, 5, 0, 5]},
          {
            style: 'tableExample',
            margin: [330, 0, 0, 0],
            table: {
              widths: [100, 120],
              body: [
                [customerData[0].customer_invoice_total.toString(), handleArabicCharacters('الاجمالي'), ],
                [customerData[0].customer_invoice_discount.toString(), handleArabicCharacters('الخصم'),  ],
                [customerData[0].customer_invoice_after_discount.toString(), handleArabicCharacters('الاجمالي بعد الخصم'), ],
                [customerData[0].customer_invoice_paid.toString(), handleArabicCharacters('المدفوع')],
                [customerData[0].customer_invoice_credit.toString(), handleArabicCharacters('المتبقي')]
              ]
            }
          }
        ]
    }

    const printer = new PdfPrinter(fonts);
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(createWriteStream(join(process.cwd(), `src/system-pdf-generate/pdf/customer_${params.invoice_id}_${new Date().toDateString()}_${new Date().getHours()}:${new Date().getMinutes()}.pdf`)));
pdfDoc.end();
const file = createReadStream(join(process.cwd(), `src/system-pdf-generate/pdf/customer_${params.invoice_id}_${new Date().toDateString()}_${new Date().getHours()}:${new Date().getMinutes()}.pdf`));
//customer_${params.invoice_id}_${new Date().toDateString()}_${new Date().getHours()}:${new Date().getMinutes()}
      file.pipe(res);
    }

    async supplier_invoice_pdf(res: any, params:{invoice_id: string}){
      const supplierData = await this.prisma.supplier_invoices.findMany({
        where:{
          supplier_invoice_id: +params.invoice_id
        },
        select: {
          supplier_invoice_id: true,
          supplier_invoice_date: true,
          invoice_note: true,
          supplier_invoices_items_details: {
            include:{
              items_data: true,
            },
          },
          suppliers_data: {
            select:{
              supplier_name: true
            }
          },
          supplier_invoice_total: true,
          supplier_invoice_discount: true,
          supplier_invoice_after_discount: true,
          supplier_invoice_paid: true, 
          supplier_invoice_credit: true
        }
      })

      const handleArabicCharacters = (message: string) => {
        let arabic = [];
        let english = [];
        
        var regex = new RegExp(
        "[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]"
        );
        
        arabic = message.split(" ").filter((e) => regex.test(e));
        english = message.split(" ").filter((e) => !regex.test(e));
        return `${english.join(" ")} ${arabic.reverse().join("  ")}`;
        }

      const computedData = {
        items:[],
        totals:[]
      }

      supplierData[0].supplier_invoices_items_details.forEach((record)=>{
        computedData.items.push([computedData.items.length + 1, `${record.items_data.item_name}`, record.supplier_invoice_item_width, record.supplier_invoice_item_height, record.supplier_invoice_item_size, record.supplier_invoice_item_quantity, record.supplier_invoice_item_price, record.supplier_invoice_item_total, record.supplier_invoice_item_notes])
      })

      const fonts = {
        Roboto: {
          normal: 'src/system-pdf-generate/fonts/DejaVuSans.ttf',
          bold: 'src/system-pdf-generate/fonts/DejaVuSansCondensed-Bold.ttf',
          italics: 'src/system-pdf-generate/fonts/DejaVuSansCondensed.ttf',
          bolditalics: 'src/system-pdf-generate/fonts/DejaVuSans-Bold.ttf'
        }
      };

      const docDefinition = {
        pageOrientation: 'landscape',
        pageSize: 'A5',
        pageMargins: [ 15, 20, 15, 20 ],
        content: [
          { text: handleArabicCharacters('شركة السلام للدعايا و الاعلان'), fontSize: 30, bold: true, margin: 10},
          { text: `${supplierData[0].supplier_invoice_id}# ${handleArabicCharacters('فاتورة ')}`, bold: true, margin: 5},
          { text: `${supplierData[0].suppliers_data.supplier_name} : ${handleArabicCharacters('اسم المورد ')}`, margin: [0, 5, 0, 5]},
          { text: `${supplierData[0].supplier_invoice_date.getFullYear()}-${supplierData[0].supplier_invoice_date.getMonth()}-${supplierData[0].supplier_invoice_date.getDay()}  ${supplierData[0].supplier_invoice_date.getHours()}:${supplierData[0].supplier_invoice_date.getMinutes()}    : ${handleArabicCharacters('التاريخ')}`, margin: [0, 5, 0, 5]},
          `${supplierData[0].invoice_note}`,
          {
            style: 'tableExample',
            table: {
              widths: [10, 140, 40, 40, 45, 40, 40, 50, 80],
              body: [
                ['#', 'الصنف', 'العرض', 'الطول', 'المساحة', 'الكمية', 'السعر', 'الاجمالي', 'ملاحظة'],
                ...computedData.items
              ]
            }
          },
          { text: " ", margin: [0, 5, 0, 5]},
          {
            style: 'tableExample',
            margin: [330, 0, 0, 0],
            table: {
              widths: [100, 120],
              body: [
                [supplierData[0].supplier_invoice_total.toString(), handleArabicCharacters('الاجمالي'), ],
                [supplierData[0].supplier_invoice_discount.toString(), handleArabicCharacters('الخصم'),  ],
                [supplierData[0].supplier_invoice_after_discount.toString(), handleArabicCharacters('الاجمالي بعد الخصم'), ],
                [supplierData[0].supplier_invoice_paid.toString(), handleArabicCharacters('المدفوع')],
                [supplierData[0].supplier_invoice_credit.toString(), handleArabicCharacters('المتبقي')]
              ]
            }
          }
        ]
    }

    const printer = new PdfPrinter(fonts);
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(createWriteStream(join(process.cwd(), `src/system-pdf-generate/pdf/supplier_${params.invoice_id}_${new Date().toDateString()}_${new Date().getHours()}:${new Date().getMinutes()}.pdf`)));
pdfDoc.end();
const file = createReadStream(join(process.cwd(), `src/system-pdf-generate/pdf/supplier_${params.invoice_id}_${new Date().toDateString()}_${new Date().getHours()}:${new Date().getMinutes()}.pdf`));
      file.pipe(res);
    }
  }
