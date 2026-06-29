import {BuscaPeli} from "./problems/pelis.jsx"
import { Shopping } from "./problems/shoping.tsx"
import { GetName } from "./problems/try.tsx"
import AutoFocusInput from "./problems/auto-focus-input.jsx"
import TemperatureConverter from "./problems/lifting-state.jsx"
import ToggleDemo from "./problems/custom-hook-toggle.jsx"
import RegistrationForm from "./problems/controlled-form.jsx"
import TodoList from "./problems/todo-list.jsx"
import AsyncAwaitPage from "./problems/async-await/AsyncAwaitPage.tsx"
import MortgageCalculator from "./problems/mortgage.jsx"




export default function App() {
    return (
        <div>
            <MortgageCalculator />
            <AsyncAwaitPage />
            <TodoList />
            <RegistrationForm />
            <ToggleDemo />
            <TemperatureConverter />
            <AutoFocusInput />
            <GetName />
            <BuscaPeli />
            <Shopping />
        </div>
    )
}
