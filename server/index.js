import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/",(_,res)=>{
    res.status(200).json({sucess: true,message: "Welcome to FlexMart API", });
});

(()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`✅ Server is running at http://localhost:${PORT}`.green.underline.bold);
        })

    }catch(error){
        console.log(`❌ Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
})();

