import { agregarTODO, marcarTODO, reporteTODOs, TODO} from "./ejercicio2"
const listaTODOs: TODO[] = []
console.log(listaTODOs);
agregarTODO(listaTODOs, 25, "Planchar la ropa")
console.log(listaTODOs);
marcarTODO(listaTODOs, 25)
console.log(listaTODOs);
reporteTODOs(listaTODOs)

