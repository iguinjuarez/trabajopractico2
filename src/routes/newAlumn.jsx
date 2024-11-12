import { useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';

export default function NewAlumn() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    alert(`Alumno agregado`);
    navigate('/alumnos');
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
            <label for="name">Nombre:</label>
            <input {...register("name", { required: "El nombre es obligatorio",
              maxLength: { 
                value: 100, 
                message: "El nombre no puede tener más de 100 caracteres" 
              } 
             })} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div class="form-add">
            <label for="lastname">Apellido:</label>
            <input {...register("lastname", { required: "El apellido es obligatorio",
              maxLength: { 
                value: 100, 
                message: "El nombre no puede tener más de 100 caracteres" 
              } 
             })} />
            {errors.lastname && <p>{errors.lastname.message}</p>}
          </div>
          <div class="form-add">
            <label for="dni">DNI:</label>
            <input {...register("dni", {
              required: "El DNI es obligatorio",
              pattern: {
                value: /^[0-9]{1,10}$/,
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
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
