import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((request: Request, response: Response, next: NextFunction) => {
    console.log(`Path: ${request.path} called with the method: ${request.method}`);
    next();
});

app.get("/", async (request: Request, response: Response) => {
    response.status(200).send("Hello World Again.");
});

app.post("/", (request: Request, response: Response) => {
    console.log(request.body());
    response.status(200);
});

app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
