import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Tracker API",
            version: "0.0.1",
            description: "API for the Tracker Web App",
        },
        components: {
            schemas: {
                Task: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        userid: { type: 'integer' },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        completed: { type: 'string' },
                    },
                },
            },
        },
        servers: [
            {
                url: "http://localhost:81",
            },
        ],
    },
    apis: [path.resolve(__dirname, "../routers/taskRouter.js")],
};

const spec = swaggerJsdoc(options);

export default {
    spec,
    serve: (app) => app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec))
};

