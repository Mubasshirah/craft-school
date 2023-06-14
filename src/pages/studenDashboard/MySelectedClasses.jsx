import useSelectedClass from "../../hooks/useSelectedClass";


const MySelectedClasses = () => {
    const [selected,refetch]=useSelectedClass();
    // const handleDelete=item=>{
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           fetch(`https://ms-12-final-project-server.vercel.app/carts/${item._id}`,{
    //             method: "DELETE"
    //           })
    //           .then(res=>res.json())
    //           .then(data=>{
    //             if(data.deletedCount>0){
    //                 refetch();
    //                 Swal.fire(
    //                     'Deleted!',
    //                     'Your file has been deleted.',
    //                     'success'
    //                   )
    //             }
    //           })
    //         }
    //       })
    // }
    return (
        <div className="w-full ">
           
            <div className="">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selected.map((row,index)=>
                             <tr key={row._id}>
                             <td>
                                {index+1}
                             </td>
                             <td>
                                 <div className="flex items-center space-x-3">
                                     <div className="avatar">
                                         <div className="mask mask-squircle w-12 h-12">
                                             <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                         </div>
                                     </div>
                                    
                                 </div>
                             </td>
                             <td>
                                {row.name}
                             </td>
                             <td >${row.price}</td>
                             <td>
                                 <button  className="btn btn-ghost btn-xs">Delete</button>
                             </td>
                         </tr>
                            )}
                       
                        
                    </tbody>
                  
                  
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;