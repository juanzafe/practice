import {BuscaPeli} from "./problems/pelis.jsx"
import { Shopping } from "./problems/shoping.tsx"
import { GetName } from "./problems/try.tsx"
import AutoFocusInput from "./problems/auto-focus-input.jsx"





export default function App() {
    return (
        <div>
            <AutoFocusInput />
            <GetName />
            <BuscaPeli />
            <Shopping />
        </div>
    )
}
