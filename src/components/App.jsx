import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import {StyledApp} from './App.styled'

// import { Modal } from './Modal/Modal';

class App extends Component {
  state = {
    imagesName: '',
  };

  getImagesName = ({itemName}) => {

    if (itemName.trim() === '') {
          toast.warn(`Please write key-word`)
          return
      }
    this.setState({imagesName: itemName})
  }

  render() {
    const {imagesName} =this.state
    return (
      <StyledApp>
        <SearchBar onSubmit={this.getImagesName} />
        <ImageGallery item={imagesName} />
        <ToastContainer autoClose={2000} />
      </StyledApp>
    );
  }
}

export default App;
