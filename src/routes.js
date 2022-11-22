import * as controllers from './controllers.js'


async function BookRoutes(server, options) {

    server.route({
        method: "POST",
        url: "/books",
        handler: controllers.AddBookController
    })






}