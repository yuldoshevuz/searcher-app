"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const data = [
    { email: "jim@gmail.com", number: "221122" },
    { email: "jam@gmail.com", number: "830347" },
    { email: "john@gmail.com", number: "221122" },
    { email: "jams@gmail.com", number: "349425" },
    { email: "jams@gmail.com", number: "141424" },
    { email: "jill@gmail.com", number: "822287" },
    { email: "jill@gmail.com", number: "822286" }
];
let currentRequest = null;
app.post("/search", (req, res) => {
    const { email, number } = req.body;
    if (currentRequest) {
        clearTimeout(currentRequest);
    }
    currentRequest = setTimeout(() => {
        const results = data.filter(item => item.email === email && (number ? item.number === number : true));
        res.json(results);
    }, 5000);
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
