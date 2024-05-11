import formatDateLabel from "./FormattedDate.function";
import { Link } from "@inertiajs/react";

export default function List({ todos }) {
    return (
        <div className="pe-6 pt-3">
            {Object.keys(todos).map((dateString) => (
                <div key={dateString} className="container">
                    <h4 className="text-right pt-2 text-sm font-medium leading-5 text-secondary">{formatDateLabel(dateString)}</h4>
                    {todos[dateString].map((todo) => (
                        <div key={todo.id} className="pt-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8">
                                            <h6 className="card-title px-1">
                                                {todo.title}
                                            </h6>
                                        </div>
                                        <div className="col-lg-4 text-end">
                                            <Link href={`/todos/view/${todo.id}`} className="btn btn-outline-success me-2">
                                                <i className="bi bi-eye-fill"></i>
                                            </Link>
                                            <Link href={`/todos/edit/${todo.id}`} className="btn btn-outline-info me-2">
                                                <i className="bi bi-pen-fill"></i>
                                            </Link>
                                            <Link href={`/todos/destroy/${todo.id}`} className="btn btn-outline-danger">
                                                <i className="bi bi-trash-fill"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
