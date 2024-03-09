import { Input } from "@nextui-org/react";
import { FaEdit } from "react-icons/fa";
import { Button } from "@nextui-org/react";

import { useForm } from "react-hook-form";

import { useParams, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { getClientId, updateClient } from "../api/client.api";

export default function FormActualizar() {
  const navigate = useNavigate();

  const param = useParams();
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    async function loadClient() {
      try {
        const response = await getClientId(param.id);
        setClientData(response); // Almacena la respuesta en el estado clientData
        // console.log(response.data);
      } catch (error) {
        console.error("Error al cargar datos del cliente:", error);
      }
    }
    loadClient();
  }, [param.id]);
  console.log();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (id, data) => {
    try {
      await updateClient(id, data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center p-10 ">
      {clientData && (
        <form method="post" className="flex flex-col gap-4">
          <h1 className="my-10">EDITAR CLIENTE</h1>
          <div className="flex gap-2">
            <Input
              defaultValue={clientData.data.nombre}
              {...register("nombre")}
              type="text"
              label="Nombre"
              className="max-w-xs"
            />

            <Input
              {...register("apellido")}
              type="text"
              defaultValue={clientData.data.apellido}
              label="Apellido"
              className="max-w-xs"
            />
            <select
              className="outline-none border-0  text-default-900 text-small"
              label="Genero"
              defaultValue={clientData.data.fecha_nacimiento}
              {...register("genero")}>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
          <div className="flex gap-2">
            <Input
              label="Documento de Identidad"
              {...register("documento_identidad")}
              defaultValue={clientData.data.documento_identidad}
              labelPlacement="outside"
              startContent={
                <div className="flex items-center">
                  <label className="sr-only" htmlFor="currency">
                    Tipo
                  </label>
                  <select
                    {...register("tipo_cliente")}
                    className="outline-none border-0 bg-transparent text-default-400 text-small"
                    id="currency"
                    name="currency"
                    defaultValue={clientData.data.tipo_cliente}>
                    <option>C.I</option>
                    <option>RIF</option>
                  </select>
                </div>
              }
              type="text"
            />
            <Input
              label="Numero de Contacto"
              {...register("contacto")}
              defaultValue={clientData.data.contacto}
              labelPlacement="outside"
              type="text"
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <label htmlFor="fecha">Fecha Nacimiento</label>
            <Input
              type="date"
              {...register("fecha_nacimiento")}
              defaultValue={clientData.data.fecha_nacimiento}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="text"
              {...register("email")}
              label="Correo electrónico"
              defaultValue={clientData.data.email}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="texto"
              label="Dirección"
              {...register("direccion")}
              description="Zona de Residencia actual"
              defaultValue={clientData.data.direccion}
            />
          </div>
          <Button
            onClick={handleSubmit((data) => onSubmit(param.id, data))}
            variant="flat"
            className="capitalize"
            color="secondary">
            <FaEdit size={20} />
            Editar{" "}
          </Button>
        </form>
      )}
    </div>
  );
}
