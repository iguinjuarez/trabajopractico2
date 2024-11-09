import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

export default function NewAlumn() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    alert(`Formulario enviado: ${JSON.stringify(data)}`);
};

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-add">                   
                    <label for="nombre">Nombre:</label>
                    <input {...register("nombre", { required: "El nombre es obligatorio" })} />
        {errors.nombre && <p>{errors.nombre.message}</p>}
                </div>
                <div class="form-add">
                    <label for="apellido">Apellido:</label>
                    <input {...register("apellido", { required: "El apellido es obligatorio" })} />
        {errors.apellido && <p>{errors.apellido.message}</p>}      
                </div>
                <div class="form-add">
                    <label for="dni">DNI:</label>
                    <input {...register("dni", { 
                    required: "El DNI es obligatorio", 
                    pattern: { 
                        value:  /^[0-9]{1,10}$/,
                        message: "DNI invalido"
                    }
                })} />
        {errors.dni && <p>{errors.dni.message}</p>}      
                </div>
                <div class="form-add">
                    <label for="mail">E-mail:</label>
                    <input {...register("mail", { 
                    required: "El E-mail es obligatorio", 
                    pattern: { 
                        value:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "E-mail inválido"
                    }
                })} />
        {errors.mail && <p>{errors.mail.message}</p>}      
                </div>
                <div class="form-add">
                    <button class="button-nav-add" type="submit">Agregar</button>
                </div>                            
            </form>
        </div>           

      </>
    );
  }
