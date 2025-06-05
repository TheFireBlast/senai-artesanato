import React from "react";

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Registro</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Nome Completo
            </label>
            <input type="text" id="name" className="w-full p-2 border rounded" placeholder="Coloque seu nome completo" />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input type="email" id="email" className="w-full p-2 border rounded" placeholder="exemplo@email.com" />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              placeholder="Crie uma senha"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-2 border rounded"
              placeholder="Confirme sua senha"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Registrar
          </button>
        </form>

        <p className="mt-4 text-center">
          Já possui uma conta?{" "}
          <a href="/auth/login" className="text-blue-600 hover:underline">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
}
