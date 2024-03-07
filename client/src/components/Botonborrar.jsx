import { RiDeleteBin2Fill } from "react-icons/ri";
import "../css/Pages.css";
import {
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function App() {
  const {  onOpen} = useDisclosure();

  const Formulario = () => {
    return (
      <div className="">
        <Button
          onClick={onOpen}
          variant="flat"
          className="capitalize"
          color="danger"  >
          <RiDeleteBin2Fill size={20} />
          Eliminar
        </Button>
      </div>
    );
  };
  return <Formulario />;
}