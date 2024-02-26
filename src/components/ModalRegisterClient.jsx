import { FaUserPlus } from "react-icons/fa";
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
import { useState } from "react"; 

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tipoDocumento, setTipoDocumento] = useState("Cédula");

  return (
    <div className="">
      <Button onPress={onOpen} variant="flat" className="capitalize" color="warning">
        <FaUserPlus size={20} />
        Registrar Cliente
      </Button>
      <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Registro de Cliente
          </ModalHeader>
          <ModalBody>
            <form action="" method="post" className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Input type="nombre" label="Nombre" className="max-w-xs" />
                <Input type="apellido" label="Apellido" className="max-w-xs" />
              </div>
              <div className="flex gap-2">
                <Input
                  label="Documento de Identidad"
                  placeholder={` ${tipoDocumento}`}
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
                        onChange={(e) => setTipoDocumento(e.target.value)}>
                        <option value="11.234.564">Cédula</option>
                        <option value="J-123456789">RIF</option>
                      </select>
                    </div>
                  }
                  type="text"
                />
                <Input
                  label="Numero de Contacto"
                  placeholder="2288105"
                  labelPlacement="outside"
                  startContent={
                    <div className="flex items-center">
                      <label className="sr-only" htmlFor="currency">
                        idk
                      </label>
                      <select
                        className="outline-none border-0 bg-transparent text-default-400 text-small"
                        id="currency"
                        name="currency">
                        <option>0412</option>
                        <option>0424</option>
                        <option>0416</option>
                      </select>
                    </div>
                  }
                  type="text"
                />
              </div>

              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input label="Fecha De nacimiento" type="date" />
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  type="texto"
                  label="Direcci"
                  description="Zona de Residencia actual"
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cancelar
            </Button>
            <Button color="primary" onPress={onClose}>
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}