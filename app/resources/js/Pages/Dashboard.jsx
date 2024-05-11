import List from '@/Components/Todos/List';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, todos }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Todos</h2>}
        >
            <Head title="Todos" />

            <List todos={todos}/>
        </AuthenticatedLayout>
    );
}
