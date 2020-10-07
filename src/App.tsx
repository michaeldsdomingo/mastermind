import React, {useState, useEffect} from 'react';
import {Switch, Route, withRouter, RouteComponentProps} from "react-router-dom";
import ImageSearch from './components/ImageSearch';
import Navbar from './components/Navbar';
import Images from './components/Images';
import ErrorMessage from './components/ErrorMessage'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as imagesService from './services/imagesService';
import {ImagesResponse,ImageErrorResponse} from './types/ImageResponse'
import {ImagesState} from './types/ImagesState'
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
// import localeInfo from "rc-pagination/lib/locale/en_US";

import './styles/app.css';
require('dotenv').config();


function App(props :RouteComponentProps<string>) {
  const [images, setImages] = useState<ImagesState>({imagesArray: [], status: "", isInProgress: false});
  const [query, setQuery] = useState("");
  const [isModalShow, setIsModalShow] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setImages({imagesArray: [], status: "", isInProgress: true})
    const queryParam: string = props.location.search.split("=")[1]
    setQuery(queryParam);
    
    imagesService.getImagesBySearch(queryParam, page).then(onGetImagesSuccess).catch(onGetImagesError)
    console.log(queryParam)
    
  }, [])

  const onGetImagesSuccess = (response: ImagesResponse) => {
    console.log(response)
    let status: string = "";
    if (response.data.results.length > 0) {
        status = "success"
    } else {
        status = "No Images Found"
    }
    
    setTotal(response.data.total)
    setImages({imagesArray: response.data.results, status, isInProgress: false})
  }

  const onGetImagesError = (error: ImageErrorResponse) => {
    setImages({imagesArray: [], status: error.response.data.errors[0], isInProgress: false})
  }
  
  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    imagesService.getImagesBySearch(query, newPage).then(onGetImagesSuccess).catch(onGetImagesError)
  };

  return (
    <div className="App">
        <Switch>
          <Route path="/" exact>
            <div id="main-form">
              <ImageSearch direction="vertical" setImages={setImages} query={query} setQuery={setQuery} page={page} setTotal={setTotal} />
            </div>
          </Route>
          <Route path="/images/search">
            <Navbar setImages={setImages} query={query} setQuery={setQuery} page={page} setTotal={setTotal}/>
            <div id="main-container">
              {images.isInProgress 
                ? <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                : (images.imagesArray.length > 0 && images.status === "success"
                    ? <Images 
                        images={images.imagesArray} 
                        toggleModalShow={setIsModalShow} 
                        isModalShow={isModalShow} 
                        page={page} 
                        setPage={setPage} 
                        total={total} /> 
                    : <ErrorMessage message={images.status} />)
              }
              <Pagination
                    total={total}
                    current={page}
                    pageSize={9}
                    onChange={handlePageChange}
                    // locale={localeInfo}
                    className="d-flex justify-content-center mt-5 mb-5"
                />

            </div>
          </Route>
        </Switch>
    </div>
  );
}

export default withRouter(App);
