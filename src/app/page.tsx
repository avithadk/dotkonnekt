
import Header from "../components/Header/Header"
import { constants } from '../../external'

export default function Home() {
  return (
    <main>
      <Header background={constants?.CustomAppbar?.backgroundColor}/>
    </main>
  )
}
