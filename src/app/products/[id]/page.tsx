/* eslint-disable prettier/prettier */
interface ProductProps {
  params: {
    id: string;
  };
}

export default function InfoProducts(props: ProductProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Products {JSON.stringify(props)}</h1>
    </main>
  );
}
