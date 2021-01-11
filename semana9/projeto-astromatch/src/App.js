import React, {useEffect, useState} from "react"
import styled from "styled-components"
import axios from "axios"
import MainPage from "./components/MainPage"
import ListPage from "./components/ListPage"



const App = (props) => {
  const [renderMainPage, setRenderMainPage] = useState(true)
  const [renderListPage, setRenderListPage] = useState(false)

  const renderedPage = (page) => {
    if(page === "MainPage"){
      setRenderMainPage(true)
      setRenderListPage(false)
    }else{
      setRenderMainPage(false)
      setRenderListPage(true)
    }
  }

  return (
    <div>
      {renderMainPage && <MainPage renderMain={renderedPage} renderList={renderedPage}/>}
      {renderListPage && <ListPage renderMain={renderedPage} renderList={renderedPage}/>}
    </div>
  );
}

export default App;
