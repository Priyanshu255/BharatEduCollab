const express = require("express");
const connectdb = require("./config/dbConnection");
const cors = require('cors');

connectdb();
const app = express();
app.use(cors());

const port = 3001;

app.use(express.json());
app.use("/api/projects", require("./routes/projects"));
app.use("/api/mentorProjects", require("./routes/mentorProjects"));
app.use("/api/universities", require("./routes/universities"));

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})
