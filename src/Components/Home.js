import React, { useEffect, useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import CardSkeleton from './CardSkeleton';
import InfinitScroll from 'react-infinite-scroll-component'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(16);
  const [page, setPage] = useState(1);

  let history = useNavigate();

  const updateList = async () => {
    let url = `https://randomuser.me/api/?results=${count}&page=${page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setResults(parseData.results);
    setLoading(false)
  }

  const fetchNextUsers = async () => {
    setCount(count + 16);
    setPage(page + 1);
    let url = `https://randomuser.me/api/?results=${count}&page=${page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setResults(results.concat(parseData.results));
    setLoading(false);
  }

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      history("/");
    } else {
      updateList();
    }
  }, [])

  return (
    <div className='my-5'>
      <InfinitScroll
        dataLength={results.length}
        next={fetchNextUsers}
        hasMore={true}
        loader={<Loader />} >

        <div className='container'>

          {loading ?
            <div className='row'>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div> :

            <div className='row'>

              {results.map((e) => (

                <div className='col-lg-3 col-md-4 my-3' key={e.email}>
                  <div className="card contain ">
                    <img src={e.picture.large} className="card-img-top" alt="..." />
                    <div className='img-overlay'>
                      <div className='content text-center'>
                        <p> <u> username: </u>{e.login.username}</p>
                        <p> <FaPhone /> {e.phone}</p>
                        <p> <MdEmail /> {e.email}</p>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{e.name.title + " " + e.name.first + " " + e.name.last}</h5>
                      <div className="card-text">
                        <div className='bottom'>
                          <div>
                            <HiLocationMarker style={{ marginRight: "2px", fontSize: "1rem" }} />
                            {e.location.city + ", " + e.location.country}
                          </div>
                          <span>
                            <svg width="0" height="0">
                              <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop stopColor="#3422c5" offset="0%" />
                                <stop stopColor="#00c4ff" offset="100%" />
                              </linearGradient>
                            </svg>
                            <button type="button" className='btn ' data-bs-toggle="tooltip" data-bs-placement="top" title={e.phone}><FaPhone style={{ fill: "url(#blue-gradient)", fontSize: "1.2rem" }} /></button>
                            <button type="button" className='btn' data-bs-toggle="tooltip" data-bs-placement="top" title={e.email}><MdEmail style={{ fill: "url(#blue-gradient)", fontSize: "1.2rem" }} /></button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              ))
              }

            </div>
          }
        </div >
      </InfinitScroll>
    </div>
  )
}

export default Home