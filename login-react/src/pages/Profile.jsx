import { useState, useEffect } from 'react';

// Componente reutilizable para inputs
const FormInput = ({ label, id, name, type = "text", placeholder, value, onChange, autoComplete }) => (
    <div>
        <label htmlFor={id} className="block text-lg font-semibold mb-3 dark:text-gray-100">{label}</label>
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-5 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
    </div>
);

export default function Profile() {
    // Estado para la foto de perfil
    const [profileImage, setProfileImage] = useState("https://via.placeholder.com/176");
    
    // Estado para el formulario
    const [formData, setFormData] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        second_last_name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
        biography: "",
        marital_status: "",
        birth_place: "",
        skills: "",
    });

    // Estado para errores de validación
    const [errors, setErrors] = useState({});
    
    // Efecto para aplicar el modo oscuro según preferencias del sistema
    useEffect(() => {
        // Verificar preferencias de color del sistema
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Función para aplicar tema según preferencia
        const applyTheme = (e) => {
            if (e.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };
        
        // Aplicar tema inicial
        applyTheme(darkModeMediaQuery);
        
        // Escuchar cambios en la preferencia
        darkModeMediaQuery.addEventListener('change', applyTheme);
        
        // Limpiar listener al desmontar
        return () => darkModeMediaQuery.removeEventListener('change', applyTheme);
    }, []);

    // Manejador para cambios en inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Manejador para cambio de imagen
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Validación del formulario
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.first_name.trim()) newErrors.first_name = "El nombre es requerido";
        if (!formData.last_name.trim()) newErrors.last_name = "El apellido es requerido";
        
        if (!formData.email.trim()) {
            newErrors.email = "El correo es requerido";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "El correo no es válido";
        }
        
        if (formData.password && formData.password.length < 8) {
            newErrors.password = "La contraseña debe tener al menos 8 caracteres";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Manejador para envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Aquí iría la lógica para enviar los datos al servidor
            console.log("Formulario enviado:", formData);
            alert("Cambios guardados con éxito");
        }
    };

    return (
        <>
            <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-6 bg-white dark:bg-gray-800 shadow-sm">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">Perfil de Usuario</h1>
            </header>

            <main className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-20">
                <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 rounded-3xl shadow-lg max-w-6xl mx-auto overflow-hidden">
                    <section className="w-full lg:w-1/3 flex justify-center items-start p-12">
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-3xl shadow-md flex flex-col items-center p-8 w-64">
                            <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 shadow-sm">
                                <img src={profileImage} alt="Foto de perfil" className="object-cover w-full h-full" />
                                <label htmlFor="profilePicInput" className="absolute bottom-3 right-3 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full cursor-pointer shadow-md transition-colors duration-300" title="Cambiar foto de perfil">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M15.232 5.232l3.536 3.536M9 11l5 5L20.5 9.5 15 4l-6 6z" /></svg>
                                    <input 
                                        id="profilePicInput" 
                                        name="profile_picture" 
                                        type="file" 
                                        accept="image/*" 
                                        className="hidden" 
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>
                            <h2 className="mt-8 text-3xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
                                {formData.first_name || 'Usuario'}
                            </h2>
                            <p className="mt-3 text-center text-gray-600 dark:text-gray-300 leading-relaxed max-w-xs">
                                Actualiza tu información personal
                            </p>
                        </div>
                    </section>

                    <section className="flex-1 p-12 space-y-10">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-200 dark:border-gray-700">
                                Información Personal
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput 
                                    label="Nombre" 
                                    id="firstName" 
                                    name="first_name"
                                    placeholder="Nombre" 
                                    value={formData.first_name}
                                    onChange={handleInputChange}
                                    autoComplete="given-name"
                                />
                                {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
                                
                                <FormInput 
                                    label="Segundo Nombre" 
                                    id="middleName" 
                                    name="middle_name"
                                    placeholder="Segundo Nombre (opcional)" 
                                    value={formData.middle_name}
                                    onChange={handleInputChange}
                                    autoComplete="additional-name"
                                />
                                
                                <FormInput 
                                    label="Primer Apellido" 
                                    id="lastName" 
                                    name="last_name"
                                    placeholder="Primer Apellido" 
                                    value={formData.last_name}
                                    onChange={handleInputChange}
                                    autoComplete="family-name"
                                />
                                {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}
                                
                                <FormInput 
                                    label="Segundo Apellido" 
                                    id="secondLastName" 
                                    name="second_last_name"
                                    placeholder="Segundo Apellido (opcional)" 
                                    value={formData.second_last_name}
                                    onChange={handleInputChange}
                                    autoComplete="family-name"
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-200 dark:border-gray-700">
                                Contacto
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput 
                                    label="Correo Electrónico" 
                                    id="email" 
                                    name="email"
                                    type="email"
                                    placeholder="usuario@ejemplo.com" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    autoComplete="email"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                
                                <FormInput 
                                    label="Contraseña" 
                                    id="password" 
                                    name="password"
                                    type="password"
                                    placeholder="********" 
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    autoComplete="new-password"
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                                
                                <FormInput 
                                    label="Teléfono" 
                                    id="phone" 
                                    name="phone"
                                    type="tel"
                                    placeholder="+1234567890" 
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                                
                                <FormInput 
                                    label="Dirección" 
                                    id="address" 
                                    name="address"
                                    placeholder="Calle, ciudad, estado, código postal" 
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-200 dark:border-gray-700">
                                Información Adicional
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput 
                                    label="Estado Civil" 
                                    id="maritalStatus" 
                                    name="marital_status"
                                    placeholder="Estado Civil" 
                                    value={formData.marital_status}
                                    onChange={handleInputChange}
                                />
                                
                                <FormInput 
                                    label="Lugar de Nacimiento" 
                                    id="birthPlace" 
                                    name="birth_place"
                                    placeholder="Lugar de Nacimiento" 
                                    value={formData.birth_place}
                                    onChange={handleInputChange}
                                />
                                
                                <FormInput 
                                    label="Habilidades" 
                                    id="skills" 
                                    name="skills"
                                    placeholder="Habilidades (separadas por comas)" 
                                    value={formData.skills}
                                    onChange={handleInputChange}
                                />
                                
                                <div className="md:col-span-2">
                                    <label htmlFor="biography" className="block text-lg font-semibold mb-3 dark:text-gray-100">
                                        Biografía
                                    </label>
                                    <textarea 
                                        id="biography" 
                                        name="biography" 
                                        rows="4" 
                                        placeholder="Cuéntanos sobre ti..." 
                                        value={formData.biography}
                                        onChange={handleInputChange}
                                        className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-5 text-gray-900 dark:text-gray-100 shadow-sm resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 flex gap-4 justify-end border-t border-gray-200 dark:border-gray-700">
                            <button 
                                type="button" 
                                className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105 focus:outline-none"
                            >
                                Cancelar
                            </button>
                            <button 
                                type="submit" 
                                className="bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-2 text-white px-8 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105 focus:outline-none"
                            >
                                Guardar Cambios
                            </button>
                        </div>
                    </section>
                </form>
            </main>
        </>
    );
}

