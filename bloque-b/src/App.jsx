import './App.css'
import Productos from './pages/Productos'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();
// Configuración de react-query una vez
function App() {

  return (
    <QueryClientProvider client={queryClient}> 

      <Productos />

    </QueryClientProvider>
  )
}

export default App
