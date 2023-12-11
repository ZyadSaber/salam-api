import { ForbiddenException, Injectable } from '@nestjs/common';
import {format} from "date-fns"
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { newEmployee, editEmployee, deleteEmployee } from '../types';

@Injectable()
export class EmployeeDataService {
  constructor(private prisma: PrismaModuleService) {}

  async getEmployeesMainData(param?: any) {
    const {name} = param;
    const employees = await this.prisma.employees_data.findMany({
      where:{
        employee_name: {
          contains: name || undefined
        }
      }
    });
    const responseArray = employees.map((employee) => {
      const obj = {
        ...employee,
        employee_attendance_time: format(employee.employee_attendance_time, 'hh:mm aa'),
        employee_leaving_time: format(employee.employee_leaving_time, 'hh:mm aa'),
        date_of_hiring: format(employee.date_of_hiring, 'yyyy-MM-dd'),
        updated_at: format(employee.updated_at, 'yyyy-MM-dd hh:mm aa'),
        created_at: format(employee.created_at, 'yyyy-MM-dd hh:mm aa'),
        query_status: 'q'
      }
      return obj
    });

    return {
      data: responseArray,
    };
  }

  // async newEmployee(dto: newEmployee) {
  //   const existEmployee = await this.prisma.employees_data.findMany({
  //     where: {
  //       employee_name: dto.employee_name,
  //     },
  //   });
  //   if (existEmployee.length === 0) {
  //     try {
  //       const newEmployee = await this.prisma.employees_data.create({
  //         data: {
  //           employee_name: dto.employee_name,
  //           employee_address: dto.employee_address,
  //           employee_phone: dto.employee_phone,
  //           employee_mobile: dto.employee_mobile,
  //           employee_job_title: dto.employee_job_title,
  //           employee_email: dto.employee_email,
  //           employee_salary: dto.employee_salary,
  //           employee_attendance_time: dto.employee_attendance_time,
  //           employee_leaving_time: dto.employee_leaving_time,
  //           date_of_hiring: dto.date_of_hiring,
  //         },
  //       });
  //       return {
  //         response: 'success',
  //         message: `Created Employee ${newEmployee.employee_name}`,
  //       };
  //     } catch (error) {
  //       throw error;
  //     }
  //   } else {
  //     throw new ForbiddenException({
  //       response: 'error',
  //       message: 'This Employee is exist',
  //     });
  //   }
  // }

  // async editEmployee(dto: editEmployee) {
  //   const existEmployee = await this.prisma.employees_data.findMany({
  //     where: {
  //       employee_id: +dto.employee_id,
  //     },
  //   });
  //   if (existEmployee) {
  //     try {
  //       const newEmployee = await this.prisma.employees_data.update({
  //         where: {
  //           employee_id: dto.employee_id,
  //         },
  //         data: {
  //           employee_name: dto.employee_name,
  //           employee_address: dto.employee_address,
  //           employee_phone: dto.employee_phone,
  //           employee_mobile: dto.employee_mobile,
  //           employee_job_title: dto.employee_job_title,
  //           employee_email: dto.employee_email,
  //           employee_salary: dto.employee_salary,
  //           employee_attendance_time: dto.employee_attendance_time,
  //           employee_leaving_time: dto.employee_leaving_time,
  //           date_of_hiring: dto.date_of_hiring,
  //         },
  //       });
  //       return {
  //         response: 'success',
  //         message: `Updated Employee ${newEmployee.employee_name}`,
  //       };
  //     } catch (error) {
  //       throw error;
  //     }
  //   } else {
  //     throw new ForbiddenException({
  //       response: 'error',
  //       message: 'This Employee does not exist',
  //     });
  //   }
  // }

  // async deleteEmployee(dto: deleteEmployee) {
  //   const existCustomer = await this.prisma.employees_data.findUnique({
  //     where: {
  //       employee_id: +dto.employee_id,
  //     },
  //   });
  //   if (existCustomer) {
  //     await this.prisma.employees_data.delete({
  //       where: {
  //         employee_id: +dto.employee_id,
  //       },
  //     });
  //     return { response: 'success' };
  //   } else {
  //   }
  //   throw new ForbiddenException({
  //     response: 'error',
  //     message: 'This Employee does not exist',
  //   });
  // }
}
