"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const Route_1 = require("../abstract/Route");
const UserController_1 = require("../controller/UserController");
class UserRoute extends Route_1.Route {
    constructor() {
        super();
        this.Contorller = new UserController_1.UserController();
        this.url = '/api/v1/user/';
        this.setRoutes();
    }
    setRoutes() {
        this.router.get(`${this.url}findAll`, (req, res) => {
            this.Contorller.findAll(req, res);
        });
        /**
         * 新增學生
         * request body {
         *  userName: string,
         *  name: string",
         *  department: string,
         *  grade: string,
         *  class: string,
         *  Email: string
         * }
         * @returns resp<Student>
         */
        this.router.post(`${this.url}insertOne`, (req, res) => {
            this.Contorller.insertOne(req, res);
        });
    }
}
exports.UserRoute = UserRoute;
