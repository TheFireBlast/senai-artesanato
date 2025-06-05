import React from 'react';

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              placeholder="exemplo@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block mb-1">Senha</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              placeholder="Coloque sua senha"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember">Lembrar de mim</label>
            </div>
            <a href="/auth/forgot-password" className="text-blue-600 hover:underline">
              Esqueci minha senha
            </a>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>
        
        <p className="mt-4 text-center">
          Não possui uma conta?{' '}
          <a href="/auth/register" className="text-blue-600 hover:underline">
            Fazer Registro
          </a>
        </p>
      </div>
    </div>
  );
}
