import express from 'express';
import cepRoute from '@routes/cep.route';
import baseRoute from '@routes/base.route';
import cepNoRoute from '@routes/cep-no.route';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.jsonBody();
        this.routeBase();
        this.routeCep();
        this.routeInsertCep();

        //Sem rota
        this.noRoute();
    }

    // Trata URL base
    private routeBase() {
        this.express.use(baseRoute)
    }

    private routeCep() {
        this.express.use(cepRoute);
    }

    private routeInsertCep() {
        this.express.use(cepRoute);
    }

    // Trata  rota não encontrada
    private noRoute() {
        this.express.use(cepNoRoute);
    }

    //JSON Body parser
    private jsonBody() {
        this.express.use(
            express.urlencoded({
                extended: true
            })
        );

        this.express.use(express.json());
    }

}

export default new App().express;
