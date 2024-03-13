export const SignUp = () => {
  return (
    <main className="form-bg text-slate-300 h-screen flex justify-center ">
      <div className=" flex flex-col justify-center p-2 ">
        <div className="text-3xl p-2 font-bold">Sign Up</div>
        <div className="m-3">
          <form action="" className="flex flex-col  flex-wrap">
            {/* form */}
            <div className="flex flex-col md:flex-row">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name"
                className="m-1 p-2 form-input-text text-xl outline-none font-bold rounded-lg "
                required
              />
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name"
                className="m-1 p-2 form-input-text text-xl outline-none font-bold rounded-lg "
                required
              />
            </div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="m-1 p-2 form-input-text text-xl outline-none font-bold rounded-lg"
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="m-1 p-2 form-input-text text-xl outline-none font-bold rounded-lg"
              required
            />
            <input
              type="password"
              name="confirm-password"
              id="cofirm-password"
              placeholder="confirm password"
              className="m-1 p-2 form-input-text text-xl outline-none font-bold rounded-lg"
              required
            />
            <div className="self-start p-2 m-1">
              <input
                type="checkbox"
                name="accept-t&c"
                id="accept-t&c"
                className="m-1 p-2 form-input-text text-xl outline-none font-bold rounded-lg"
                required
              />
              <label htmlFor="accept-t&c">Accepting our T&C</label>
            </div>
            <button type="submit" className="form-button m-2 p-2 text-xl ">
              Sign up
            </button>
          </form>
        </div>
        <div className="">
          {/* <div className="p-1 form-other-text"><a className="hover:text-slate-400 hover:underline " href="">forgot Password?</a></div> */}
          <div className="p-1 form-other-text">
            Already have an account?
            <a className="hover:text-slate-400 hover:underline p-1" href="/Login">
               Log In!
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
