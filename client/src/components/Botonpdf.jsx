import { BiSolidDownload } from "react-icons/bi";
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
          color="warning"  >
          <BiSolidDownload size={20} />
         Guardar PDF
        </Button>
      </div>
    );
  };
  return <Formulario />;
}