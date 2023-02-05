import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div style={{
      padding: "20px 0px",
      minHeight: '100vh',
    }}>
      <div style={{ margin: "0px auto", }} className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <Typography
          style={{
            marginBottom: "10px",
            textAlign: "center",
            fontWeight: "600",
            fontSize: "22px",
          }}>
          Register a new account
        </Typography>
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputName"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="
              w-full
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"
          >
            Sign in
          </button>
          <p className="text-gray-800 mt-6 text-center">
          Already have an account?{" "}
            <Link
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              // onClick={() => {
              //   document.documentElement.scrollTop = 0;
              // }}
            to='/login'>
                Press here       
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};