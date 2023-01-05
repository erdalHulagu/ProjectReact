import React from "react";

//comment satiri
/*comment blogu
 */

const Jsx3 = () => {
  const isAdmin = true;

  return (
    <div>
      {isAdmin ? (
        <React.Fragment>
          <h2>Admin Menu</h2>
          <ul>
            <li>Create User</li>
            <li>Update User</li>
            <li>Delete User</li>
          </ul>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h2>User Menu</h2>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default Jsx3;
