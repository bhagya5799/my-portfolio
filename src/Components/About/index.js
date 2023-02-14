import React from 'react'
import Header from '../Header'
import Footer  from '../Footer'
import './index.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='header'>
        <Header />
      </div>
      <h3 className='about-me'>About Me</h3>
      <div className='details'>
        <div className='about-card'>
          <h5 className='name'>I'M BHAGYALAXMI</h5>
          <p>I am a full stack developer I can build responsive and Dainamic websites by using HTML CSS ,
            javascript react js bootstrap,node js,express,mongodb
          </p>
          <h4 className='title'>skills</h4>
          <div className='skills'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" title="React" alt="React" width="60" height="60" />&nbsp;
            <img src="https://cdn3.emoji.gg/emojis/css.png" title="CSS3" alt="CSS" width="60" height="60" />&nbsp;
            <img src="https://cdn3.emoji.gg/emojis/HTML.png" title="HTML5" alt="HTML" width="60" height="60" />&nbsp;
            <img src="https://cdn3.emoji.gg/emojis/node_js.png" title="JavaScript" alt="JavaScript" width="60" height="60" />&nbsp;
            <img src="https://cdn.iconscout.com/icon/free/png-512/sqlite-282687.png?w=512&f=avif" title="SQLITE" alt="SQL" width="60" height="60" />&nbsp;
            <img src="https://nextsoftware.io/files/images/logos/main/nodejs-logo.png" title="NodeJS" alt="NodeJS" width="60" height="60" />&nbsp;
            <img src="https://github.githubassets.com/images/modules/open_graph/github-mark.png" title="Git" alt="Git" width="60" height="60" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" title="python" alt="python" width="60" height="60" />
            <img src="https://e7.pngegg.com/pngimages/292/793/png-clipart-mongodb-logo-node-js-computer-icons-fontshop-international-angle-logo.png" title="mongodb" alt="mongodb" width="60" height="60" />
          </div>
          <div className='education'>
            <h5 className='title'>Education Details</h5>
            <table>
              <tr>
                <th>Education</th>
                <th>University</th>
                <th>Year</th>
                <th>%</th>
              </tr>
              <tr>
                <td>B.ed(Maths)</td>
                <td>Palamuru University</td>
                <td>2019</td>
                <td>84%</td>
              </tr>
              <tr>
                <td>M.Sc(Physice)</td>
                <td>Osmania University</td>
                <td>2017</td>
                <td>63%</td>
              </tr>
              <tr>
                <td>Graduation(B.sc)</td>
                <td>Palamuru University</td>
                <td>2015</td>
                <td>82%</td>
              </tr>
              <tr>
                <td>Intermediate</td>
                <td>Palamuru University</td>
                <td>2012</td>
                <td>59%</td>
              </tr>
              <tr>
                <td>SSC</td>
                <td>Palamuru University</td>
                <td>2009</td>
                <td>83%</td>
              </tr>
            </table>
          </div>
          <div className='experience'>
            <h5 className='title'>experience</h5>
            <div className='exp'>
              <p>lecturer at S.V.M degree collage Gadwal </p>
              <p>3 years </p>
            </div>

          </div>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
     
    </div>
  )
}
export default About