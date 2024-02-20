import './App.css'
const numericButtonsClasses = 'btn btn-outline-dark w-100'
const OperadoresButtonsClasses = 'btn btn-outline-secondary w-100'
function App() {
  return(
    <div>
      <h1>Calculator</h1>
      <hr />
      <table className='center'>
        <tbody>
          <tr>
            <td className='text-end' colSpan={4}>
              <h2>0</h2>
            </td>
          </tr>
          <tr>
          <td >
            <button
            className='btn btn-outline-danger'
            type='button'
            >
              C
            </button>
          </td>
          <td >
            <button
            className='btn btn-outline-danger'
            type='button'
            >
              {'<'}
            </button>
          </td>
            <td >
            <button
            className={OperadoresButtonsClasses}
            type='button'
            >
              %
            </button>
          </td>
          <td >
            <button
            className={OperadoresButtonsClasses}
            type='button'
            >
              /
            </button>
          </td>
          </tr>
          <tr>
          <td >
            <button
            className={numericButtonsClasses}
            type='button'
            >
              7
            </button>
          </td>
            <td >
            <button
            className={numericButtonsClasses}
            type='button'
            >
              8
            </button>
          </td>
            <td >
            <button
            className={numericButtonsClasses}
            type='button'
            >
              9
            </button>
          </td>
          <td >
            <button
            className={OperadoresButtonsClasses}
            type='button'
            >
              X
            </button>
          </td>
          </tr>
          <tr>
          <td >
            <button
            className={numericButtonsClasses}
            type='button'
            >
              4
            </button>
          </td>
            <td >
            <button
            className={numericButtonsClasses}
            type='button'
            >
              5
            </button>
          </td>
            <td >
            <button
            className={numericButtonsClasses}
            type='button'
            >
              6
            </button>
          </td>
          <td >
            <button
            className={OperadoresButtonsClasses}
            type='button'
            >
              -
            </button>
          </td>
          </tr>
          <tr>
          <td >
            <button
            className={numericButtonsClasses}
            type='button'
            >
              1
            </button>
          </td>
            <td
            className={numericButtonsClasses}
            type='button'
            >
              2
            </td>
            <td >
            <button
            className={numericButtonsClasses}
            type='button'
            >
              3
            </button>
          </td>
              
            

          <td >
            <button
            className={OperadoresButtonsClasses}
            type='button'
            >
              +
            </button>
          </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button
              className={numericButtonsClasses}
              type='button'
              >
                0
              </button>
            </td>
            <td
            className={numericButtonsClasses}
            type='button'
            >
              .
            </td>
            <td >
            <button
            className='btn btn-outline-danger'
            type='button'
            >
              =
            </button>
          </td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}

export default App