import React from 'react';
import Swal from 'sweetalert2';
const AddTea = () => {
    const handleAddTea = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newTea = { name, quantity, supplier, taste, category, details, photo };
        console.log(newTea);

        fetch('http://localhost:5000/tea', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTea)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    Swal.fire({
                        title: "Tea Inserted Successfully",
                        width: 600,
                        padding: "3em",
                        color: "#716add",
                        background: "#fff url(/images/trees.png)",
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("/images/nyan-cat.gif")
                          left top
                          no-repeat
                        `
                      });
                }
            })



    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-6xl font-extrabold text-blue-800'>Add Tea</h2>

            <form onSubmit={handleAddTea}>
                <div className='md:flex  mb-8 gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' placeholder="Tea Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex  mb-8 gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='supplier' placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='taste' placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex  mb-8 gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='category' placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='details' placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='photo' placeholder="Photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input className="btn btn-block bg-[#3B2F2F] text-white" type="submit" value="Add Tea" />

            </form>


        </div>

    );
};

export default AddTea;