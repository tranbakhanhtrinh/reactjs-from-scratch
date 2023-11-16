import ClickCounter from './ClickCounter'
import './style.css'
import logo from './vercel.svg'
const App = () => {
  return (
    <>
      <h1>
        Hello App - {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={logo} alt="logo" width={100} height={100} />
      <ClickCounter />
    </>
  )
}

export default App
