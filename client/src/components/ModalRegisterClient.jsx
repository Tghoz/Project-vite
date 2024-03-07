import { FaUserGear } from "react-icons/fa6";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FormCliente } from "./FormCliente";

export default function ModalRegisterClient() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="flex">
      <Button
        onClick={onOpen}
        variant="flat"
        className="capitalize"
        color="success">
        <FaUserGear size={20} />
        wasa
      </Button>
      <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Registro de Cliente
              </ModalHeader>
              <ModalBody>
                <FormCliente />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" type="submit">
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
