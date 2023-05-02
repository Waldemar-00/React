import { Component, StrictMode } from 'react'
import react from './react.jpg'
import './App.css'

function Image () {
  return <img src={ react } alt="react wallpaper" />
}
// const Header = () => {
  // const styles = {
    // color: '#2F1755',
    // padding: '0 auto',
    // textAlign: 'center'
  // }
  // return (<h1 style={ styles }>Hello React!</h1>)
// }
class Header extends Component {
  render() {
    const styles = {
      color: '#2F1755',
      padding: '0 auto',
      textAlign: 'center'
    }
    return (<h1 style={ styles }>Hello React!</h1>)
  }
}
function Button() {
  const textBtn = () => {
    return 'Log In'
  }
  const logged = true
  const styles = {
    display: 'block',
    width: '50%',
    fontSize: '24px',
    backgroundColor: '#fff',
    color: '#2F1755',
    margin: '0 auto',
    textAlign: 'center',
    border: '2px solid #2F1755',
  }
  return <button
            style={styles}>
            {logged ? 'Enter' : textBtn()}
        </button>
}
function MyApp() {
  return (
    <div className="MyApp">
      <StrictMode>
        <Header />
      </StrictMode>
      <Image />
      <Button />
    </div>
  );
}
export { Header }
export default MyApp
