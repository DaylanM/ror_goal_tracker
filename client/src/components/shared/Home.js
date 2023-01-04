import { Link } from "react-router-dom";

const Home = () => (
  <>
    {/* Find big header pic */}
    <h1> big quote</h1>

    <Link to='/login'>
      <button>Login</button>
    </Link>

    <Link to='/register'>
      <button>Register</button>
    </Link>
  </>
)

export default Home;