import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    // <ListGroup className="mt-4">
    //   {users.length > 0 ? (
    //     <>
    //       {users.map((user) => (
    //         <ListGroupItem className="d-flex" key={user.id}>
    //           <strong>{user.name}</strong>
    //           <strong>{user.email}</strong>
    //           <div className="ml-auto">
    //             <Link
    //               to={`/edit/${user.id}`}
    //               color="warning"
    //               className="btn btn-warning mr-1"
    //             >
    //               Edit
    //             </Link>
    //             <Button onClick={() => removeUser(user.id)} color="danger">
    //               Delete
    //             </Button>
    //           </div>
    //         </ListGroupItem>
    //       ))}
    //     </>
    //   ) : (
    //     <h4 className="text-center">No Users</h4>
    //   )}
    // </ListGroup>
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {users.map((data) => (
          <tbody key={users.id}>
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
