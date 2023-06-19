
import './App.css';

function App() {

















  return (
    <div className="App">
      <div className="top_section ">
        <div className='filter_bar d-flex p-3 fit_content '>
          <input type="text" id="nameInput" name="Name" className='' placeholder='Filter by title, comapany, expertise..'></input>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5964e0" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          <input type="text" id="countryInput" name="Country" className='' placeholder='Filter by location'></input>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5964e0" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <div className="d-flex align-items-baseline">
            <div className='d-flex align-items-start mx-2'>
              <input type="checkbox" id="fullTime" name="vehicle1"  value="job">
              </input>
              <label for="fullTime"> Full Time Only</label>
              
            </div>
            <button className='search_btn px-4'>Search</button>
          </div>
        </div>
        <div className='container'>
          <div className='d-flex justify-content-between pb-4'>
            <div className='main_title'>devjobs</div>
            <div className='d-flex'>
                <div>placeholder</div>
                <div>another</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
