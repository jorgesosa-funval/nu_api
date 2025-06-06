import { useNavigate } from 'react-router';
import { login } from '../libs/axios/auth'
export default function Login() {
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData(e.target);
            const body = Object.fromEntries(formData.entries())
            const { data, status } = await login(body)
            console.table({ data, status })

            if (status === 200) {
                navigate('/')
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            type="email"
                            name='email'
                            id="email"
                            placeholder="Ingresa tu correo"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            type="password"
                            id="password"
                            name='password'
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                    >
                        Iniciar Sesión
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
                    ¿No tienes una cuenta? <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Regístrate</a>
                </p>
            </div>
        </div>
    );
}
