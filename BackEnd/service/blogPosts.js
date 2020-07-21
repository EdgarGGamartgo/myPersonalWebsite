var request = require('request');

var blogPosts = {
   getAll: (req, res, next) => {
    
         console.log('Success 2')
         res.json({
             postName: 'How to Use Gatsby Starters',
             data: 'July 7, 2020 Saturday',
             content: [
                 {
                     paragraph: 'Starting first paragraph content ...',
                     image: 'imageTest.jpg'
                 },
                 {
                    paragraph: 'Starting second paragraph content ...',
                    image: 'secondImageTest.jpg'
                },
                {
                    paragraph: 'Starting third paragraph content ...',
                    image: 'thirdImageTest.jpg'
                }
             ],
             author: 'Edgar Gabriel Martinez Gonzalez',
             mainImage: 'imageTest.jpg',


         });
    
    /*   request(zipCodeURL + apiKey 
               + '/distance.json/' + req.params.zipcode1 + '/' 
               + req.params.zipcode2 + '/mile',
        (error, response, body) => {
           if (!error && respondse.statusCode == 200) {
               response = JSON.parse(body);
               res.send(response);
           } else {
               console.log(response.statusCode + response.body);
               res.send({distance: -1});
           }
       }); */

   }
};

module.exports = blogPosts;