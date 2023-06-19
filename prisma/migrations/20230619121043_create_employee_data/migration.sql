-- CreateTable
CREATE TABLE "employees_data" (
    "employee_id" SERIAL NOT NULL,
    "employee_name" TEXT NOT NULL,
    "employee_address" TEXT,
    "employee_phone" TEXT,
    "employee_mobile" TEXT,
    "employee_job_title" TEXT NOT NULL,
    "employee_email" TEXT,
    "employee_salary" INTEGER NOT NULL,
    "employee_attendance_time" TEXT NOT NULL,
    "employee_leaving_time" TEXT NOT NULL,
    "date_of_hiring" TEXT,

    CONSTRAINT "employees_data_pkey" PRIMARY KEY ("employee_id")
);
