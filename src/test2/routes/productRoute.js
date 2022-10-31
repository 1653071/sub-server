"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// only memory, dont connect mongodb
// import * as productControllers from '../controllers/product-mongo.controllers';   // database mongodb
let router = express_1.default.Router();
// Send message for default URL
router.get('/', (_req, res) => res.send('Welcome to default response of Product API'));
router.get('/list', (req, res) => {
    res.status(200).send("Product list real");
});
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvcm91dGVzL3Byb2R1Y3RSb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUN6QixvQ0FBb0M7QUFDekMsd0dBQXdHO0FBRXhHLElBQUksTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFOUIsK0JBQStCO0FBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUM7QUFFdkYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFFLEVBQUU7SUFDNUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUUsQ0FBQTtBQUM5QyxDQUFDLENBQUMsQ0FBQztBQUdILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIn0=