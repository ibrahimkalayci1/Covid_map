import { render, screen } from "@testing-library/react"
import Heading from "../pages/detail/heading"
import { Provider } from "react-redux"
import  configureStore  from "redux-mock-store"
import { BrowserRouter } from "react-router-dom"
import { thunk } from "redux-thunk"
import { exaData } from "../utils/constants"
  
//test ortamnda sahte store oluşturan fonksiyon
const mockStore = configureStore([thunk])
test("store daki veri yükleme durumundayken ekrana loader basılır", () => {

//yukleme durumundaki store un sahte bir versiyonunu oluştur
const store =  mockStore({ isLoading: true, 
    error: null, data: null })
    
render(
    <Provider store={store}>
    <BrowserRouter>
    <Heading />
    </BrowserRouter>
    </Provider>
    )

    //loadr bileşeni ekrana basıldımı
    screen.getByTestId("heading-loader")
})

test("store daki veri yüklendikten sonra ekrana ülke bilgileri basılır", () => {
    //store un yuklenme bittiği andaki versiyonunu ouştur
    const store = mockStore({ 
        isLoading: false, 
        error: null, 
        data: exaData, 
});

        render(
            <Provider store={store}>
            <BrowserRouter>
            <Heading />
            </BrowserRouter>
            </Provider>
        
        ) ;

        //ülke bayrağı ekrana geldimi
        const flagImg = screen.getByAltText(/The flag of Turkey/)
       
        //bayrağın kaynağı doğrumu?
       expect(flagImg).toHaveAttribute("src", exaData.country.flag.png);

        //ülke ismi ekrana geldimi
        screen.getByText("Turkey")
    
    });