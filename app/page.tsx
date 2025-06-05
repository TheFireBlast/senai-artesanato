import Link from "next/link";
import Star from "./components/Star";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Vaso de Cerâmica Artesanal",
      price: 49.99,
      image: "https://placehold.co/200",
      rating: 4.8,
      reviews: 9,
      artist: "Maria da Silva",
      categories: ["decoracao", "casa"],
    },
    {
      id: 2,
      name: "Tábua de Corte de Madeira",
      price: 35.5,
      image: "https://placehold.co/200",
      rating: 4.6,
      reviews: 6,
      artist: "João Santos",
      categories: ["cozinha", "utilidades"],
    },
    {
      id: 3,
      name: "Pendente de Madeira",
      price: 65.0,
      image: "https://placehold.co/200",
      rating: 4.9,
      reviews: 2,
      artist: "Ana Oliveira",
      categories: ["iluminacao", "decoracao"],
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Descubra Produtos Artesanais Únicos</h1>
            <p className="text-xl mb-6">Apoiando artesãos locais e trazendo artesanato de qualidade até você</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Lista de Produtos</h1>
            <div className="flex items-center gap-3">
              <select className="border p-2 rounded">
                <option>Todas Categorias</option>
                <option>Decoração</option>
                <option>Cozinha</option>
                <option>Acessórios</option>
                <option>Iluminação</option>
                <option>Utilidades</option>
              </select>
              Ordenar por:
              <select className="border p-2 rounded">
                <option>Em alta</option>
                <option>Preço: Crescente</option>
                <option>Preço: Decrescente</option>
                <option>Avaliações</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-1">by {product.artist}</p>
                    <p className="text-gray-500 text-xs mb-2">{product.categories.join(", ")}</p>

                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-bold">R$ {product.price.toFixed(2).replace(".", ",")}</span>
                      <button className="bg-blue-600 text-white text-xs py-1 px-3 rounded hover:bg-blue-700">
                        + Carrinho
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border rounded hover:bg-gray-100">Anterior</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">Próximo</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
