import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./TeaCard.css";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const TeaCard = ({ tea, teas, setTeas }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = tea;

    const handleDelete = (_id) => {
        console.log(_id);
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

                fetch(`http://localhost:5000/tea/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tea has been deleted.",
                                icon: "success"
                            });

                            const remaining = teas.filter(t => t._id != _id);
                            setTeas(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card md:card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='tea_image'
                        src={photo}
                        alt="Album" />
                </figure>
                <div className=" md:flex justify-between w-full">
                    <div className="flex flex-col space-y-2 pt-4 pl-4">
                        <h2 className="card-title"><span style={{ color: 'blue' }}>Name:</span> {name}</h2>
                        <h2 className="card-title"><span style={{ color: 'blue' }}>Supplier:</span>{supplier}</h2>
                        <h2 className="card-title"> <span style={{ color: 'blue' }}>Taste:</span>{taste}</h2>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <button className="btn btn-secondary"><FontAwesomeIcon icon={faEye} /></button>
                        <Link to={`updateTea/${_id}`}><button className="btn btn-neutral"><FontAwesomeIcon icon={faPen} /></button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn   btn-warning"><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeaCard;