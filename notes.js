/*
    will build an MVC app using vanilla JS

    This application can be built using a single JavaScript file which modifies the DOM
    of the document and performs all operations, but this is a strongly coupled code and
    is not recommended

    MVC Brief:

        Models — Manage the data of an application. The models will be anemic
        (they will lack functionalities) since they will be referred to the services.

        Views — A visual representation of the models

        Controllers — Links between services and views



    The index.html file will act as a canvas on which the entire application will be
    dynamically built using the root element. In addition, this file will act as a
    loader of all the files since they will be linked in the html file itself.


    Brief architecture structure:

        user.model.js — The attributes (the model) of a user.

        user.controller.js — The one in charge of joining the service and the view.

        user.service.js — Manage all operations on users

        user.views.js — Responsible for refreshing and changing the display screen.







        src = https://dev.to/carlillo/understanding-mvc-services-for-frontend-vanillajs-335h




    ####    MODELS (anemic)

            The first class built in this example is the application model, user.model.js,
            which consists of the class attributes, and a private method that is generating
            random IDs (these id's could come from a database in the server).

            The models will have the following fields:

                id. Unique value

                name. The name of the users

                age. The age of the users

                complete. Boolean that lets you know whether we can cross the user off the list




*/