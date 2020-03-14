import app from "./app";

import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection()
    .then(connection =>
        console.log(
            "Connecion con DDBB ",
            connection.options.database,'... EXISTOSA'
        )
    )
    .catch(error => console.log(error));
app.listen(3000, () => {
    console.log("Server on Port ", 3000);
});
