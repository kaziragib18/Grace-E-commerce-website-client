import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const Success = () => {
      const location = useLocation()
      console.log(location)
      return (
            <div
                  style={{
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                  }}
            >
                  <h1>Payment Successful</h1>
                  <Link to="/">
                        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
                  </Link>
            </div>
      )
}

export default Success
