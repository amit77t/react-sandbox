function List() {
    const countries = ["India", "Japan", "China", "Nepal", "America"];
    return (
        <div>
            <h1>Rendering Lists using map()</h1>

            <ul>
                {countries.map((name) => (
                    <li key={name} >{name}</li>
                ))}
            </ul>
        </div>
    )
}


export default List;