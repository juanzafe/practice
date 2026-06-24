import {BuscaPeli} from "./problems/pelis.jsx"
import { Shopping } from "./problems/shoping.tsx"
import { GetName } from "./problems/try.tsx"
import AutoFocusInput from "./problems/auto-focus-input.jsx"
import TemperatureConverter from "./problems/lifting-state.jsx"




export default function App() {
    return (
        <div>
            <TemperatureConverter />
            <AutoFocusInput />
            <GetName />
            <BuscaPeli />
            <Shopping />
        </div>
    )
}
