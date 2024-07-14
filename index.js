"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const asnwer = await inquirer_1.default.prompt([
    { message: " Enter first numberr", type: "number", name: "first; number" },
    { message: "Enter second number", type: "number", name: "second number" },
    message, "select one of the operators to perform action",
    type, "list",
    name, "operator",
    choisese, ["Addition", "subtraction", "Multiplacation", "Division"],
]);
console.log(asnwer);
