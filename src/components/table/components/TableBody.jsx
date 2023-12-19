export function TableBody(){
    return (
        <tr key={router.id}>
            <td>{row.name}</td>
            <td>{row.lastname}</td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
            <td>{row.birthdate}</td>
            <td>
                <div className="flex gap-1 items-center">
                    <button>Editar</button>
                    <button>Deletar</button>
                </div>
            </td>
        </tr>
    );
}
