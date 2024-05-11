import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';


export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute w-100 top-0 "
                    src="https://images.unsplash.com/photo-1557683316-973673baf926"
                />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#333333] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header>
                            <div className="text-center">
                                <ApplicationLogo className="display-1 text-white" />
                            </div>
                        </header>

                        <main className="text-center mt-6">
                        {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="btn btn-light rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="btn btn-light me-2 rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="btn btn-light rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                        </main>

                        <footer className="py-16 text-center text-light text-sm text-black dark:text-white/70">
                            Application: TodoListApp<br />Running on: Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
