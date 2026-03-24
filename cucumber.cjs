module.exports = {
default: {
    require: [
    "step-definitions/**/*.js"
    ],
    paths: [],
    format: [
    "progress",
    "html:reports/cucumber-report.html"
    ],
    publishQuiet: true
}
};