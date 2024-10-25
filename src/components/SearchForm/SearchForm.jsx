import toast from 'react-hot-toast';
import style from './SearchForm.module.css'


const SearchForm = ({onSubmit}) => {

    const handleSubmit = e => {
        e.preventDefault();
        const form  = e.target;
      
        const searchMovieForm = form.elements.text.value.trim();
    
        if (searchMovieForm === "" || searchMovieForm === null) {
  toast.error("No movies found for your search.");
  return ;
        }else{
          onSubmit(searchMovieForm);
          form.reset();
          form.elements.search.focus();
        };
        }
    
    
  return (
     
    <header className={style.header}>
      
    <form onSubmit={handleSubmit} className={style.form}>
   
      <div>
      <button className={style.btn} type="submit">
       Search
          </button>
    <input
            className={style.input}
            type="text"
            placeholder="Search movies"
            name="text"
          />
          
</div>
   
  </form>
</header>
  )
}

export default SearchForm;