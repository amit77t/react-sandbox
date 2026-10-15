function List2()
{  
    const users = [
        { id: 1, name: "Amit", role: "Intern" },
        { id: 2, name: "Rahul", role: "Developer" },
        { id: 3, name: "Priya", role: "Designer" },
      ];
    return(
        <div>
             <h2>Team Members</h2>

             {users.map((user)=>(
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.role}</p>

                </div>
             ))}
               
        </div>
    )
}


export default List2;