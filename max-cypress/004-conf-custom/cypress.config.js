import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on("task", {
      //   seedDatabase(filename) {
      //     // Run your NodeJs code
      //     // e.g., edit a file here
      //     // this code will run outside of browser bit will eb triggered in our test
      //     return filename;
      //   },
      // });
    },
  },
});
