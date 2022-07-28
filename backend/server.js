const app = require("./app");
const connectDatabase = require("./config/database");




if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}




const server = app.listen(process.env.PORT, () => {
    console.log(`Listening  on http://localhost:${process.env.PORT}`);
});