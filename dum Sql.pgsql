-- DELETE FROM LANG_DEFENITION;
-- DELETE FROM customer_invoices_items_details;
-- DELETE FROM customer_invoices;
-- DELETE FROM supplier_invoices_items_details;
-- DELETE FROM supplier_invoices;
-- DELETE from items;
-- delete from customers;
-- DELETE FROM suppliers;
-- delete from users_sessions;
-- delete from user_permission;
-- delete from users;
-- delete from print_options;
-- delete from page_name;
-- delete from employee_attendance;
-- delete from employees;

-- select * from users

insert into language_code (created_at, updated_at, language_code, english_name, arabic_name)
values
(
	'6/6/2023', '6/6/2023', 'bscdat','Basic Data','البيانات الاساسية'
),
(
	'6/6/2023', '6/6/2023', 'aptl','Salam App','برنامج السلام'
),
(
	'6/6/2023', '6/6/2023', 'invcs','Invoices','الفواتير'
),
(
	'6/6/2023', '6/6/2023', 'emplys','Employees','الموظفين'
),
(
	'6/6/2023', '6/6/2023', 'acntsmry','Account Summary','اجماليات الحسابات'
),
(
	'6/6/2023', '6/6/2023', 'rprts','Reports','التقارير'
),
(
	'6/6/2023', '6/6/2023', 'splrs','Suppliers','الموردين'
),
(
	'6/6/2023', '6/6/2023', 'cstmrs','Customers','العملاء'
),
(
	'6/6/2023', '6/6/2023', 'itms','Items','الاصناف'
),
(
	'6/6/2023', '6/6/2023', 'prntptn','Print Options','خيارات الطباعة'
),
(
	'6/6/2023', '6/6/2023', 'incmandexpns','Income and Expense','الدخل و المصروفات'
),
(
	'6/6/2023', '6/6/2023', 'splrsinvcs','Suppliers Invoice','فاتورة المورد'
),
(
	'6/6/2023', '6/6/2023', 'cstmrsinvs','Customer Invoice','فاتورة عميل'
),
(
	'6/6/2023', '6/6/2023', 'invsrch','Invoice Search','بحث فاتورة'
),
(
	'6/6/2023', '6/6/2023', 'emplyatndnc','Employee Attendance','حضور الموظف'
),
(
	'6/6/2023', '6/6/2023', 'emplylvng','Employee leaving','انصراف الموظف'
),
(
	'6/6/2023', '6/6/2023', 'emplyslry','Employee Salary','مفردات الموظف'
),
(
	'6/6/2023', '6/6/2023', 'emplydat','Employees Data','بيانات الموظفين'
),
(
	'6/6/2023', '6/6/2023', 'smbt','Sumbit','تسجيل'
),
(
	'6/6/2023', '6/6/2023', 'cls','Close','اغلاق'
),
(
	'6/6/2023', '6/6/2023', 'eml','Email','البريد الالكتروني'
),
(
	'6/6/2023', '6/6/2023', 'crntsrs','Current User Is','اسم المستخدم الحالي'
),
(
	'6/6/2023', '6/6/2023', 'phn','Phone','المحمول'
),
(
	'6/6/2023', '6/6/2023', 'mbl','Mobile','الهاتف'
),
(
	'6/6/2023', '6/6/2023', 'adrs','Address','العنوان'
),
(
	'6/6/2023', '6/6/2023', 'itmnm','Item Name','اسم الصنف'
),
(
	'6/6/2023', '6/6/2023', 'unt','Unit','الوحدة'
),
(
	'6/6/2023', '6/6/2023', 'bsprc','Base Price','السعر المبدئي'
),
(
	'6/6/2023', '6/6/2023', 'no','No','رقم'
),
(
	'6/6/2023', '6/6/2023', 'prntnm','Print Name','اسم الطباعة'
),
(
	'6/6/2023', '6/6/2023', 'nts','Notes','ملاحظات'
),
(
	'6/6/2023', '6/6/2023', 'splr','Supplier','المورد'
),
(
	'6/6/2023', '6/6/2023', 'qty','Quantity','الكمية'
),
(
	'6/6/2023', '6/6/2023', 'wdth','Width','العرض'
),
(
	'6/6/2023', '6/6/2023', 'hght','Height','الطول'
),
(
	'6/6/2023', '6/6/2023', 'prc','Price','السعر'
),
(
	'6/6/2023', '6/6/2023', 'sz','Size','المساحة'
),
(
	'6/6/2023', '6/6/2023', 'total','Total','الاجمالي'
),
(
	'6/6/2023', '6/6/2023', 'qnty','Quantity','الكمية'
),
(
	'6/6/2023', '6/6/2023', 'actn','Action','فعل'
),
(
	'6/6/2023', '6/6/2023', 'dscnt','Discount','الخصم'
),
(
	'6/6/2023', '6/6/2023', 'sv','Save','حفظ'
),
(
	'6/6/2023', '6/6/2023', 'expnsid','Expense ID','رقم المصروف'
),
(
	'6/6/2023', '6/6/2023', 'expnsnm','Expense Name','اسم المصروف'
),
(
	'6/6/2023', '6/6/2023', 'expnstyp','Expenses Types','انوع المصروفات'
),
(
	'6/6/2023', '6/6/2023', 'expnstls','Expenses Totals','اجمالي المصروفات'
),
(
	'6/6/2023', '6/6/2023', 'yrltls','Yearly Totals','اجمالي السنة'
),
(
	'6/6/2023', '6/6/2023', 'mnthltl','Monthly Totals','اجمالي الشهر'
),
(
	'6/6/2023', '6/6/2023', 'dltls','Daily Totals','اجمالي اليوم'
),
(
	'6/6/2023', '6/6/2023', 'itmsmry','Item Summary','حساب الاصناف'
),
(
	'6/6/2023', '6/6/2023', 'splrsmry','Supplier Summary','حساب المورد'
),
(
	'6/6/2023', '6/6/2023', 'cstmrsmry','Customer Summary','حساب العميل'
),
(
	'6/6/2023', '6/6/2023', 'cshpymntvchr','Casher Payment Voucher','سند صرف نقدي'
),
(
	'6/6/2023', '6/6/2023', 'splrnm','Supplier Name','اسم المورد'
),
(
	'6/6/2023', '6/6/2023', 'cstmrnm','Customer Name','اسم العميل'
),
(
	'6/6/2023', '6/6/2023', 'vchrnm','Voucher Name','نوع الصرف'
),
(
	'6/6/2023', '6/6/2023', 'amnt','Amount','القيمة'
),
(
	'6/6/2023', '6/6/2023', 'cshrcptvchr','Casher Receipt Voucher','سند قبض نقدي'
),
(
	'6/6/2023', '6/6/2023', 'dtls','Details','التفاصيل'
),
(
	'6/6/2023', '6/6/2023', 'jbtl','Job Title','المسمى الوظيفي'
),
(
	'6/6/2023', '6/6/2023', 'dtfhrng','Date Of Hiring','تاريخ التعيين'
),
(
	'6/6/2023', '6/6/2023', 'ntslry','Net Salary','صافي الراتب'
),
(
	'6/6/2023', '6/6/2023', 'ovrtmcst','Over TIme Cost','تكلفة الوقت الاضافي'
),
(
	'6/6/2023', '6/6/2023', 'ltcs','Late Cost','تكلفة التاخير'
),
(
	'6/6/2023', '6/6/2023', 'tlrlylvng','Total Early Leaving','اجمالي الوقت المبكر'
),
(
	'6/6/2023', '6/6/2023', 'tlvrtm','Total Over Time','اجمالي الوقت الاضافي'
),
(
	'6/6/2023', '6/6/2023', 'tltm','Total Late Time','اجمالي وقت التاخير'
),
(
	'6/6/2023', '6/6/2023', 'slry','Salary','الراتب'
),
(
	'6/6/2023', '6/6/2023', 'erlytm','Early Time','الوقت المبكر'
),
(
	'6/6/2023', '6/6/2023', 'ovrtm','Over Time','الوقت الاضافي'
),
(
	'6/6/2023', '6/6/2023', 'ltrsn','Late Reason','سبب التاخير'
),
(
	'6/6/2023', '6/6/2023', 'ltm','Late Time','وقت التاخير'
),
(
	'6/6/2023', '6/6/2023', 'yr','Year','سنة'
),
(
	'6/6/2023', '6/6/2023', 'mnth','Month','شهر'
),
(
	'6/6/2023', '6/6/2023', 'itmid','Item Id','كود الصنف'
),
(
	'6/6/2023', '6/6/2023', 'lvngtm','Leaving Time','ميعاد الانصراف'
),
(
	'6/6/2023', '6/6/2023', 'absnt','Absent','غياب'
),
(
	'6/6/2023', '6/6/2023', 'rsn','Reason','السبب'
),
(
	'6/6/2023', '6/6/2023', 'atndnctm','Attendance Time','وقت الحضور'
),
(
	'6/6/2023', '6/6/2023', 'emply','Employee','الموظف'
),
(
	'6/6/2023', '6/6/2023', 'cstmr','Customer','العميل'
),
(
	'6/6/2023', '6/6/2023', 'Crdt','Credit','أجل'
),
(
	'6/6/2023', '6/6/2023', 'paid','Paid','المدفوع'
),
(
	'6/6/2023', '6/6/2023', 'Tlaftrdsnt','Total After Discount','الاجمالي بعد الخصم'
);

select * from language_code