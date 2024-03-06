import { FaUserPlus } from "react-icons/fa";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { userSchema } from "../schema/userSchema";

export default function App() {
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <Button
        onClick={onOpen}
        variant="flat"
        className="capitalize"
        color="default">
        <FaUserPlus size={30} />
        Registrar Cliente
      </Button>
      <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Registro de Cliente
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  action=""
                  method="post"
                  className="flex flex-col gap-4">
                  <div className="flex gap-2">
                    <Input
                      type="nombre"
                      {...register("nombre")}
                      label="Nombre"
                      className="max-w-xs"
                      isInvalid={validNombre}
                      onValueChange={setNombre}
                    />
                    <Input
                      type="apellido"
                      {...register("apellido")}
                      label="Apellido"
                      className="max-w-xs"
                      isInvalid={validApelldio}
                      onValueChange={setApelldio}
                    />
                    <select
                      className="max-w-xs"
                      {...register("genero")}
                      label="Genero">
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      label="Documento de Identidad"
                      {...register("documentoIdentidad")}
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
                            name="currency">
                            <option>C.I</option>
                            <option>RIF</option>
                          </select>
                        </div>
                      }
                      type="text"
                      isInvalid={validDocumento}
                      onValueChange={setDocumento}
                    />
                    <Input
                      label="Numero de Contacto"
                      {...register("numero")}
                      placeholder="0424-2358145"
                      labelPlacement="outside"
                      type="text"
                      isInvalid={validNumero}
                      onValueChange={setNumero}
                    />
                  </div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <label htmlFor="fecha">Fecha Nacimiento</label>
                    <Input type="date" {...register("fechaNacimiento")} />
                  </div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                      type="text"
                      label="Correo electrónico"
                      {...register("email")}
                      isInvalid={validEmail}
                      onValueChange={setEmail}
                    />
                  </div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                      type="texto"
                      {...register("direccion")}
                      label="Dirección"
                      description="Zona de Residencia actual"
                      isInvalid={validDireccion}
                      onValueChange={setDireccion}
                    />
                  </div>
                  <ModalFooter>
                    <Button color="danger" variant="light" onClick={onClose}>
                      Cancelar
                    </Button>
                    <Button color="primary" type="submit">
                      Guardar
                    </Button>
                  </ModalFooter>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
