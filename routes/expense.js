import express from "express";
import getDbConnection from "../connection.js";

const expenseRouter = express.Router();



expenseRouter.get("/", async (request, response) => {
    const connection = await getDbConnection();
  
    const collection = connection.collection("expenses");
    
    const results = await collection.find({}).toArray();
  
    return response.send(results);

});

expenseRouter.post("/", async (request, response) => {
      const body = request.body;
    
      const newExpense = {
        amount: body.amount,
        description: body.description,
        date: body.date,
      };
    
      const connection = await getDbConnection();
    
      const collection = connection.collection('expenses');
    
      await collection.insertOne(newExpense);
    
      return response.status(201).send();
    });
    
export default expenseRouter;