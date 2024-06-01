const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "./reports/json/",
    reportPath: "./results/html/",
    metadata: {
        browser: {
            name: "chrome",
            version: "60",
        },
        device: "macbook pro, M1 2020",
        platform: {
            name: "ubuntu",
            version: "16.04",
        },
    },
    customData: {
        title: "Run info",
        data: [
            { label: "Project", value: "Custom project" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "B11221.34321" },
            { label: "Execution Start Time", value: "May 8th 2024, 09:51 AM EST" },
            { label: "Execution End Time", value: "May 8th 2024, 09:51 AM EST" },
        ],
    },
})
