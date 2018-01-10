var mainroutes = require('../controllers/mainControl.js');

module.exports = function(app){ 
  
    app.all("*",function(req,res){
        res.sendFile('index.html', { root: './client/dist' });
    })
}
