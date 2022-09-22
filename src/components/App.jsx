import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar/SearchBar';
import  ImageGallery  from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';

class App extends Component {
  state = {
    imagesName: '',
    page: 1,
    loading: false,
  };

  getImagesName = ({itemName}) => {

    if (itemName.trim() === '') {
          toast.warn(`Please write key-word`)
          return
      }
    this.setState({imagesName: itemName})
  }

  render() {
    const {imagesName, page, loading} =this.state
    return (
      <div>
        <SearchBar onSubmit={this.getImagesName} />
        <ImageGallery item={imagesName} page={page} />
        <Loader />
        <Button />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;
