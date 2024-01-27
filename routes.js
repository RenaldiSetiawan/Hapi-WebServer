const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*', // oute dapat diakses menggunakan seluruh method yang ada pada HTTP
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: '*',
        path: '/{any*}', // {any*} berfungsi untuk menangani permintaan masuk pada path yang belum Anda tentukan
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
    // Path Parameter start
    // curl -X GET http://localhost:5000/hello/boy
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            return `Hello, ${name}!`;
        }
    },
    // Path Parameter end

    // Query Parameter start
    // curl -X GET http://localhost:5000/hello/boy?lang=id
    // curl -X GET http://localhost:5000/hello/boy
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            const { lang } = request.query; // path kueri lang dengan nilai id, maka server akan menanggapi dengan pesan “Hai, {name}!”

            if(lang === 'id') {
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}!`;
        },
    },
    // Query Parameter end
];

module.exports = routes;