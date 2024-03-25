import ModalRegisterClient from "../components/ModalRegisterClient";
import "../css/Pages.css";
import { VscArrowRight } from "react-icons/vsc";
import { HiUserGroup } from "react-icons/hi";
import { GrUserExpert } from "react-icons/gr";
import { useEffect, useState } from "react";
import { getClient } from "../api/client.api";
import { deleteClient } from "../api/client.api";
import { Button } from "@nextui-org/react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaUserGear } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

function Clients() {
  const navigate = useNavigate();
  const [clients, setClient] = useState([]);

  useEffect(() => {
    async function loadClient() {
      const response = await getClient();
      setClient(response.data);
      return response;
    }

    loadClient();
  }, []);

  const clicDelete = async (id) => {
    try {
      await deleteClient(id);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

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
            <h3>{}</h3>
            <p>Registrados hoy</p>
          </span>
        </li>
        <li>
          <i className="bx">
            <HiUserGroup />
          </i>
          <span className="text">
            <h3>{clients.length}</h3>
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
              <tr className="text-center">
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Documento identidad</th>
                <th>Estatus</th>
                <th>Modificar</th>
              </tr>
            </thead>

            <tbody>
              {clients.map((client) => (
                <tr key={client.id_cliente}>
                  <td> {client.nombre_completo}</td>
                  <td>
                    {client.tipo === 1 ? "C.I" : client.tipo === 2 ? "RIF" : ""}
                  </td>
                  <td> {client.documento_identidad}</td>
                  <td> {client.direccion}</td>
                  <td>
                    <Button
                      onClick={() => navigate(`/clientes/${client.id_cliente}`)}
                      variant="flat"
                      className="capitalize"
                      color="success">
                      <FaUserGear size={20} />
                      Editar
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => clicDelete(client.id_cliente)}
                      variant="flat"
                      className="capitalize"
                      color="secondary">
                      <RiDeleteBin2Fill size={20} />
                      Borrar{" "}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Clients;
