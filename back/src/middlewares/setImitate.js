function isImitate (req, res, next) {
    const arr = [200, 400, 500, 200, 200];
    const randomIndex = Math.floor(Math.random() * arr.length);
    if(arr[randomIndex] === 200){
        return next();
    } 
    if(arr[randomIndex] === 400){
        return res.status(400).end();
    }
    if(arr[randomIndex] === 500){
        return res.status(500).end();
    }
  };

  module.exports = isImitate;