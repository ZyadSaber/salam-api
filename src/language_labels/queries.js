const getLabels = "SELECT en_name, ar_name FROM language_codes WHERE lang_code = $1";

module.exports = {
    getLabels,
}