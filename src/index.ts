import app from "./app.js";
import { connectToDatabase } from "./db/Connection.js";

//connections and listeners
const PORT = process.env.PORT || 5002;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server Open & Connected To Database 🤟")
    );
  })
  .catch((err) => console.log(err));