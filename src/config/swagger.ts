export default {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Event Explorer with Swagger",
            version: "1.0.0",
            description: "This API allows you to read some events. It's made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
        servers: [
            {
                url: "http://localhost:8080",
            },
        ],
    },
    apis: ["./dist/routes/event-route.js"],
};
