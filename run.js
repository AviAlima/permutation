const { PremoGen } = require('./permo');
const getPermo = () => (new PremoGen(4)).getPermo();
console.log(getPermo());
