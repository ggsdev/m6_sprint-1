import './App.css'

function App() {

  return (
    <main className='main_container'>
      <section className='section_logo'>
        <img src="" alt="Logo" />
      </section>
      <section className='section_login'>
        <form>
          <div className='login_container'>
            <input type="email" />
            <input type="password" />
            <span className='link_signin'>Não tem cadastro? Clique aqui</span>
          </div>
          <button className='button_login'>Login</button>
        </form>

      </section>
    </main>
  )
}

export default App
