import {
    Controller,
    Get,
    Res
  } from '@nestjs/common';
  import { createReadStream } from 'fs';
  import { join } from 'path';
import {SystemPdfGenerateService} from "./system-pdf-generate.service"

@Controller('system_pdf_generate')
export class SystemPdfGenerateController {
    constructor(private systemPdfGenerateService: SystemPdfGenerateService) {}
    @Get('files')
    getFile(@Res() res: any) {
      const file = createReadStream(join(process.cwd(), 'src/system-pdf-generate/pdf/sample.pdf'));
      file.pipe(res);
    }
}
