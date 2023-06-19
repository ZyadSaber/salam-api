import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';

@Injectable()
export class LanguageDataService {
  constructor(private prisma: PrismaModuleService) {}
  async getLabelData() {
    try {
      const language_codes = await this.prisma.language_code.findMany();
      return { data: language_codes };
    } catch (error) {
      throw error;
    }
  }

  async getLabelDisplay(dto: any) {
    const language_codes = await this.prisma.language_code.findMany();
    let code_to_show = {};
    if (language_codes.length !== 0) {
      if (dto.p_language === 'en') {
        language_codes.map((code) => {
          code_to_show[code.language_code] = code.english_name;
        });
      } else if (dto.p_language === 'ar') {
        language_codes.map((code) => {
          code_to_show[code.language_code] = code.arabic_name;
        });
      }
    }
    return code_to_show;
  }
}
