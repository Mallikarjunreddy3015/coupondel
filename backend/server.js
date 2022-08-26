const app = require("./app");
//const connectDatabase = require("./config/database");



app.listen(process.env.PORT, () => {
    console.log(`Listening  on http://localhost:${process.env.PORT}`);
});