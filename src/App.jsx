import './App.css'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'

//Hooks
import { UseForm } from './hooks/useForm'
import { useState } from 'react'


const formTemplate = {
  name: '',
  email: '',
  review: '',
  comment: ''
}


function App() {

  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value)=> {
    setData((prev) => {
      return {...prev,[key] : value}
    })
  }

  const formComponentes = [
  <UserForm data={data} updateFieldHandler={updateFieldHandler} />, 
  <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />, 
  <Thanks data={data} />]
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = UseForm(formComponentes)

  return (
    <div className='app'>
      <div className="header" id="header">
        <h2>Deixe sua avaliação</h2>
        <p>Obrigado por comprar conosco. Avalie a sua experiência conosco!</p>
      </div>

      <div className="form_container" id="form_container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs_container" id="inputs_container">{currentComponent}</div>
          <div className="actions" id="actions">
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button'>
                <span>Enviar</span>
                <FiSend />
              </button>
            )}

          </div>
        </form>

      </div>
    </div>
  )
}

export default App
