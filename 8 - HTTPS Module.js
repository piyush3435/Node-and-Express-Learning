const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`
            <h1>Home Page</h1>
            <a href="/">Home Page</a>
            <a href="/about">About Page</a>
            <a href="/error">Error Page</a>
            <p>Description : This is Home Page</p>
            `);
    }
    else if (req.url === '/about') {
        res.end(`
            <h1>About Page</h1>
            <a href="/">Home Page</a>
            <a href="/about">About Page</a>
            <a href="/error">Error Page</a>
            <p>Description : This is About Page</p>`
        );
    }
    else {
        res.end(`
            <h1>Opps!</h1>
            <p>Error 404 : Page not Found</p>
            <a href="/">Home Page</a>`);
    }


});

server.listen(5000, () => {
    console.log('Server is running on 5000 port');

});