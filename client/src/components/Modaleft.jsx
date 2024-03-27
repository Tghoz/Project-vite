import { IoMdAddCircle } from "react-icons/io";
import { useForm } from "react-hook-form";
import Botoneditar from "../components/Botoneditar";
import Botonborrar from "../components/Botonborrar";
import "../css/Pages.css";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,

} from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Formulario = () => {
    const { handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <div className="">
        <Button
          onClick={onOpen}
          variant="flat"
          className="capitalize"
          color="success"  >
          <IoMdAddCircle size={20} />
          Gestor de Datos
        </Button>
        <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                Gestor de Datos
                </ModalHeader>
                <ModalBody>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    action=""
                    method="post"
                    className="flex flex-col gap-4" >
                      <Select className="max-w-xs"label="Seleccionar Propuesta">
                         
                  </Select>
                  <div className="boton-editar">
                    <Botoneditar/>
                   </div>
                <div className="boton-borrar">
                 <Botonborrar/>
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
  };
  return <Formulario />;
}