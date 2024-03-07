import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../schema/userSchema";

import { postClient } from "../api/client.api";

export function FormCliente() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await postClient(data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  });

  // ! Validaciones stiles ekisdeeee
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApelldio] = React.useState("");
  const [documento, setDocumento] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [direccion, setDireccion] = React.useState("");

  const regexT = (value) => value.match(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/);
  const regexN = (value) => value.match(/^[0-9]+$/);
  const regexEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const validNombre = React.useMemo(() => {
    if (nombre === "") return false;
    return regexT(nombre) ? false : true;
  }, [nombre]);

  //   const validNombre = (() => {
  //     if (nombre === "") {
  //       return false;
  //     }
  //     if (regexT(nombre)) return false;

  //     if (nombre === " ") return console.log(errors);

  //     return true;
  //   })();

  const validApelldio = React.useMemo(() => {
    if (apellido === "") return false;
    return regexT(apellido) ? false : true;
  }, [apellido]);

  const validDocumento = React.useMemo(() => {
    if (documento === "") return false;
    return regexN(documento) ? false : true;
  }, [documento]);

  const validNumero = React.useMemo(() => {
    if (numero === "") return false;
    return regexN(numero) ? false : true;
  }, [numero]);

  const validEmail = React.useMemo(() => {
    if (email === "") return false;

    return regexEmail(email) ? false : true;
  }, [email]);

  const validDireccion = React.useMemo(() => {
    if (direccion === "") return false;
  }, [direccion]);

  return (
    <form onSubmit={onSubmit} method="post" className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Input
          {...register("nombre", { required: true })}
          type="text"
          label="Nombre"
          className="max-w-xs"
          isInvalid={validNombre}
          onValueChange={setNombre}
        />

        <Input
          {...register("apellido")}
          type="text"
          label="Apellido"
          className="max-w-xs"
          isInvalid={validApelldio}
          onValueChange={setApelldio}
        />
        <select
          className="outline-none border-0  text-default-900 text-small"
          label="Genero"
          {...register("genero")}>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </div>
      <div className="flex gap-2">
        <Input
          label="Documento de Identidad"
          placeholder="27797609"
          labelPlacement="outside"
          startContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                Tipo
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
                {...register("tipo_cliente")}>
                <option>C.I</option>
                <option>RIF</option>
              </select>
            </div>
          }
          {...register("documento_identidad")}
          type="text"
          isInvalid={validDocumento}
          onValueChange={setDocumento}
        />
        <Input
          {...register("contacto")}
          label="Numero de Contacto"
          placeholder="0424-2358145"
          labelPlacement="outside"
          type="text"
          isInvalid={validNumero}
          onValueChange={setNumero}
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <label htmlFor="fecha">Fecha Nacimiento</label>
        <Input type="date" {...register("fecha")} />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          {...register("email")}
          type="text"
          label="Correo electrónico"
          isInvalid={validEmail}
          onValueChange={setEmail}
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          {...register("direccion")}
          type="texto"
          label="Dirección"
          description="Zona de Residencia actual"
          isInvalid={validDireccion}
          onValueChange={setDireccion}
        />
      </div>
      <button type="submit" className="text-">
        Registrar
      </button>
    </form>
  );
}
