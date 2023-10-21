import {
    Controller,
    Get,
    Res
  } from '@nestjs/common';
import {SystemPdfGenerateService} from "./system-pdf-generate.service"

@Controller('system_pdf_generate')
export class SystemPdfGenerateController {
    constructor(private systemPdfGenerateService: SystemPdfGenerateService) {}
    @Get('files')
    getFile(@Res() res: any) {
      return this.systemPdfGenerateService.invoice_search_pdf(res)
    }
}
