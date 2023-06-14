import Swal from "sweetalert2";
import useSelectedClass from "../../hooks/useSelectedClass";


const MySelectedClasses = () => {
    const [selected,refetch]=useSelectedClass();
    const handleDelete=item=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/selected/${item._id}`,{
                method: "DELETE"
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'This class has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }
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
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Pay</th>
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
                                 <button onClick={()=>handleDelete(row)}  className="px-6 py-3   hover:bg-gray-100 hover:text-black text-white rounded-lg bg-opacity-30 bg-green-900">Delete</button>
                             </td>
                             <td>
                                 <button  className="px-6 py-3   hover:bg-gray-100 hover:text-black text-white rounded-lg bg-opacity-30 bg-green-900">Pay</button>
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