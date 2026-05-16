import { Link } from "react-router-dom"

function AdminPanel() {

    return (
        <div>
            <Link to={"/newproduct"}>
            <button>Admin Panel</button>
            </Link>
        </div>
    )
}

export default AdminPanel