module.exports = {
default: {
    require: [
    "step-definitions/**/*.js"
    ],
    paths: [
    "features/**/*.feature"
    ],
    format: [
    "progress",
    "html:reports/cucumber-report.html"
    ],
    publishQuiet: true
}
};