import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TodoForm from '@/Components/Todos/TodoForm';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';


export default function Create({ auth }) {
  return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold fs-6 text-muted text-gray-800"><Link href="/dashboard">Dashboard</Link> {">"} Add Todo</h2>}
    >
        <Head title="Dashboard > Todos > Add" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <TodoForm 
                    title="Add Todo"
                    action="Create"
                    placeholder={[]}
                    disabled={false}
                    />
                </div>

            </div>
        </div>
    </AuthenticatedLayout>
);
}
