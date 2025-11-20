import express from "express";
import cors from "cors";

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//test route
/*app.get("/", (req, res) => {
  res.send("server is running with ES module");
});*/

app.get("/api/jokes",(req, res)=>{
  const jokes = [
  {
    id: 1,
    title: "Dark Mode Joke",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 2,
    title: "Node + Express",
    content: "Why was the JavaScript developer sad? Because he didn't Node how to Express himself."
  },
  {
    id: 3,
    title: "Computer Doctor",
    content: "Why did the computer go to the doctor? It had a virus!"
  },
  {
    id: 4,
    title: "Frozen Laptop",
    content: "I told my laptop a joke… it didn’t laugh, it just froze."
  },
  {
    id: 5,
    title: "Function Breakup",
    content: "Why did the function break up with the variable? It needed more space."
  }
];
res.send(jokes);


})

const port = process.env.PORT || 3000;
//start server
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
