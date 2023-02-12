export default function (plop) {
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [ {
            type: 'list',
            name: 'mode',
            message: 'what do you want to create',
            choices: [{
                name: "Api",
                Value: "API"
            }]
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter Name for your Api'
        },
        {
            type: 'input',
            name: 'getLink',
            message: 'Enter get Link for your Api'
        },
        {
            type: 'input',
            name: 'postLink',
            message: 'Enter post Link for your Api'
        },
        {
            type: 'input',
            name: 'popLink',
            message: 'Enter pop Link for your Api'
        }
       
     ],
        actions: [{
            type: 'add',
            path: 'src/{{name}}/controller.js',
            templateFile: 'Templates/controller.hbs'
        },{
            type: 'add',
            path: 'src/{{name}}/queries.js',
            templateFile: 'Templates/queries.hbs'
        },{
            type: 'add',
            path: 'src/{{name}}/routes.js',
            templateFile: 'Templates/routes.hbs'
        }
    ]
    });
};