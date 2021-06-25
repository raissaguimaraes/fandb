import React, { useState, useEffect } from "react";
import { Container, Row, Col} from 'react-bootstrap/';
import './body.css';

export default function Search() {
  const [query, setQuery] = useState([]);
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  return (
    <div class="container">
    <div class="row">
      <div class="col-lg-12 card-margin">

        <div class="ibox-content m-b-sm border-bottom">
                <div class="p-xs">
                    <div class="pull-left m-r-md">
                        <i class="fa fa-globe text-navy mid-icon"></i>
                    </div>
                    <h2>Bem vindo ao FanDB</h2>
                    <span>Explore as informações do seu Fandom!!</span>
                </div>
        </div>

        <div class="card search-form">
            <div class="card-body p-0">
                <form id="search-form">
                    <div class="row">
                        <div class="col-12">
                            <div class="row no-gutters">
                                
                                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Personagens</option>
                                        <option>Episodios</option>
                                    </select>
                                </div>

                                <div class="col-lg-8 col-md-6 col-sm-12 p-0">
                                    <input type="text" placeholder="Pesquisa" class="form-control" id="search" name="search" />
                                </div>

                                <div class="col-lg-1 col-md-3 col-sm-12 p-0">
                                    <button type="submit" class="btn btn-base">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    </div>
  );
}