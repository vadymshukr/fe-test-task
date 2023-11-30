import { Provider } from 'react-redux'
import Router from 'src/components/Router/Router.tsx'
import './App.css'
import { store } from 'src/store'

function App() {

  return (
      <Provider store={store}>
          <Router />
      </Provider>
  )
}

export default App
