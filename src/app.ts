import express from 'express';
import cepRoute from '@routes/cep.route';
import baseRoute from '@routes/base.route';

class App {
    public express: express.Application;
    
    constructor(){
        this.express = express();
        this.routeBase();
        this.routeCep();
    }

    private routeBase(){
        this.express.use(baseRoute)
    }

    private routeCep(){
        this.express.use(cepRoute);
    }
}

export default new App().express;
