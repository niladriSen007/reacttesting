import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe("Greet component", () => {
  it("Testing Greet component", () => {
    render(<Greet />)
    const element = screen.getByText("Hello")
    expect(element).toBeInTheDocument()
  })

  it("Testing Greet component with a name prop", () => {
    render(<Greet name="Niladri" />)
    const element = screen.getByText("Hello Niladri")
    expect(element).toBeInTheDocument()
  })
})
