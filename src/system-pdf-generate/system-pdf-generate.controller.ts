import {
    Controller,
    Get,
    Res,
    Query
  } from '@nestjs/common';
import {SystemPdfGenerateService} from "./system-pdf-generate.service"

@Controller('system_pdf_generate')
export class SystemPdfGenerateController {
    constructor(private systemPdfGenerateService: SystemPdfGenerateService) {}
    @Get('customer')
    customerReport(@Res() res: any, @Query() params: {invoice_id: string}) {
      return this.systemPdfGenerateService.customer_invoice_pdf(res, params)
    }
    @Get('supplier')
    supplierReport(@Res() res: any, @Query() params: {invoice_id: string}) {
      return this.systemPdfGenerateService.supplier_invoice_pdf(res, params)
    }
}
