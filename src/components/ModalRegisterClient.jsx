
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const handleSubmit = () => {
    onClose();
  };

  return (
    <>
      <div>
        {backdrops.map((b) => (
          <Button
            key={b}
            variant="flat"
            color="warning"
            onPress={() => handleOpen(b)}
          >
            Registrar Cliente
          </Button>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h2>Registro de Cliente</h2>
              </ModalHeader>
              <ModalBody>
                <form>
                  <Input label="Nombre" />
                  <Input label="Apellido" />
                  <Input label="Documento de Identidad" />
                  <Input type="email" label="Correo Electrónico" />
                  <Input label="Teléfono" />
                  <Input label="Dirección" />
                  <div>
                    <label htmlFor="gender">Género</label>
                    <select id="gender" name="gender">
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <Input type="date" label="Fecha de Nacimiento" />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={handleSubmit}>
                  Registrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}