const Express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nomina",
});

const app = Express();
app.use(Express.json());
app.use(cors());


/*################################################################################################################*/
/*                                                     LISTAR                                                     */


/*EMPLEADOS*/
app.get("/empleados", (req, res) => {
  const sql =
    "SELECT empleado.idempleado, empleado.nombre_empleado, empleado.apellido, departamento.nombre_depar, puesto.nombre_pues, empresa.nombre, sueldos.sueldo FROM empleado INNER JOIN departamento ON departamento.iddepartamento = empleado.departamento INNER JOIN puesto ON puesto.idpuesto = empleado.puesto_emp  INNER JOIN empresa ON empresa.idempresa = empleado.empresa_emp INNER JOIN sueldos ON sueldos.idsueldos = empleado.sueldos_emp ";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Mensaje: "error iniciando" });
    return res.json(result);
  });
});


/*ASISTENCIA*/ 
app.get("/asistencia", (req, res) => {
  const sql =
    "SELECT asistencia.idasistencia, asistencia.entrada, asistencia.salida, empleado.nombre_empleado, departamento.nombre_depar, empresa.nombre FROM asistencia INNER JOIN departamento ON departamento.iddepartamento = asistencia.empleado_depa INNER JOIN empresa ON empresa.idempresa = asistencia.empleado_emp INNER JOIN empleado ON empleado.idempleado = asistencia.empleado_is";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Mensaje: "error iniciando" });
    return res.json(result);
  });
});


/*CARGOS*/
app.get("/cargos", (req, res) => {
  const sql =
    "SELECT * FROM puesto";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Mensaje: "error iniciando" });
    return res.json(result);
  });
});


/*EMPRESA*/
app.get("/empresa", (req, res) => {
  const sql =
    "SELECT * FROM empresa";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Mensaje: "error iniciando" });
    return res.json(result);
  });
});


/*HORARIO*/
app.get("/horario", (req, res) => {
  const sql =
    "SELECT * FROM horario";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Mensaje: "error iniciando" });
    return res.json(result);
  });
});
/*################################################################################################################*/



app.post("/usuarios/", (req, res) => {
  const { nombre, apellido, departamento, puesto, empresa, sueldo } =
    req.body;
  const sql = `INSERT INTO empleado (nombre_empleado, apellido, departamento, puesto_emp, empresa_emp, sueldos_emp, periodos_pago, horario_emp) VALUES ('${nombre}', '${apellido}', '${departamento}', '${puesto}', '${empresa}', '${sueldo}', '${periodo}', '${horario}')`;
  db.query(sql, (err, result) => {
    if (err) return res.json({ Mensaje: "error creando empleado" });
    return res.json({ Mensaje: "empleado creado" });
  });
});

app.get("/usuarios/:idempleado", (req, res) => {
  const id = req.params.idempleado;
  const sql =
    "SELECT empleado.idempleado, empleado.nombre_empleado, empleado.apellido, departamento.nombre_depar, puesto.nombre_pues, empresa.nombre, sueldos.sueldo FROM empleado INNER JOIN departamento ON departamento.iddepartamento = empleado.departamento INNER JOIN puesto ON puesto.idpuesto = empleado.puesto_emp  INNER JOIN empresa ON empresa.idempresa = empleado.empresa_emp INNER JOIN sueldos ON sueldos.idsueldos = empleado.sueldos_emp WHERE idempleado = ? ";
  db.query(sql, id, (err, result) => {
    if (err) return res.json({ Mensaje: "error creando empleado" });
    return res.json({ body: result[0] });
  });
});

app.put("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  const sql =
  "select * from empleado where idempleado = ?";
    db.query(sql, id, (err, result) => {
    if (err) return res.json({ Mensaje: "error creando empleado" });
    return res.json({ body: result[0] });
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
