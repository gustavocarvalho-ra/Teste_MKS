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
import {
  AddOrRemoveProduct,
  BoxQtyProduct,
  ButtonRemoveProduct,
  ContainerCard,
  ContainerShoppingCartEmpty,
  NameProduct,
  QtdProduct,
} from "./styles";

interface DrawerShoppingProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DrawerShopping = ({ isOpen, onClose }: DrawerShoppingProps) => {
  const {
    listShoppingCart,
    handleRemoveProductShopping,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
  } = useShoppingCart();

  const calculateTotalPrice = () => {
    const totalPrice =
      listShoppingCart &&
      listShoppingCart.reduce(
        (total, product) => total + Number(product.price) * product.quantity,
        0,
      );
    return totalPrice;
  };

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
          <Box width={"100%"} height={"90%"} px={9} overflowY="auto">
            {listShoppingCart.length === 0 ? (
              <ContainerShoppingCartEmpty>
                <p>Carrinho de compras vazio</p>
              </ContainerShoppingCartEmpty>
            ) : (
              listShoppingCart?.map((product) => (
                <ContainerCard key={product.id}>
                  <ButtonRemoveProduct
                    onClick={() => handleRemoveProductShopping(product.id)}
                  >
                    <p>x</p>
                  </ButtonRemoveProduct>
                  <Card
                    width={"100%"}
                    height={"95px"}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    px={3}
                    gap={3}
                  >
                    <Image
                      src={product.photo}
                      alt="Imagem do carrinho de compra"
                      width={46}
                      height={57}
                    />
                    <NameProduct>{product.name}</NameProduct>
                    <BoxQtyProduct>
                      <AddOrRemoveProduct
                        onClick={() => handleDecreaseQuantity(product.id)}
                      >
                        −
                      </AddOrRemoveProduct>
                      <QtdProduct>{product.quantity}</QtdProduct>
                      <AddOrRemoveProduct
                        onClick={() => handleIncreaseQuantity(product.id)}
                      >
                        +
                      </AddOrRemoveProduct>
                    </BoxQtyProduct>

                    <p>R${product.price * product.quantity}</p>
                  </Card>
                </ContainerCard>
              ))
            )}
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width="100%"
            color={"white"}
            fontWeight={700}
            fontSize={28}
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