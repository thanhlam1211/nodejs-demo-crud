import swaggerUI from 'swagger-ui-express';
import { Express, Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Rest API docs",
            version: "1.0.0",
            server: [{
                url: "http://localhost:3000"
            }],
        },
        // components: {
        //     securitySchemas: {
        //         bearerAuth: {
        //             type: "http",
        //             scheme: "bearer",
        //             bearerFormat: "JWT"
        //         },
        //     },
        // },
        // security: [
        //     {
        //         bearerAuth: [],
        //     },
        // ],
    },
    apis: ["../routes/authentication.ts"],
}

const swaggerSpec = swaggerJSDoc(options)

function swaggerDocs(app: Express, port: number) {
    //swager page
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

    //docs im json format
    app.get('docs.json', (req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/josn")
        res.send(swaggerSpec)
    })
    console.log(`Docs available at http://localhost:${port}/docs`)
}

export default swaggerDocs;