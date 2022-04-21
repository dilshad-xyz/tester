import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Api() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="App">
      <div className="row">
      <h1 className="d-flex justify-content-center align-items-center pt-5">Hello ReqRes users!</h1>
      <div className="d-flex justify-content-center align-items-center pt-5">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
               <div className="row">
                 <div className="col-sm-6">
                <img key={user.avatar} src={user.avatar} />
                </div>
                <p>
                  <strong >{user.first_name}</strong>
                </p>
                <p>
                  <strong>{user.last_name}</strong>
                </p>
                <p>{user.email}</p>
              </div>
              </div>
            );
          })}
      </div>
    </div>
    </div>
  );
}
