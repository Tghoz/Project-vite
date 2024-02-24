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
            <h3>Recent Orders</h3>
            <i className="bx bx-search"></i>
            <i className="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Fecha De Registro</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>No</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status completed">Completed</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Estudiar</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Infor</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status process">Process</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Matica</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>PIPIPIPI</p>
                </td>
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
