import { useNavigate } from "react-router-dom";

export default function NewAlumn() {
  const navigate = useNavigate();
    return (
      <>
        <div class="page-student">
            <div class="head-nav">
                <h2>Alumnos</h2>
                <button
            onClick={() => navigate("/alumnos")}
            className="button-nav-back"
          >
            Atrás
          </button>
            </div>
            <form onSubmit={(event) => addInfo(event)}>
                <div class="form-add">                   
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="name" name="name" required/> 
                </div>
                <div class="form-add">
                    <label for="apellido">Apellido:</label>
                    <input type="text" id="lastName" name="lastName" required/>       
                </div>
                <div class="form-add">
                    <button class="button-nav-add" type="submit">Agregar</button>
                </div>                            
            </form>
        </div>           

      </>
    );
  }