import React from "react";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = {
    id: params.id,
    name: "Vaso de Cerâmica Artesanal",
    description: "descricao",
    price: 49.99,
    imageUrl: "https://placehold.co/600x400",
    images: [
      "https://placehold.co/100x100",
      "https://placehold.co/100x100",
      "https://placehold.co/100x100",
      "https://placehold.co/100x100",
    ],
    rating: 4.8,
    reviews: 24,
    artist: {
      name: "aeiou",
      avatar: "https://placehold.co/50x50",
      bio: "abc123",
    },
    category: "Decoração para Casa",
    dimensions: "20 x 15 x 15 cm",
    weight: "1,2 kg",
    materials: "Cerâmica, acabamento vitrificado",
    stock: 8,
  };

  const comments = [
    {
      id: 1,
      user: "Julia",
      avatar: "https://placehold.co/40x40",
      date: "28 de Maio, 2099",
      rating: 5,
      content: "otimo.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.imageUrl} alt={product.name} className="w-full rounded-lg shadow-md mb-4" />
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="w-full h-20 object-cover rounded border cursor-pointer hover:border-blue-500"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {product.rating} · {product.reviews} avaliações
            </span>
          </div>

          <p className="text-xl font-bold mb-4">R$ {product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Detalhes do Produto</h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <span className="text-gray-600">Dimensões:</span>
              <span>{product.dimensions}</span>
              <span className="text-gray-600">Peso:</span>
              <span>{product.weight}</span>
              <span className="text-gray-600">Materiais:</span>
              <span>{product.materials}</span>
              <span className="text-gray-600">Em Estoque:</span>
              <span>{product.stock} disponível</span>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="flex items-center border rounded mr-4">
              <button className="px-3 py-1 hover:bg-gray-100">-</button>
              <span className="px-3 py-1">1</span>
              <button className="px-3 py-1 hover:bg-gray-100">+</button>
            </div>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 flex-grow">
              Adicionar ao Carrinho
            </button>
          </div>

          <div className="flex items-center text-sm border-t pt-4">
            <img src={product.artist.avatar} alt={product.artist.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-medium">Feito por {product.artist.name}</p>
              <p className="text-gray-600">{product.artist.bio}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12" id="comments">
        <h2 className="text-xl font-bold mb-6">Avaliações dos Clientes</h2>

        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b pb-6">
              <div className="flex items-start">
                <img src={comment.avatar} alt={comment.user} className="w-10 h-10 rounded-full mr-4" />
                <div className="flex-grow">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{comment.user}</span>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill={i < comment.rating ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
