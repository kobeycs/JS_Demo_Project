import 'core-js/shim'
import 'babel-polyfill'

export default class person{
    constructor(name){
        this.name=name;
    }
    sayhello()
    {
        return 'hello ${this.name}!';
    }

    sayhelloThreeTimes(){
        let hello=this.sayhello();
        return '${hello}'.repeat(3);
    }
}