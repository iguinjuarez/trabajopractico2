import { Outlet, NavLink } from "react-router-dom";
export default function Root() {
    return (
      <>
        <div class="sidebar-layout">
        <div class="sidebar">
            <h3>Trabajo Práctico 1</h3>
            <nav>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Página Principal
            </NavLink>
            <NavLink 
              to="alumnos" 
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Alumnos
            </NavLink>
            </nav>     
        </div>
        
        </div>
        <div id="detail">
        <Outlet />
      </div>
      </>
    );
  }
  