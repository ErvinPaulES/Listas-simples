export default class Registro{
    constructor(){
        this._inicio=null;
    }
    get inicio(){
        return this._inicio;
      }
  
      _encontrarArticulo(nombre, codigo){
          let result = -1;
          let index=1;
          let articulo = this._inicio;
          while(articulo!==null){
            if(articulo.nombre === nombre||articulo.codigo === codigo){
              result=index;
            }
            index++;
            articulo=articulo.siguiente;
          }
          return result;
        }
  
      agregarArticulo(articulo, posicion) {
          console.log(this);
          
          if(this._inicio===null){
            this._inicio=articulo;
          }else{
            if(this._encontrarArticulo(articulo.nombre, articulo.codigo) >= 0){
              console.log(this._encontrarArticulo(articulo.nombre, articulo.codigo));
              
              return false;
            }else{
              if(posicion>1){
                let asignar = this._inicio;
                for(let i =1; i<posicion-1;i++){
                  asignar=asignar.siguiente;
                }
                articulo.siguiente=asignar.siguiente;
                asignar.siguiente=articulo;
              }else if(posicion==1){
                articulo.siguiente=this._inicio;
                this._inicio=articulo;
              }else{
                this._agregarnuevo(articulo, this._inicio);
              }
            }
          }
          return true;  
                
      }
      _agregarnuevo(nuevo, ultimo){
        if(ultimo.siguiente===null){
          ultimo.siguiente=nuevo;
        }else{
          this._agregarnuevo(nuevo, ultimo.siguiente)
        }
      }
  
      _borrarArticulo(row, articulo){
          let buscador = this._inicio;
          if(articulo.codigo===buscador.codigo){
            this._inicio=this._inicio.siguiente;
            console.log(buscador);
            console.log(articulo);
          }else{
          while(buscador !== null && buscador.siguiente!==null){
            console.log(buscador.siguiente);
            console.log(articulo);
            if(buscador.siguiente.codigo===articulo.codigo){
              console.log('Code1: ' + buscador.siguiente + ' Code2: ' + articulo);
              
              buscador.siguiente=buscador.siguiente.siguiente;
            }
            buscador = buscador.siguiente;
          }
        }
          row.remove();
      }
}