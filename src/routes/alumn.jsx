import { Form } from "react-router-dom";

export default function Alumn() {
        const contact = {
          search: "Buscar por apellido",
        };
    return (
      <>
        
        <div class="page-student">
            <div class="head-nav">
                <h2>Alumnos</h2>
                <a href={`alumnos/agregaralumno`} class="button-nav-add" type="button" onclick="addStudent()">Agregar</a> 
            </div>
            <div class="body-student">
                <input class="input-full" type="text" id="searchInput" placeholder="Buscar por apellido..."/>
                <button class="button-search" id="searchButton" type="button" onclick="filterStudentsByLastName()">Buscar</button>
            </div>  
            <div class="table-student">
                <table id="tableStudent">
                    <thead>
                        <tr>
                            <th>Legajo</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <div class="row-items">
                <label for="rowsPerPage">Ítems por página:</label>
                <select id="rowsPerPage">
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                </select>
                <div class="pagination" id="pagination"></div>
            </div>
        </div>           
      </>
    );
  }