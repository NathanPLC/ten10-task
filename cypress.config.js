const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: "cypress/reports",
        overwrite: true,
        html: true,
        json: true,
        embeddedScreenshots: true,
        inlineAssets: true,
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});
