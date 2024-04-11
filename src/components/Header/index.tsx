import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  useDisclosure,
  Box,
  Card,
} from "@chakra-ui/react";
import { HeaderS, CartCheckout } from "./styles";
import Image from "next/image";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HeaderS>
      <h1>
        MKS <span>Sistemas</span>
      </h1>
      <CartCheckout onClick={onOpen}>
        <Image
          src="/iconCart.svg"
          alt="Imagem do carrinho de compra"
          width={15}
          height={15}
        />
        <h1>0</h1>
      </CartCheckout>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent bg="#0F52BA">
          <DrawerCloseButton
            bg="black"
            borderRadius="full"
            color="white"
            m="1rem"
          />
          <DrawerHeader fontSize={27} fontWeight={700} color="white">
            Carrinho <br /> de compras
          </DrawerHeader>

          <DrawerBody fontFamily={'Montserrat'} >
            <Box
            width={'100%'}
            height={"90%"}
            px={9}
            >
              <Card
                width={"100%"}
                height={'95px'}
                display={'flex'}
                flexDirection={"row"}
                alignItems={"center"}
                px={3}
                gap={3}

                >
                <Box
                  width={55}
                  height={65}
                  bg={'black'}
                  >

                </Box>
                <p>aaaaaaaaaaaaaaaaaaaabody do drawer</p>
              </Card>
            </Box>

            <Box
            display={'flex'}
            justifyContent={'space-around'}
            alignItems={"center"}
            width='100%'
            height='10%'
            color={"white"}
            fontWeight={700}
            fontSize={28}
            >
              <ul>Total:</ul>
              <ul>R$999</ul>
            </Box>
          </DrawerBody>

          <DrawerFooter p={0}>
            <Button
              bg="#000000"
              color="white"
              fontFamily={'Montserrat'}
              borderRadius={0}
              w="100%"
              h="97px"
              fontSize={28}
              _hover={{ opacity: 0.8, bg: "black" }}
            >
              Finalizar Compra
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HeaderS>
  );
}
