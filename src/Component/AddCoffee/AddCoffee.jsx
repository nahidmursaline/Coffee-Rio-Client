import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const addedCoffee = {name, quantity, supplier, taste, category, details, photo};
    console.log(addedCoffee)

    fetch('http://localhost:5000/coffee',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(addedCoffee)

    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Coffee has been added",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })

  }
  return (
    <div className=''>
      <h1 className='flex justify-center text-4xl font-extrabold mb-20'>Add a Coffee</h1>
     <div className='p-24'>
     <form onSubmit={handleSubmit}>
        <div className='flex w-3/4'>
          <div className="w-1/2 pr-2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                type="text"
                name='name'
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="w-1/2 pl-2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Available Quantity</span>
              </div>
              <input
                type="text"  
                name='quantity'
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className='flex w-3/4'>
          <div className="w-1/2 pr-2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Supplier Name</span>
              </div>
              <input
                type="text"
                name='supplier'
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="w-1/2 pl-2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                type="text"  
                name='taste'
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className='flex w-3/4'>
          <div className="w-1/2 pr-2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                name='category'
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="w-1/2 pl-2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"  
                name='details'
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className='flex w-3/4'>
          <div className="w-full ">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                name='photo'
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
        </div>
        <input type="submit" value='Add Coffee' className= "btn  btn-warning w-3/4 mt-5" />
      </form>
     </div>
    </div>
  );
};

export default AddCoffee;








