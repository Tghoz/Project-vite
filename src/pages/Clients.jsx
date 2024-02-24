import ModalRegisterClient from "../components/ModalRegisterClient";

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
            <h3>Usuarios</h3>
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
                  <p>juan pepe</p>
                </td>
                <td>123124</td>
                <td>01-10-2021</td>
                <td>
                  <span className="status completed">Completed</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>juana pepe</p>
                </td>
                <td>67675677</td>
                <td>01-10-2021</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>lola suarez</p>
                </td>
                <td>4453453</td>
                <td>01-10-2021</td>
                <td>
                  <span className="status process">Process</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>simon rodriguez</p>
                </td>
                <td>232323</td>
                <td>01-10-2021</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>diego maradona</p>
                </td>
                <td>12323232</td>
                <td>01-10-2021</td>
                <td>
                  <span className="status completed">Completed</span>
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
