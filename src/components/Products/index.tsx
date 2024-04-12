import { useProductsList } from "@queries/useProductsList";
import {
  ButtonBuy,
  CardProduct,
  Container,
  ContainerSkeleton,
  FilterList,
  ListProducts,
  NameAndPrice,
  NameProduct,
  PageProductList,
  PriceProduct,
  SectionDescriptionProduct,
  SectionImage,
  TextDescription,
} from "./styles";
import Image from "next/image";
import { Select, Skeleton } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useShoppingCart } from "@contexts/useShoppingCart";

export default function Products() {
  const [orderBy, setOrderBy] = useState<string>("DESC");
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useProductsList({ page: page, order: orderBy });
  const { handleAddProductShopping } = useShoppingCart();

  return (
    <Container>
      <FilterList>
        <div>
          <p>Ordernar por:</p>
          <Select
            w="10rem"
            onChange={(e) => setOrderBy(e.target.value)}
            defaultValue={orderBy}
          >
            <option value="DESC">Decrescente</option>
            <option value="ASC">Crescente</option>
          </Select>
        </div>
      </FilterList>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ListProducts>
          {isLoading ? (
            <ContainerSkeleton>
              <Skeleton h={285} w={218} borderRadius={16} />
              <Skeleton h={285} w={218} borderRadius={16} />
              <Skeleton h={285} w={218} borderRadius={16} />
              <Skeleton h={285} w={218} borderRadius={16} />
            </ContainerSkeleton>
          ) : (
            data &&
            data.products.map((product) => (
              <motion.button whileHover={{ scale: 1.05 }} key={product.id}>
                <CardProduct onClick={() => handleAddProductShopping(product)}>
                  <SectionImage>
                    <Image
                      src={product.photo}
                      alt="Imagem do carrinho de compra"
                      width={138}
                      height={138}
                    />
                    <SectionDescriptionProduct>
                      <NameAndPrice>
                        <NameProduct>{product.name}</NameProduct>
                        <PriceProduct>R${product.price}</PriceProduct>
                      </NameAndPrice>

                      <TextDescription>{product.description}</TextDescription>
                    </SectionDescriptionProduct>
                  </SectionImage>

                  <div>
                    <ButtonBuy>
                      <Image
                        src="/iconBag.svg"
                        alt="Imagem do carrinho de compra"
                        width={15}
                        height={15}
                        style={{ marginRight: "0.5rem" }}
                      />
                      <p>COMPRAR</p>
                    </ButtonBuy>
                  </div>
                </CardProduct>
              </motion.button>
            ))
          )}
        </ListProducts>
        <PageProductList>
          <button onClick={() => setPage(1)}>1</button>
          <button onClick={() => setPage(2)}>2</button>
        </PageProductList>
      </motion.div>
    </Container>
  );
}