import express from 'express';
import cepRoute from '@routes/cep.route';
import baseRoute from '@routes/base.route';
import cepNoRoute from '@routes/cep-no.route';

class App {
    public readonly express: express.Application;

    constructor() {
        this.express = express();
        this.configureMiddlewares();
        this.configureRoutes();
        this.configureNotFoundHandler();
    }

    private configureMiddlewares(): void {
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(express.json());
    }

    private configureRoutes(): void {
        this.express.use(baseRoute);
        this.express.use(cepRoute);
    }

    private configureNotFoundHandler(): void {
        this.express.use(cepNoRoute);
    }
}

export default new App().express;
