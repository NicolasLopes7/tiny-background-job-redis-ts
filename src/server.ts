import { config } from "dotenv";
import express, { Router } from "express";
import cors from "cors";
import { report } from "./http/report";

config();

const app = express();

app.use(express.json());
app.use(cors());

const router = Router();

router.get("/report", report);

app.use(router);

app
	.listen(process.env.PORT || 4000)
	.once("listening", () => console.log("started!"));
