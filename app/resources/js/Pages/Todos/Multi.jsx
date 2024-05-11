import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TodoForm from '@/Components/Todos/TodoForm';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';


export default function Create({ auth, title, action, placeholders, disabled }) {
  console.log(placeholders)
    return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold fs-6 text-muted text-gray-800"><Link href="/dashboard">Dashboard</Link> {">"} {title} </h2>}
    >
        <Head title={title} />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <TodoForm 
                    title={title}
                    action={action}
                    placeholder={placeholders}
                    disabled={disabled}
                    />
                </div>

            </div>
        </div>
    </AuthenticatedLayout>
);
}
