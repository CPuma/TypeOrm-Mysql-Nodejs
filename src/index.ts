import app from "./app";
import { createConnection } from "typeorm";

// conectamos a la DB
createConnection();

app.listen(3000, () => {
    console.log("Server on Port ", 3000);
});
