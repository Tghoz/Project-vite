import { RiFileAddFill } from "react-icons/ri";
import { useForm, Controller } from "react-hook-form";

import { CheckboxGroup, Checkbox } from "@nextui-org/react";

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
import { postPropuesta } from "../api/analisis.api";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, control, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await postPropuesta(data);
      window.location.reload();
      alert("fino compa");
    } catch (error) {
      console.error(error);
      alert(error);
    }
  });

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
                Registro Propuesta
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  action=""
                  method="post"
                  className="flex flex-col gap-4">
                  <div className="flex gap-2">
                    <Input
                      isRequired
                      type="texto"
                      {...register("destino")}
                      label="Destino"
                      className="max-w-xs"
                    />
                    <Input
                      type="texto"
                      isRequired
                      {...register("trasporte")}
                      label="Trasporte"
                      className="max-w-xs"
                    />
                  </div>

                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                      type="date"
                      description="Inicio del viaje"
                      {...register("inicio")}
                    />
                  </div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                      type="date"
                      description="Fin del viaje"
                      {...register("fin")}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Input
                      type="number"
                      {...register("precio_adulto")}
                      label="Precio Persona"
                      labelPlacement="outside"
                      defaultValue="0.00"
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">$</span>
                        </div>
                      }
                    />

                    <Input
                      type="number"
                      {...register("precio_ancianos")}
                      label="Precio Anciano"
                      labelPlacement="outside"
                      defaultValue="0.00"
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">$</span>
                        </div>
                      }
                    />
                    <Input
                      type="number"
                      {...register("precio_niños")}
                      label="Precio Niños"
                      labelPlacement="outside"
                      defaultValue="0.00"
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">$</span>
                        </div>
                      }
                    />
                  </div>

                  <label htmlFor="">Incluye</label>
                  <Controller
                    control={control}
                    name=""
                    render={({ onChange, value }) => (
                      <div className="flex gap-2">
                        <CheckboxGroup
                          {...register("desayuno")}
                          value={value}
                          onChange={({ target: { checked } }) =>
                            onChange(checked)
                          }
                          orientation="horizontal"
                          isRequired
                          color="warning">
                          <Checkbox>Desayuno</Checkbox>
                        </CheckboxGroup>

                        <CheckboxGroup
                          {...register("almuerzo")}
                          value={value}
                          onChange={({ target: { checked } }) =>
                            onChange(checked)
                          }
                          orientation="horizontal"
                          isRequired
                          color="warning">
                          <Checkbox>Almuerzo</Checkbox>
                        </CheckboxGroup>

                        <CheckboxGroup
                          {...register("cena")}
                          value={value}
                          onChange={({ target: { checked } }) =>
                            onChange(checked)
                          }
                          orientation="horizontal"
                          isRequired
                          color="warning">
                          <Checkbox>Cena</Checkbox>
                        </CheckboxGroup>

                        <CheckboxGroup
                          {...register("bebida")}
                          value={value}
                          onChange={({ target: { checked } }) =>
                            onChange(checked)
                          }
                          orientation="horizontal"
                          isRequired
                          color="warning">
                          <Checkbox>Bebida</Checkbox>
                        </CheckboxGroup>

                        <CheckboxGroup
                          {...register("alcohol")}
                          value={value}
                          onChange={({ target: { checked } }) =>
                            onChange(checked)
                          }
                          orientation="horizontal"
                          isRequired
                          color="warning">
                          <Checkbox>Alcohol</Checkbox>
                        </CheckboxGroup>
                      </div>
                    )}
                  />

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
