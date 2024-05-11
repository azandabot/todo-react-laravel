export default function ApplicationLogo(props) {
    
    const className = `bi bi-pencil-square text-dark ${props.className.length > 0 ? props.className : 'fs-4' }`
    return (
        <i className={className}></i>
    );
}
