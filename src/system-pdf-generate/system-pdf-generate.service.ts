import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class SystemPdfGenerateService {
    
    async invoice_search_pdf(res: any){
        const file = createReadStream(join(process.cwd(), 'src/system-pdf-generate/pdf/sample.pdf'));
      file.pipe(res);
    }
}
