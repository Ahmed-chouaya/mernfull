import React from 'react'

const About = () => {
  return (
    <div>
    <section id="about">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="/images/pngegg (1).png"  alt='About' className='w-75'/>
                </div>
                <div className="col-md-6">
                    <h3 className="fs-5 mb-0">About Us</h3>
                    <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                    <hr className='w-50'/>
                    <p className="lead mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae ex sequi doloribus eum, laborum sint sit mollitia ducimus ipsa odit minus. Dolore, sunt officiis? Atque porro non asperiores velit, ratione sed pariatur exercitationem, quae officiis, aut praesentium architecto iure laboriosam modi recusandae repellendus omnis esse voluptatum laborum unde aperiam cumque.</p>
                    <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                    <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">About Us</button>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About