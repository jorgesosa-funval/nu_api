import { useNavigate } from "react-router-dom";

export default function Forbidden() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden dark:bg-gray-800">
        <div className="p-5 sm:p-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 dark:bg-red-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2 dark:text-white">
              403 - Acceso Prohibido
            </h1>
            
            <p className="text-gray-600 mb-6 dark:text-gray-300">
              Lo sentimos, no tienes permisos para acceder a esta página.
            </p>
            
            <div className="text-sm text-gray-500 mb-8 dark:text-gray-400">
              Es posible que no tengas los privilegios necesarios o que tu sesión haya expirado.
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                Volver Atrás
              </button>
              
              <button
                onClick={() => navigate("/")}
                className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Ir al Inicio
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-center text-gray-500 text-sm dark:text-gray-400">
        Si crees que esto es un error, por favor contacta al administrador del sistema.
      </p>
    </div>
  );
}