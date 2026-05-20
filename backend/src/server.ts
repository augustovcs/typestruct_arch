import "dotenv/config";
import { app } from "./app.js"

app.listen(3555, () => {
    console.log("Server running in PORT: 3555")
})