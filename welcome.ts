export default `
<h1>Desafio 3 - api-productos - conectado a mongoDb con Mongoose</h1>
<h2>Elias Rodriguez</h2>
<h3>Iniciar el servidor</h3>
Para iniciar el server y probar la api seguimos los siguientes pasos en la terminal
<ul>
  <li>npm i</li>
  <li>npm run dev-server</li>
</ul>

El puerto por defecto es 3001
<h3>Descripcion de la api</h3>
<h4>La api cuenta con con 4 endpints, get, post, put, detele</h4>
<ul>
  <li>get -> obtener todos los productos</li>
  <li>post -> agregar un producto(datos por body)</li>
  <li>put -> editar un producto(indicando id por URL)(datos por body)</li>
  <li>delete -> eliminar un producto(indicando id por URL)</li>
</ul>

<h3>URL</h3>
<ul>
  <li>get -> url:port/productos -> ej. localhost:3000/productos</li>
  <li>post -> url:port/productos  -> ej. localhost:3000/productos (formato del body acontinuacion)</li>
  <li>put -> url:port/productos/:id  -> ej. localhost:3000/productos/:id (ponemos el id del producto a editar)(formato del body acontinuacion)</li>
  <li>delete -> url:port/productos/:id  -> ej. localhost:3000/productos/:id (ponemos el id del producto a eliminar)</li>
</ul>

<h3>Formato body</h3>
<h4>El body tiene 3 atributos(nombre, precio, stock)</h6>
<h4>Para agregar un producto(post) el parametro nombre es oblicatorio</h4>
<h4>Para editar, en la url debe indicar el id del producto, y en el body solo el atributo a modificar</h4>

{
username: "",
email: "",
password: ""
}
`;
