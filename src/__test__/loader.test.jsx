import { render, screen } from "@testing-library/react"
import Loader from "../components/loader"

it("Heading için doğru loader ekrana basılır", () => {
    render(<Loader type="heading" />)

    screen.getByTestId("heading-loader")

})


it("diğer alanlar için doğru loader ekrana basılır", () => {
    render(<Loader  />)
    const loaders = screen.getAllByTestId("content-loader")

    //expect(loaders).toHaveLength(16) 2.yol
    expect(loaders.length).toBe(16)
 
})