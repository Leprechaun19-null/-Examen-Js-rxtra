document.addEventListener("DOMContentLoaded", main());
function main() {
    const salas =(JSON.parse("salas", [
    { "id": "A100", "nombre": "Aula A100",          "capacidad": 30,  "tipo": "Informática"   },
    { "id": "A118", "nombre": "Aula A118",          "capacidad": 28,  "tipo": "Informática"   },
    { "id": "B201", "nombre": "Aula B201",          "capacidad": 35,  "tipo": "General"        },
    { "id": "B205", "nombre": "Aula B205",          "capacidad": 20,  "tipo": "Laboratorio"   },
    { "id": "C301", "nombre": "Sala de Actos C301", "capacidad": 100, "tipo": "Conferencias"  },
  ]))
  for(id in salas ) {
    document.createElement("div");
    document.createElement("div");
    document.createElement("span");
    document.createElement("div");
    document.createElement("div");

  }
}