const getPrintOptions = "SELECT * FROM print_options";
const checkOptionExists = "SELECT s FROM print_options s WHERE s.print_option = $1";
const addPrintOption = "INSERT INTO print_options (print_option, note) VALUES ($1,$2)"
const checkIdExists =  "SELECT s FROM print_options s WHERE s.print_id = $1";
const removePrintOption = "DELETE FROM print_options WHERE print_id = $1";
const updatePrintOption = "UPDATE print_options SET print_option = $2, note = $3 WHERE print_id = $1"
const popPrintOptions = "SELECT print_id, print_option FROM print_options"

module.exports =  {
    getPrintOptions,
    checkOptionExists,
    addPrintOption,
    removePrintOption,
    checkIdExists,
    updatePrintOption,
    popPrintOptions
}