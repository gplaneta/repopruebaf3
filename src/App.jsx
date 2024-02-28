function App() {
  
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');

  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación del primer input
    if (input1.trim().length < 3 || input1.trim().startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    // Validación del segundo input
    if (input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    // Si supera las validaciones, limpiamos el error y dejamos que los datos se rendericen en <Card/>
    setError('');
  };

  return (
    <div className="App">
      <h1>Formulario</h1>
      <form>
        <label>
          Primer Input:
          <input
            type="text"
            value={input1}
            onChange={handleInputChange1}
          />
        </label>
        <br />
        <label>
          Segundo Input:
          <input
            type="text"
            value={input2}
            onChange={handleInputChange2}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <Card input1={input1} input2={input2} />
    </div>
  );
}

export default App;
