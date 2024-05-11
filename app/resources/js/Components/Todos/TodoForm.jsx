import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function TodoForm({ title, action, placeholders = [], disabled }) {
    const user = usePage().props.auth.user;


    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        user_id: user.user_id,
        title: user.title,
        body: user.body,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('todos.create'));
    };

    return (
        <section
        >
            <header>
                <h2 className="text-lg font-medium text-gray-900">{title}</h2>

                <p className="mt-1 text-sm text-gray-600">
                    {action} your todo and remember to give it a unique title!
                </p>
            </header>

            <form onSubmit={submit} disabled={disabled} className="mt-6 space-y-6">
                <div className="row">
                    <div className='col-lg-12 mb-3'>
                        <InputLabel htmlFor="title" value="Title" />

                        <TextInput
                            id="title"
                            type="text"
                            className="mt-1 block w-100"
                            value={(placeholders.length > 0 && setData('title', placeholders[0])) || data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            required
                            isFocused
                            autoComplete="title"
                        />

                        <InputError className="mt-2" message={errors.title} />
                    </div>

                    <div className='col-lg-12 mb-3'>
                        <InputLabel htmlFor="body" value="Body" />

                        <TextAreaInput
                        id="body"
                        className="mt-1 block w-full"
                        value={(placeholders.length > 0 && setData('body', placeholders[0].body)) || data.body}
                        onChange={(e) => setData('body', e.target.value)}
                        required
                        autoComplete="body"
                    />

                        <InputError className="mt-2" message={errors.body} />
                    </div>

                    <div className="col-lg-12 flex items-center gap-4">
                        <PrimaryButton disabled={processing}>Save</PrimaryButton>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600">Saved.</p>
                        </Transition>
                    </div>
                </div>
            </form>
        </section>
    );
}
