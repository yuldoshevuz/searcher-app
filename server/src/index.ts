import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const data = [
    { email: "jim@gmail.com", number: "221122" },
    { email: "jam@gmail.com", number: "830347" },
    { email: "john@gmail.com", number: "221122" },
    { email: "jams@gmail.com", number: "349425" },
    { email: "jams@gmail.com", number: "141424" },
    { email: "jill@gmail.com", number: "822287" },
    { email: "jill@gmail.com", number: "822286" }
];

let currentRequest: NodeJS.Timeout | null = null;

app.post("/search", (req, res) => {
    const { email, number } = req.body;

    if (currentRequest) {
        clearTimeout(currentRequest);
    }

    currentRequest = setTimeout(() => {
        const results = data.filter(item =>
            item.email === email && (number ? item.number === number : true)
        );
        res.json(results);
    }, 5000);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
