export default class View{
    constructor(table, registro){
        this._table = table;
        this._registro = registro;

    }

    agregarArticulo(articulo, posicion){
        let r = this._registro.agregarArticulo(articulo, posicion);
        console.log(r);
        
        if(r === true){
            this._show();
        }
    }

    _añadirBotonBorrar(row, articulo){
        let btnDelete = document.createElement('input');
        btnDelete.type= 'button';
        btnDelete.value='Borrar';
        btnDelete.className='btn btn-danger';
        btnDelete.addEventListener('click', () => {
            this._registro._borrarArticulo(row, articulo);
        });
        row.cells[5].innerHTML="";
        row.cells[5].appendChild(btnDelete);
    }

    _show(){
        this._table.innerHTML='';
        let articulo = this._registro.inicio;
        while(articulo!==null){
            let row = this._table.insertRow(-1);

            let cellCodigo = row.insertCell(0);
            let cellNombre = row.insertCell(1);
            let cellPrecio = row.insertCell(2);
            let cellCantidad = row.insertCell(3);
            let cellDescripcion = row.insertCell(4);
            row.insertCell(5);

            cellCodigo.innerHTML = articulo.codigo
            cellNombre.innerHTML = articulo.nombre;
            cellPrecio.innerHTML = articulo.precio;
            cellCantidad.innerHTML = articulo.cantidad;
            cellDescripcion.innerHTML = articulo.descripcion;
            this._añadirBotonBorrar(row, articulo);
            articulo=articulo.siguiente;
        }           
   }

   _MostrarReporte(reporte){
       reporte.innerHTML = "<h3>Reporte</h3>";
       let articulo = this._registro.inicio;
        while(articulo!==null){
            reporte.innerHTML += articulo.toString()+'<br>';
            articulo=articulo.siguiente;
        }
   }
   _MostrarReporteInverso(reporte){
    reporte.innerHTML = "<h3>Reporte</h3>";
    let ultimo = null;
    let articulo = this._registro.inicio;
    while(ultimo!==articulo){
        console.log(ultimo);
        console.log(articulo);
        
        
        while(articulo.siguiente!==ultimo){
            articulo=articulo.siguiente;
        }
        reporte.innerHTML += articulo.toString()+'<br>';
        ultimo=articulo;
        articulo = this._registro.inicio;
    }
   }

   _buscar(buscador) {
        this._table.innerHTML='';
        let row = this._table.insertRow(-1);
        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellDescripcion = row.insertCell(4);
        row.insertCell(5);
        let articulo=this._registro.inicio;
        console.log(articulo);
        
        while((articulo.siguiente!==null && (articulo.codigo!==buscador||articulo.nombre!==buscador))){
            articulo=articulo.siguiente;
        }
        if(articulo !== null){
            cellCodigo.innerHTML = articulo.codigo
            cellNombre.innerHTML =articulo.nombre;
            cellPrecio.innerHTML = articulo.precio;
            cellCantidad.innerHTML = articulo.cantidad;
            cellDescripcion.innerHTML = articulo.descripcion;
            this._añadirBotonBorrar(row, articulo);
        }
        else{
            this._show();
        }
    }

}