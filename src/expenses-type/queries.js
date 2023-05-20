const getExpensesType = "SELECT * FROM expenses_type";
const checkOptionExists = "SELECT s FROM expenses_type s WHERE s.print_option = $1";
const addPrintOption = "INSERT INTO expenses_type (print_option, note) VALUES ($1,$2)"
const checkIdExists =  "SELECT s FROM expenses_type s WHERE s.print_id = $1";
const removePrintOption = "DELETE FROM expenses_type WHERE print_id = $1";
const updatePrintOption = "UPDATE expenses_type SET print_option = $2, note = $3 WHERE print_id = $1"
const popExpensesType = "SELECT print_id, print_option FROM expenses_type"

module.exports =  {
    getExpensesType,
    checkOptionExists,
    addPrintOption,
    removePrintOption,
    checkIdExists,
    updatePrintOption,
    popExpensesType
}