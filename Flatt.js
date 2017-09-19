/*
 *  Flatt - tool for flatten and unlutten data in the objects
 *
 *  Project url: https://github.com/xv1t/flatt
 */
 
Flatt = {
    separator: '.',
    set: function(obj, path, value){
        keys = path.split(Flatt.separator);
        string = 'obj[ keys[0] ]';
        
        for (i=1; i < keys.length; i++){
            if (eval("typeof " + string ) !== 'object'){
                eval(string + " = {}");
            }
            string = string + '[ keys[' + i + '] ]';
        }
        
        eval(string + '=value');
        return obj;
    },
    sets: function(_obj, values){
        for (__path in values){
            Flatt.set(_obj, __path, values[__path])
        }
        return _obj;
    },
    get: function(obj, path){
        return Flatt.is(obj)[path];
    },
    is: function(object){
        return Object.assign({}, ...function _flatten(child, path = []) {
            return [].concat(...Object.keys(child).map(key => typeof child[key] === 'object'
                ? _flatten(child[key], path.concat([key]))
                : ({ [path.concat([key]).join(Flatt.separator)] : child[key] })
            ));
        }(object));
    }
}; 
