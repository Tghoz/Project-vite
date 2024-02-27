import ModalRegisterClient from "../components/ModalRegisterClient";
import ModalUser from "../components/ModalUser";
import "../css/Pages.css";
import { VscArrowRight } from "react-icons/vsc";

import { HiUserGroup } from "react-icons/hi";
import { GrUserExpert } from "react-icons/gr";

function Clients() {
  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Clientes</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Dashboard </a>
            </li>
            <li className="arrow-icon">
              <VscArrowRight />
            </li>
            <li>
              <a className="active" href="#">
                Clientes
              </a>
            </li>
          </ul>
        </div>

        <ModalRegisterClient />
      </div>

      <ul className="box-info">
        <li>
          <i className="bx">
            <GrUserExpert />
          </i>
          <span className="text">
            <h3>1020</h3>
            <p>Registrados hoy</p>
          </span>
        </li>
        <li>
          <i className="bx">
            <HiUserGroup />
          </i>
          <span className="text">
            <h3>2834</h3>
            <p>Usuarios registrados</p>
          </span>
        </li>
      </ul>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Clientes Registrados</h3>
            <i className="bx bx-search"></i>
            <i className="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cédula </th>
                <th>Fecha De Registro</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>diego maradona</p>
                </td>
                <td>12323232</td>
                <td>01-10-2021</td>
                <td>
                <ModalUser/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Clients;
