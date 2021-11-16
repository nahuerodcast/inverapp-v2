import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";
import { IoIosArrowDown } from "react-icons/io";
import { ImUserPlus } from "react-icons/im";
import { MdOutlineLogin } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

export const UnloggedNavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <div>
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        px="200px"
        py={2}
        boxShadow="lg"
      >
        <Flex flexDir="row" alignItems="center" justifyContent="center">
          <Heading
            as="h1"
            fontWeight="extrabold"
            fontFamily="Inter,sans-serif"
            letterSpacing="tight"
            mr={10}
          >
            Inverapp
          </Heading>
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rightIcon={<IoIosArrowDown />}
              color="gray.400"
            >
              Invertí
            </MenuButton>
            <MenuList>
              <MenuItem>Acciones</MenuItem>
              <MenuItem>Cedears</MenuItem>
              <MenuItem>Cripto</MenuItem>
              <MenuItem>Fondos comunes</MenuItem>
              <MenuItem>Comprá dólares</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rightIcon={<IoIosArrowDown />}
              color="gray.400"
            >
              Aprendé
            </MenuButton>
            <MenuList>
              <MenuItem>Guía de ayuda</MenuItem>
              <MenuItem>Tutoriales</MenuItem>
              <MenuItem>Cursos gratis</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rightIcon={<IoIosArrowDown />}
              color="gray.400"
            >
              FAQ
            </MenuButton>
            <MenuList>
              <MenuItem>¿Quienes somos?</MenuItem>
              <MenuItem>Comisiones</MenuItem>
              <MenuItem>Fondeo de cuenta</MenuItem>
              <MenuItem>Asesoramiento</MenuItem>
              <MenuItem>Otras consultas</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex alignItems="center">
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            p={0}
            m={0}
            borderRadius={9999}
            color="gray.500"
          >
            <WiMoonAltWaningCrescent2 size={20} />
          </Button>
          <Button
            colorScheme="blackAlpha"
            variant="solid"
            fontFamily="Inter,sans-serif"
            m={2}
            rightIcon={<ImUserPlus />}
            onClick={onOpen}
            bgColor="gray.600"
            color="white"
          >
            Abrir cuenta
          </Button>
          <Button
            colorScheme="gray"
            variant="outline"
            fontFamily="Inter,sans-serif"
            m={1}
            rightIcon={<MdOutlineLogin />}
          >
            Ingresar
          </Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Creá tu cuenta</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Nombre"
                    isRequired={true}
                  />
                </FormControl>

                <FormControl mt={4} isRequired>
                  <FormLabel>E-mail</FormLabel>
                  <Input placeholder="Ingresá tu e-mail" />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Contraseña</FormLabel>
                  <Input
                    placeholder="Generá una contraseña segura"
                    type="password"
                    isRequired={true}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Guardar
                </Button>
                <Button onClick={onClose}>Cancelar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </div>
  );
};