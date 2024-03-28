import { IoMdAddCircle } from "react-icons/io";
import { useForm } from "react-hook-form";
import Botoneditar from "../components/Botoneditar";
import Botonborrar from "../components/Botonborrar";
import "../css/Pages.css";
import { useEffect, useState } from "react";
import { getPropuesta, getRedes, postPublicacion } from "../api/analisis.api";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [propuesta, setPropuesta] = useState([]);
  const [red, setRed] = useState([]);

  useEffect(() => {
    async function loadData() {
      const propuestaResponse = await getPropuesta();
      const redResponse = await getRedes();

      setPropuesta(propuestaResponse.data);
      setRed(redResponse.data);

      return {
        propuesta: propuestaResponse,
        red: redResponse,
      };
    }

    loadData();
  }, []);

  // function convertirValoresAEnteros(objeto) {
  //   for (let clave in objeto) {
  //     if (typeof objeto[clave] === "string" && !isNaN(objeto[clave])) {
  //       objeto[clave] = parseInt(objeto[clave]);
  //     }
  //   }
  //   return objeto;
  // }

  const Formulario = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
      console.log(data);
      try {
        await postPublicacion(data);
        window.location.reload();
        alert("fino compa");
      } catch (error) {
        console.error(error);
        alert("no furula paito");
      }
    };

    return (
      <div className="">
        <Button
          onClick={onOpen}
          variant="flat"
          className="capitalize"
          color="success">
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
                    className="flex flex-col gap-4">
                    <div className="flex gap-2">
                      <Select
                        className="max-w-xs"
                        label="Seleccionar Red Social"
                        {...register("id_red")}>
                        {red.map((i) => (
                          <SelectItem key={i.id_inteaccion}>
                            {i.red_social}
                          </SelectItem>
                        ))}
                      </Select>
                      <Select
                        className="max-w-xs"
                        label="Seleccionar Propuesta"
                        {...register("id_propuesta")}>
                        {propuesta.map((e) => (
                          <SelectItem key={e.id_propuesta}>
                            {e.nombre}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="flex gap-2">
                      <Select
                        className="max-w-xs"
                        label="Seleccionar Propuesta"
                        {...register("tipo")}>
                        <SelectItem>Comentarios</SelectItem>
                        <SelectItem>Likes</SelectItem>
                        <SelectItem>Comparitodos</SelectItem>
                      </Select>
                      <Input
                        {...register("metrica")}
                        isRequired
                        type="number"
                        label="Interacciones"
                        className="max-w-xs"
                      />
                    </div>
                    <div className="boton-borrar flex gap-2">
                      <Botoneditar />
                      <Botonborrar />
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
