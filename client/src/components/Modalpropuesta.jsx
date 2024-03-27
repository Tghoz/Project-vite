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

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        color="warning">
        <RiFileAddFill size={30} />
        Registrar propuestas
      </Button>
      <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Registrar propuesta
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  action=""
                  method="post"
                  className="flex flex-col gap-4">
                  <div className="flex gap-2">
                    <Input
                      type="propuesta"
                      label="Nombre de propuesta"
                      className="max-w-xs"/>
                    <Input
                      type="Destino"
                      label="Destino"
                      className="max-w-xs"/>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      label="Fecha de registro de propuesta"
                      labelPlacement="outside"
                      startContent={
                        <div className="flex items-center">
                        </div>
                      }
                      type="date"/>
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
