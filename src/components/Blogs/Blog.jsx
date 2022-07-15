import { useEffect, useState } from "react";
import "./styles.css";

const url = "https://jsonplaceholder.typicode.com/posts";

export default function Blog() {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  const getUserData = async () => {
    const response = await fetch(url);
    const Data = await response.json();
    setUserData(Data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <h2>User Data</h2>
      {userData.map((user) => {
        const { id, title, body } = user;
        return (
          <>
            <div className="card">
              <p>
                <b>{title}</b>
              </p>
              <p>
                <b>Description:</b>
                {body}
              </p>
            </div>
          </>
        );
      })}
    </>
  );
}
