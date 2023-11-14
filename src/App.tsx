import './style.css'
import signature from './signature.png'
import logo from './vercel.svg'
import ClickCounter from './ClickCounter'
const App = () => {
  const name = 'trin'
  return (
    <>
      <h1>
        Hello App - {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={signature} alt="signature" width={300} height={100} />
      <img src={logo} alt="logo" width={100} height={100} />
      <ClickCounter />
    </>
  )
}

export default App
