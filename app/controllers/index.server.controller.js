exports.render = function(req, res) { 
    const MEANStack = [
            { component: 'MongoDB', definition: 'MongoDB serves as an open-source database management system, storing data in adaptable and scalable JSON-like documents.' },
            { component: 'Express', definition: 'Express, is a web application framework designed for Node.js, streamlines the process of developing web and mobile applications by offering a diverse set of features.' },
            { component: 'Angular', definition: 'Angular, is a widely-used TypeScript-based open-source framework, is dedicated to constructing client-side web applications. It facilitates the effortless creation of dynamic and responsive user interfaces.' },
            { component: 'Node.js', definition: 'Node.js, is an open-source backend JavaScript runtime environment, empowers developers to execute JavaScript code beyond the confines of a web browser. It is cross-platform and provides a myriad of features for server-side development.' }  
    ];
    res.render('index', { title: 'The Mean Stack', name: 'My Name: Jasmine Harding', MEANStack: MEANStack }); 
}