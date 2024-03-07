import { RiFileAddFill } from "react-icons/ri";
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
import { Select, SelectItem } from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm();

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
        <RiFileAddFill size={30} />
        Registrar Propuestas
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
                    />
                    <Input
                      type="apellido"
                      {...register("Apellido")}
                      label="Apellido"
                      className="max-w-xs"
                    />
                    <Select
                      className="max-w-xs"
                      {...register("genero")}
                      label="Genero">
                      <SelectItem>Femenino</SelectItem>
                      <SelectItem>Masculino</SelectItem>
                    </Select>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      label="Documento de Identidad"
                      {...register("Documento de identidad")}
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
                    />
                    <Input
                      label="Numero de Contacto"
                      {...register("Numero")}
                      placeholder="0424-2358145"
                      labelPlacement="outside"
                      startContent={
                        <div className="flex items-center">
                          <label className="sr-only" htmlFor="currency">
                            idk
                          </label>
                        </div>
                      }
                      type="text"
                    />
                  </div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input type="date" {...register("fecha de nacimiento")} />
                  </div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                      type="text"
                      label="Correo electrónico"
                      {...register("email")}
                    />
                  </div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                      type="texto"
                      {...register("dirrecion")}
                      label="Dirección"
                      description="Zona de Residencia actual"
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
