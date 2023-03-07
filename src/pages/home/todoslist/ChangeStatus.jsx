import axios from "axios"
import Swal from "sweetalert2"
import TodosListView from "./TodosList.view"

const ChangeStatus = () => {  

    const ChangeStatus = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure you want to mark this todo as complete?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#22c55e',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Move to Doing'
            }).then((result) => {
            if(result.isConfirmed) {
                axios.patch(`http://localhost:3006/todos/${id}`, {
                    status:'complete'
                })
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Todo marked as complete successfully.',
                        showConfirmButton: false,
                        })
                        setTimeout(() => {
                            window.location.reload()
                        }, 1500);
                }).catch((error) => {
                    console.log(error)
                })
            }
        })
    }

    return <TodosListView ChangeStatus={ChangeStatus} />
}

export default ChangeStatus