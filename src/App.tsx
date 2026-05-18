import { MainLayout } from "./shared/layouts/MainLayout"
import { DashboardPage } from "./pages/Dashboard"
import "./style.css"

export function App() {

  return(
    <MainLayout>
      <DashboardPage/>
    </MainLayout>

  )


}