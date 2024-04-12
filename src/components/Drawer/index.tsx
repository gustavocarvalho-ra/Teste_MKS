import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Card,
  DrawerFooter,
  Button,
  Box,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useShoppingCart } from "@contexts/useShoppingCart";
import { NameProduct } from "./styles";

interface DrawerShoppingProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DrawerShopping = ({ isOpen, onClose }: DrawerShoppingProps) => {
  const { listShoppingCart } = useShoppingCart();
  console.log(listShoppingCart);

  // const dubleCart = listShoppingCart.find(
  //   (product) => product.id === product.id
  // )
  //   if (dubleCart) {
  //     const 
  //   }

  const calculateTotalPrice = () => {
    const totalPrice = listShoppingCart.reduce(
      (total, product) => total + Number(product.price),
      0,
    );
    return totalPrice;
  };
  
  // const handleRemoveCart = (id: number) => {

  // }

  return (
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

        <DrawerBody>
          <Stack width={"100%"} height={"90%"} px={9} overflowY="auto"  paddingTop={2}>
            {listShoppingCart.map((product) => (
              <Card
                width={"100%"}
                height={"95px"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                px={3}
                gap={3}
                key={product.id}
                fontFamily='Montserrat'
                marginBottom={1.5}
                >
                <Image
                  src={product.photo}
                  alt="Imagem do carrinho de compra"
                  width={46}
                  height={57}
                />
                <NameProduct>{product.name}</NameProduct>
                <div style={{width:'60px', display:'flex', alignItems: 'center', justifyContent: 'space-between',  gap: '10px', padding: '0 5px 0 5px', borderRadius: '4px', border: '1px solid #bfbfbf'}}>
                  <button style={{fontSize: '17px', color: 'red'}}>-</button>
                  <p>1</p>
                  <button style={{fontSize: '17px', color: 'green'}}>+</button>
                </div>
                <p style={{lineHeight: '17px', fontSize: '14px', marginLeft: '20px', fontWeight: '700' }}>R${product.price}</p>
                {/* <button onClick={() => handleRemoveCart(product.id)} style={{width: '22px', height: '22px', background: '#000', borderRadius: '50%', color: '#fff', top: '-7px', right: '-7px', position: 'absolute'}}>x</button> */}
              </Card>
            ))}
          </Stack>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width="100%"
            color={"white"}
            fontWeight={700}
            fontSize={28}
            marginTop={5}
            >
            <p>Total:</p>
            <p>R$ {calculateTotalPrice()}</p>
          </Box>
        </DrawerBody>

        <DrawerFooter p={0}>
          <Button
            bg="#000000"
            color="white"
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
  );
};