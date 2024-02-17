import express from "express";
import expenseRouter from "./routes/expense.js";

import cors from "cors";

const PORT = process.env.PORT || 1234;

const app = express();


app.use(cors());

app.use(express.json());

app.use("/api/expenses", expenseRouter);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));