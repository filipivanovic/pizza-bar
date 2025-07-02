import CreateUser from '../features/user/CreateUser.jsx'

function Home() {
  return (
    <div className="my-10 text-center sm:my-16 sm:px-6">
      <h1 className="mb-8 text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
      </h1>

      <CreateUser className="" />
    </div>
  )
}

export default Home