import {Container, Filters, Title, TopBar} from "@/components/shared";
import {ProductCard} from "@/components/shared/product-card";
import {ProductsGroupList} from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title={'Пицца1'} items={[{
                id: 1,
                name: 'XXX',
                imageUrl: '/',
                price: 100,
                items: [{price: 550}]
              }]} categoryId={1} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
