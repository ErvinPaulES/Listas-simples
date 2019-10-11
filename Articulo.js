export default class Articulo{
    constructor(codigo, nombre, precio, cantidad, descripcion){
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
        this._descripcion = descripcion;
        this._siguiente = null;
    }
    get nombre(){
        return this._nombre;
    }
    get codigo(){
        return this._codigo;
    }
    get precio(){
        return this._precio;
    }
    get cantidad(){
        return this._cantidad;
    }
    get descripcion(){
        return this._descripcion;
    }
    get siguiente(){
        return this._siguiente;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    set codigo(codigo){
        this._codigo = codigo;
    }
    set precio(precio){
        this._precio = precio;
    }
    set cantidad(cantidad){
        this._cantidad = cantidad;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }
    set siguiente(siguiente){
        this._siguiente = siguiente;
    }

    toString(){
        let cadena = this._nombre + " tiene el codigo: " + this._codigo  + " vale: " + this._precio + " " +"hay en existencia " + this._cantidad + " " +  this._descripcion;
        
        return cadena;
    }
}