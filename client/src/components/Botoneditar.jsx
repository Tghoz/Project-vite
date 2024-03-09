import { FaEdit } from "react-icons/fa";
import "../css/Pages.css";

import { Button, useDisclosure } from "@nextui-org/react";

export default function App() {
  const { onOpen } = useDisclosure();

  const Formulario = () => {
    return (
      <div className="">
        <Button
          onClick={onOpen}
          variant="flat"
          className="capitalize"
          color="secondary">
          <FaEdit size={20} />
          Editar{" "}
        </Button>
      </div>
    );
  };
  return <Formulario />;
}
