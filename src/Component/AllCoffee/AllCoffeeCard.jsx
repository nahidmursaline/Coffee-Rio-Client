import React from 'react';
import Swal from 'sweetalert2';

const AllCoffeeCard = ({coffee}) => {
  const {_id, name, quantity, supplier, taste, category, details, photo}  =  coffee ;

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/coffee/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success"
                      });
                }
            })
            }
          });
    }

    return (
        <div className=''>
            <div className="hero min-h-full bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='flex w-full justify-between '>
      <div>
      <h3 className="text-3xl font-bold">{name}</h3>
      <p className="py-1">{quantity}</p>
      <p className="py-1">{supplier}</p>
      <p className="py-1">{taste}</p>
      <p className="py-1">{category}</p>
      <p className="py-1">{details}</p>
      </div>
      <div className="join join-vertical space-y-4 pl-6">
  <button className="btn btn-error join-item">View</button>
  <button className="btn btn-error join-item">Update</button>
  <button onClick={()=>handleDelete(_id)} className="btn btn-error join-item">X</button>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllCoffeeCard;