import { render, screen } from "@testing-library/react"
import { Button } from "@/components/ui/button"

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("applies variant classes", () => {
    render(<Button variant="gradient">Gradient Button</Button>)
    const button = screen.getByText("Gradient Button")
    expect(button).toHaveClass("bg-gradient-to-r")
  })
})

