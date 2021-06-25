import React, { useState, useEffect } from "react";
import { Container, Row, Col} from 'react-bootstrap/';
import './body.css';

export default function BodyPersonagens() {
  const [query, setQuery] = useState([]);
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  return (
    <Container>
    <div class="row gutters-sm">
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                <div class="mt-3">
                  <h4>John Doe</h4>
                  <p class="text-secondary mb-1">Full Stack Developer</p>
                  <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                  <button class="btn btn-primary">Follow</button>
                  <button class="btn btn-outline-primary">Message</button>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
}